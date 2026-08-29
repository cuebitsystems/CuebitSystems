# Cuebit Systems Docs

Documentation site for all four Cuebit Systems products — **DocketFlow**,
**Wattline**, **Resona**, **Kayeli** — built with
[Docusaurus](https://docusaurus.io) and designed to be hosted on
**Netlify** or **Vercel**.

## Structure

```
├── docusaurus.config.js        ← site config (nav, theme, colors)
├── netlify.toml                ← Netlify build settings (auto-detected)
├── vercel.json                 ← Vercel build settings (auto-detected)
├── sidebars-*.js               ← one sidebar per product
├── docketflow-docs/            ← DocketFlow content (full user guide)
├── wattline-docs/               ← placeholder — add real content here
├── resona-docs/                 ← placeholder
├── kayeli-docs/                 ← placeholder
├── src/pages/index.js           ← homepage (gradient hero + product cards)
├── src/css/custom.css           ← brand theme (blue → teal → green gradient)
└── static/img/                  ← logo, favicon
```

## Local preview

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Deploying — Netlify (recommended, easiest)

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to **app.netlify.com** → sign up/log in with your company email.
3. **Add new site → Import an existing project → GitHub** → pick this repo.
4. Netlify reads `netlify.toml` automatically — build command and output folder
   are already set. Click **Deploy**.
5. Once live, go to **Site settings → Domain management → Add a custom domain**
   → enter `docs.cuebitlabs.com`.
6. Netlify shows you a DNS record (usually a CNAME) — send it to whoever
   manages `cuebitlabs.com`'s DNS.

## Deploying — Vercel (alternative)

1. Go to **vercel.com** → sign up/log in with your company email.
2. **Add New → Project → Import** this GitHub repo.
3. Vercel auto-detects Docusaurus via `vercel.json`. Click **Deploy**.
4. Once live, go to **Project → Settings → Domains → Add** →
   `docs.cuebitlabs.com`.
5. Vercel shows you the DNS record to add.

## Updating content later

Edit the `.md` files → commit → push to `main`. Both Netlify and Vercel
auto-rebuild and redeploy on every push — no manual steps needed.

## Notes

- `.github/workflows/deploy.yml` is left in place from an earlier GitHub Pages
  setup. It's harmless to keep, but not needed if you're deploying via
  Netlify/Vercel — feel free to delete it.
- Placeholder product pages (Wattline, Resona, Kayeli) show a "Coming soon"
  badge on the homepage. Update `src/pages/index.js` to change a product's
  `status` to `'Live docs'` once its real content is written.
