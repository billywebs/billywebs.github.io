# Billy Webs

Lightning-fast, hand-coded static sites for local trades and small businesses across Ottawa and the Ottawa Valley. Flat **$100/month**. No upfront cost.

This repo is the marketing/portfolio site for the business itself.

---

## Local development

```powershell
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Test pipeline

Four layers, run separately or as one full QA pass:

```powershell
npm test                     # Vitest unit tests
npm run test:e2e             # Playwright headless regression
npm run test:e2e:regression  # Pixel-perfect screenshot diffs
npm run test:e2e:visual      # Headed visual QA (watch the browser!)
npm run test:qa              # All four, sequentially
```

The first time you run visual-regression it will create baseline screenshots in `e2e/visual-regression.spec.ts-snapshots/`. **Commit those `.png` files.** When you intentionally change the UI, update them with:

```powershell
npm run test:e2e:regression -- --update-snapshots
```

Before installing Playwright browsers (first-time only):

```powershell
npx playwright install chromium
```

## Production build

```powershell
npm run build      # outputs to /build
npm run preview    # serves /build on http://localhost:4173
```

---

## When you're ready to go live — the full recipe

Follow these phases in order. Don't skip ahead.

### Phase 1 — Domain & email (Porkbun)

1. Go to **<https://porkbun.com>**.
2. Register **`billywebs.ca`** (and optionally `.com` to protect the brand).
3. Add the **Porkbun hosted email** add-on (~$24/year) so you get `billy@billywebs.ca`.
4. Set the email password and verify you can send/receive a test email.

### Phase 2 — GitHub Organization

1. Log into GitHub on your personal account.
2. Top right → **+** icon → **New organization** → **Free plan**.
3. Name it **`billywebs`**.
4. Contact email: `billy@billywebs.ca` (from Phase 1).
5. Skip adding members for now.

### Phase 3 — Push this repo

1. Inside the `billywebs` org, create a new repo. Two options:
   - **Org root site** (recommended): name it **`billywebs.github.io`**. Site will be served at `https://billywebs.github.io` and the custom domain will map to root. **Leave `BASE_PATH` unset.**
   - **Project subpath** (e.g. `portfolio`): site served at `https://billywebs.github.io/portfolio`. Build with `BASE_PATH=/portfolio npm run build`.
2. Push this code:

   ```powershell
   git init
   git add .
   git commit -m "Initial commit — Billy Webs portfolio"
   git branch -M main
   git remote add origin https://github.com/billywebs/billywebs.github.io.git
   git push -u origin main
   ```

### Phase 4 — GitHub Pages deploy

The simplest path is a GitHub Actions workflow. Create `.github/workflows/deploy.yml` in the repo (or ask me to generate it when you're ready):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: build }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

Then in the repo: **Settings → Pages → Source → GitHub Actions**.

### Phase 5 — Custom domain (`billywebs.ca`)

1. In **Porkbun → Domain Management → DNS**, add these records:

   | Type  | Host  | Answer                  |
   | ----- | ----- | ----------------------- |
   | A     | (root)| `185.199.108.153`       |
   | A     | (root)| `185.199.109.153`       |
   | A     | (root)| `185.199.110.153`       |
   | A     | (root)| `185.199.111.153`       |
   | CNAME | `www` | `billywebs.github.io.` |

2. In the GitHub repo → **Settings → Pages → Custom domain** → enter `billywebs.ca` → Save.
3. Wait ~5–30 minutes for DNS propagation, then check **Enforce HTTPS**.
4. Verify: <https://billywebs.ca> loads, <https://www.billywebs.ca> redirects to root.

### Phase 6 — Wire up the contact form (Web3Forms)

1. Go to **<https://web3forms.com>**.
2. Enter `billy@billywebs.ca` → check inbox for your access key.
3. Create a `.env` file at the project root:

   ```
   VITE_WEB3FORMS_KEY=your-actual-key-here
   ```

4. Rebuild and redeploy. The form will now POST submissions directly to your inbox.

### Phase 7 — Business setup

1. **Wave Accounting** (<https://waveapps.com>) — free, Canadian. Set up recurring $100/mo invoicing.
2. **Google Business Profile** — register "Billy Webs" as a **Service Area Business** (hide your home address). List Ottawa, Eganville, Mattawa, surrounding communities.
3. **Alignable** + **Nextdoor** — set up business pages, paste the 30-years-in-software pitch.
4. **Contract** — use the template from the Gemini chat (12-month minimum, code ownership clauses). Sign via HelloSign / Dropbox Sign.

---

## Project structure

```
billy_webs/
├── .github/
│   ├── copilot-instructions.md       ← rules every Copilot session loads
│   └── instructions/
│       └── design-system.instructions.md  ← finalized template registry
├── e2e/
│   ├── critical-path.spec.ts         ← headless regression
│   ├── visual-qa.spec.ts             ← headed money-shot tour
│   └── visual-regression.spec.ts     ← pixel diff baselines
├── src/
│   ├── app.html
│   ├── app.css                       ← all design tokens
│   ├── lib/
│   │   ├── components/               ← Hero, Portfolio, Process, Contact, Footer
│   │   ├── data/portfolio.ts         ← edit this to add/update projects
│   │   ├── config.ts                 ← Web3Forms key
│   │   └── config.test.ts
│   └── routes/
│       ├── +layout.svelte
│       ├── +layout.ts
│       └── +page.svelte
├── static/
│   ├── favicon.svg
│   └── .nojekyll                     ← required for GitHub Pages
├── svelte.config.js
├── vite.config.ts
├── vitest.config.ts
├── playwright.config.ts
└── package.json
```

## Adding a new portfolio entry

Edit [src/lib/data/portfolio.ts](src/lib/data/portfolio.ts), drop a screenshot into `static/portfolio/`, reference it as `/portfolio/<filename>.png`.

## Adding a new client template to the design system

When a client site is **confirmed good**, document its tokens in [.github/instructions/design-system.instructions.md](.github/instructions/design-system.instructions.md). Future sites can then be replicated by reference: *"build a painter's site in the style of the Electrician template."*
