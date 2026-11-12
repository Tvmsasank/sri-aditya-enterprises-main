# Sri Aditya Enterprises — The Living Atelier redesign

## What changed
- Replaced the active homepage composition with the redesigned `RedesignedHome` experience.
- Applied a warm furniture-led identity: forest green, warm ivory, walnut and brass.
- Added a cinematic hero with layered product photography and restrained entrance motion.
- Added animated collection filtering and responsive product cards using the site's existing photographs.
- Retained the existing craftsmanship story and Instagram showcase components.
- Reworked the story, showroom visit, WhatsApp inquiry, partner/payment and footer areas.
- Kept the existing phone, WhatsApp, Google Maps, Instagram, reviews, QR, partner and payment assets/links.

## Motion and interaction
- Framer Motion entrance/reveal transitions and animated collection filtering.
- Hover image zoom, card lift, and subtle directional cues.
- Mobile navigation drawer and persistent mobile Call / WhatsApp actions.
- `prefers-reduced-motion` support; no scroll hijacking or forced animation loops.

## Apply safely
1. Create a feature branch before copying files:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/living-atelier-redesign
   ```
2. Back up the current working tree or commit/stash any local changes.
3. Copy the `src/` directory from this package into the repository, replacing the corresponding files.
4. Keep your existing `.env` local. It is intentionally not included in this package.
5. Reinstall dependencies on your own machine (do not copy `node_modules` between operating systems):
   ```bash
   npm ci
   npm run dev
   npm run build
   ```
6. Review desktop and mobile layouts, verify contact details and all links, then commit:
   ```bash
   git add src
   git commit -m "Redesign Sri Aditya homepage as Living Atelier"
   git push -u origin feature/living-atelier-redesign
   ```

## Important verification before production
- Confirm the showroom phone number and `VITE_OWNER_PHONE`.
- Confirm opening hours, showroom address and Google Maps destination.
- Confirm all product photographs are current and accurately labelled.
- Confirm the founder portrait is approved for public use.
- Confirm partner/payment logos and claims are currently authorized.
- The website remains a catalogue and enquiry experience; no inventory, online pricing or checkout has been invented.

## Validation performed here
- TypeScript check: `node node_modules/typescript/bin/tsc --noEmit` completed successfully.
- A production Vite build could not be completed in this Linux validation container because the uploaded `node_modules` contains Windows-native Rollup/esbuild binaries. Run `npm ci` on the target machine before building. No build success is claimed.
