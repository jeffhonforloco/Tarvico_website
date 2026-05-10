# Tarvico Inc. — Official Website

World-class corporate holding company website for Tarvico Inc.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (available for enhanced animations)
- **DM Sans** + **Cormorant Garamond** (Google Fonts)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, overview, flagship, portfolio preview, philosophy, founder letter CTA |
| `/portfolio` | Full portfolio of all 5 ventures + Urs79 |
| `/about` | Mission, leadership, timeline, corporate structure |
| `/investors` | Investor relations, market stats, thesis, governance |
| `/vision` | Full founder letter by Jeff Honforloco |
| `/careers` | Culture, values, open positions |
| `/newsroom` | Announcements, product updates, press |
| `/contact` | Contact form + email channels |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Adding Your Logo Images

Place your logo files in `/public/`:
- `/public/tarvico-logo.png` — horizontal wordmark
- `/public/tarvico-icon.png` — golden T mark

Then update `components/Nav.tsx` to use `<Image>` from `next/image`:

```tsx
import Image from 'next/image'
// Replace the inline SVG with:
<Image src="/tarvico-icon.png" width={28} height={28} alt="Tarvico" />
```

## Design System

All design tokens live in `app/globals.css` as CSS variables:

```css
--gold:        #C9A447   /* Primary accent — matches logo triangle */
--gold-light:  #D4B55A
--bg:          #070707   /* Near-black background */
--bg-raised:   #0C0C0B
--text:        #EDE9E0   /* Warm white */
--text-2:      #7A776F   /* Secondary text */
```

## Deploying

### Vercel (recommended)
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder or connect your repo
```

## Extending with Framer Motion

For animated page transitions, install and wrap the layout:

```tsx
// app/layout.tsx
import { AnimatePresence, motion } from 'framer-motion'

// Wrap children in:
<AnimatePresence mode="wait">
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

---

**Tarvico Inc.** — Building the infrastructure layer for the AI era.
