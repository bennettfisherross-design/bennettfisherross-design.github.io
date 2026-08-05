# Bennett Ross — Maker Portfolio Template

A static, two-page portfolio site (Home + Projects) styled after Aaed Musa's site,
reworked into a navy / gray / white "blueprint" theme for a maker rather than a
content creator. No build step — plain HTML/CSS/JS, ready for GitHub Pages.

## Structure

```
index.html            Home page (hero, latest projects, about)
projects.html          All projects, with category filter buttons
project-detail.html    Example individual project write-up (duplicate this per project)
css/style.css          All styling — colors and fonts are CSS variables at the top
js/main.js             Mobile nav toggle, footer year, project filter
assets/                Placeholder images (SVG) — swap these for your own photos
```

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `bennett-ross.github.io` for a user site, or any
   name for a project site).
2. Push these files to the repo root (or to a `docs/` folder — your choice).
3. In the repo, go to **Settings → Pages**, set the source branch (e.g. `main`)
   and folder (`/root` or `/docs`), and save.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`
   (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).

## Customizing

- **Your LinkedIn**: search for `YOUR-LINKEDIN` across all HTML files and replace
  with your actual profile URL.
- **Colors**: edit the CSS variables at the top of `css/style.css`
  (`--navy-900`, `--navy-700`, `--gray-600`, etc.) to adjust the palette.
- **Photos**: replace files in `assets/` and `assets/projects/` with real photos.
  Every project thumbnail is locked to a 4:3 frame (`aspect-ratio: 4/3` +
  `object-fit: cover` in `.project-card .thumb`), so any photo you drop in will be
  cropped to match — the grid stays uniform even if your source photos are all
  different sizes or orientations.
- **Adding a project**: copy one `.project-card` block in `projects.html`,
  update the image, tag, build number, title, description, and `data-category`
  (used by the filter buttons), then duplicate `project-detail.html` for the
  full write-up and link to it from the card's `href`.
- **Resume link**: point the "Download Resume" button in `index.html` at your
  resume (a hosted PDF link, or a file you add to the repo).
- **Fonts**: pulled from Google Fonts (Space Grotesk, Inter, IBM Plex Mono) via
  the `<link>` tags in each page's `<head>`.

## Notes

- Removed: YouTube, Patreon, Instagram, and X/Twitter links and sections —
  only LinkedIn remains, per the brief.
- Design signature: corner "datum marks" on images/cards and dimension-line
  section dividers, referencing technical/engineering drawings — fitting for a
  mechanical engineering portfolio.
