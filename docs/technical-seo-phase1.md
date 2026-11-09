# Phase 1 technical SEO rollout

The application change removes the blanket Next.js asset block in robots.txt. The generated rules still disallow the exact `/api` path and all paths below `/api/`. Robots rules are crawler guidance. They do not provide access control.

## Cloudflare configuration after approval

Use the existing Cloudflare zone and Pages project. Record current redirect rule ordering before making changes. The PR does not activate either hostname rule.

### Apex to www

In the `tarvico.com` zone, open **Rules → Redirect Rules → Create rule → Single Redirect**. Name the rule **Tarvico apex to www**. Select **Custom filter expression** and enter:

```text
(http.host eq "tarvico.com" and not (http.request.uri.path eq "/api" or starts_with(http.request.uri.path, "/api/")))
```

Under **URL redirect**, select **Dynamic** and enter:

```text
concat("https://www.tarvico.com", raw.http.request.uri.path)
```

Select **301** and enable **Preserve query string**. The exact host match prevents a loop and leaves www requests alone. The normalized path in the filter excludes the API, while the raw path in the target preserves request spelling. Check interaction with existing HTTP-to-HTTPS behavior and avoid unnecessary hops. Verify the rule with the acceptance test below. [Cloudflare Single Redirect settings](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/)

### Default Pages production hostname

The production alias serves duplicate content. Cloudflare supports a separate account-level Bulk Redirect for this hostname. In **Bulk Redirects**, add a dedicated list entry with source `tarvico-website.pages.dev`, target `https://www.tarvico.com`, status **301**, and **Preserve query string**, **Subpath matching** and **Preserve path suffix** enabled. Leave **Include subdomains** disabled. Attach the list to a dedicated Bulk Redirect Rule. Keep this rule separate so it can be disabled independently.

With subdomain matching disabled, branch and commit preview hostnames are outside the rule. Confirm with both preview URLs and confirm GitHub's Cloudflare Pages check continues to pass. The redirect should be activated separately after confirming that existing production-alias consumers, including direct API clients and deployment smoke checks, can use www. If any required consumer needs a 200 from the alias, defer its redirect. A hostname-specific `X-Robots-Tag: noindex` on alias HTML is an alternative only if the edge can apply it solely on that alias. Avoid an export-wide header because the same files serve www and previews. [Cloudflare Pages redirect setup](https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/) · [Bulk Redirect parameters](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/parameters/)

## Acceptance and rollback

From the repository root after building:

```sh
npm --prefix tarvico-website run build
SEO_BASELINE_URL=https://www.tarvico.com node --test tests/seo.test.mjs tests/contact.test.mjs
SEO_BRANCH_PREVIEW_URL=https://BRANCH.tarvico-website.pages.dev \
SEO_COMMIT_PREVIEW_URL=https://COMMIT.tarvico-website.pages.dev \
  node --test tests/seo.test.mjs
```

The baseline comparison checks all 17 exported pages against live titles, descriptions, robots metadata, canonical URLs, and Open Graph and Twitter metadata. After each approved edge change, set `SEO_VERIFY_APEX_REDIRECT=1` or `SEO_VERIFY_PAGES_REDIRECT=1` and rerun the SEO test. These opt-in checks exercise the deployed Cloudflare rules. They are intentionally skipped before activation. API verification uses OPTIONS only.

If a redirect regresses, disable its corresponding rule and rerun the baseline host checks. For an application regression, revert the robots change or roll Pages back to the preceding production deployment after release approval. Rollback of the Pages build and rollback of the dashboard rules are independent.

Once the approved changes are live, confirm the public robots file and that current Next.js JS, CSS and fonts plus a representative image are reachable. In Search Console, resubmit the existing `https://www.tarvico.com/sitemap.xml` and inspect the www Research and Investor Relations URLs. Recheck sitemap last-read, URL discovery, and Google-selected canonicals after recrawl. These account actions require separate approval.
