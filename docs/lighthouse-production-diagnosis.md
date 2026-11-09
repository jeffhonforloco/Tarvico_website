# Tarvico Lighthouse production diagnosis

**Baseline** `093c886d957106ee729d22fc17e2f418589a73b1` · Homepage at `https://www.tarvico.com/` · Lighthouse 13.4.1

## Lighthouse results

Three fresh navigation runs per device in each condition, with Lighthouse 13.4.1, Chrome 156 and the standard simulated throttling preset for each device. Values are listed in run order.

| Condition | Device | Performance | Best Practices | Accessibility | SEO |
| --- | --- | --- | --- | --- | --- |
| Production | mobile | 98 / 94 / 99 | 73 / 73 / 73 | 100 / 100 / 100 | 100 / 100 / 100 |
| Production | desktop | 100 / 100 / 100 | 73 / 73 / 73 | 100 / 100 / 100 | 100 / 100 / 100 |
| Browser isolation | mobile | 96 / 98 / 98 | 100 / 100 / 100 | 100 / 100 / 100 | 100 / 100 / 100 |
| Browser isolation | desktop | 99 / 99 / 100 | 100 / 100 / 100 | 100 / 100 / 100 | 100 / 100 / 100 |

For the isolation experiment, DevTools intercepted the production homepage response in a temporary browser and removed only the analytics tag and JavaScript Detections bootstrap. The CSP and all other security policies were preserved. Both scripts were present and removed in each of the six isolation runs. All three failing audits passed in isolation. The desktop score and timing in this experiment include response interception overhead. These runs establish attribution, while production performance remains the unmodified baseline.

A separate Best Practices-only check removed the analytics beacon while retaining the challenge script. Both device presets scored **81**. The console and Inspector audits passed, and the deprecations audit still failed.

## Best Practices failures

Every fresh production run scored 73 in Best Practices. The previously reported 92 was not reproduced in this Lighthouse version and test setup.

| Audit | Source |
| --- | --- |
| `errors-in-console` | The live CSP blocks the Cloudflare-injected `static.cloudflareinsights.com/beacon.min.js` script. |
| `inspector-issues` | Chrome records the same blocked analytics load as a CSP issue. |
| `deprecations` | Cloudflare's same-origin `/cdn-cgi/challenge-platform/scripts/jsd/main.js` triggers warnings for FencedFrame, persistent storage and Protected Audience APIs. |

The analytics failures share one cause. The challenge warnings are separate. The application has no matching script references. Cloudflare also injects an email-decoder script. The audits did not attribute these failures to that script.

## Mobile performance

- The mobile LCP element is the SireIQ hero screenshot. It is present in the initial HTML, eager-loaded and high priority. Lighthouse found no LCP discovery savings.
- Production mobile Speed Index was 1.60–4.08 s and LCP was 1.87–2.66 s. Mobile Performance was 98 at the median in both conditions. CLS was zero. The challenge script was attributed about 214 ms of boot-up work in one representative mobile trace. Lighthouse reported no unused-JavaScript savings and estimated 12 KiB of framework compatibility code with no FCP or LCP benefit from removing it.
- The 8.7 KB stylesheet was estimated to cost roughly 30 ms in one mobile run, with zero estimated LCP savings. Changing how essential styles load would risk first paint and layout.
- Image Delivery flagged approximately 116 KiB on mobile in one run. Most of the estimate came from the existing responsive Lagos and Vytre images below the fold. The already responsive hero contributed about 14 KB to the estimate. No image substitutions, recompression or quality changes were justified by these measurements.

## Minimal Cloudflare remediation for separate approval

1. In **Cloudflare → Web Analytics → Manage site**, locate the Tarvico hostname and confirm whether automatic injection is active. If browser RUM is not required, set automatic setup to **Disable** for the relevant site. If the Pages integration owns the beacon, inspect **Workers & Pages → tarvico-website → Metrics → Web Analytics** and disable injection there instead. Confirm the owner before touching settings. Verify the tag is absent in fresh HTML and rerun Lighthouse. Roll back by restoring the previous analytics setting if necessary. Keep CSP intact. [Cloudflare Web Analytics settings](https://developers.cloudflare.com/web-analytics/get-started/)
2. Leave bot protection in place. Check **Security → Settings → Bot traffic → JS detections** to identify the relevant product and report the script path, Chromium/Lighthouse versions and deprecated APIs to Cloudflare Support. If the zone uses Bot Fight Mode, Cloudflare documents that JavaScript Detections cannot be switched off independently. Disabling bot protection to raise Lighthouse scores would change security and is outside scope. [Cloudflare JavaScript Detections](https://developers.cloudflare.com/cloudflare-challenges/challenge-types/javascript-detections/)
3. After any approved change, repeat three cold mobile and three cold desktop audits at the same URL with the same Lighthouse version. Verify the two analytics audits separately from the challenge audit. Confirm Accessibility, SEO and desktop Performance remain at their baselines.

## Regression verification

- Production build and standalone TypeScript passed.
- All five applicable repository checks passed, including the two mocked contact tests and all 17 exported metadata comparisons against production. Three opt-in redirect and preview checks were outside this task.
- Live Chromium smoke checks passed for all 17 routes at 390 px and 1440 px in both themes, 68 page loads. Each route returned 200 with its canonical and one H1. The smoke test also verified theme toggle persistence and checked for horizontal overflow and uncaught page errors.
- Standalone lint still stops at the existing Next.js ESLint setup prompt. No checked-in config was added.

This draft is documentation only. It changes no application code or production settings.
