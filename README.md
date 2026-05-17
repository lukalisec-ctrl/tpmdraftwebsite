# Dr. Tanja Pia Metelko — Website

Static HTML/CSS/JS website for Dr. Tanja Pia Metelko. Production-ready, designed for WordPress migration.

## File structure

```
/
├── index.html                        Homepage
├── tanja.html                        Bio page
├── retreati.html                     Retreats hub
├── retreati/
│   ├── zavestni-kreator.html         Retreat: Zavestni Kreator
│   ├── koherenca-srca.html           Retreat: Koherenca Srca (HeartMath)
│   └── spremenite-svoj-um.html       Retreat: Spremenite Svoj Um (NCS)
├── podjetja.html                     B2B corporate page
├── meditacije.html                   Akademija / meditations (coming soon)
├── aktualno.html                     Blog/articles index
├── kontakt.html                      Contact page
├── css/
│   ├── reset.css                     Modern CSS reset
│   ├── variables.css                 Design tokens (colors, fonts, spacing)
│   ├── typography.css                Type scale, heading styles, utilities
│   ├── layout.css                    Grid, containers, sections, hero, stats
│   ├── components.css                Nav, buttons, cards, forms, footer
│   └── pages.css                     Page-specific styles
├── js/
│   ├── nav.js                        Sticky nav, mobile menu
│   ├── reveal.js                     Intersection Observer animations, FAQ, counters
│   └── forms.js                      Form validation and submit feedback
├── assets/
│   ├── favicon.svg
│   └── logo.svg
├── img/                              Image slot directory (see below)
│   ├── hero/
│   ├── retreati/
│   ├── ucinki/
│   ├── press/
│   └── logos/
└── public/images/                    Existing photos (provided by client)
```

## Preview locally

Run the included script:

```bash
chmod +x preview-server.sh
./preview-server.sh
```

Then open http://localhost:8000 in your browser.

Or manually:

```bash
python3 -m http.server 8000
```

## Images: how to swap

### Existing real photos (already in `/public/images/`)

| File | Used on |
|---|---|
| `beloozadjeTPM.jpeg` | Homepage Tanja intro section |
| `oder.jpg` | Tanja page hero |
| `TPMstoji.png` | Available for additional use |
| `TPMzunaj.jpeg` | Available for additional use |
| `tabla.jpg` / `tabla1.jpg` | Available for workshop scenes |

### Unsplash placeholders (need replacing with real images)

Search for `<!-- [PLACEHOLDER` in any HTML file to find all placeholder images.

To replace an Unsplash URL with a local image:

1. Add the real image to `/img/hero/` (or relevant subfolder)
2. Replace `src="https://images.unsplash.com/..."` with `src="img/hero/your-image.jpg"`
3. Update the `alt` attribute if needed
4. Optionally wrap in `<picture>` for WebP support:

```html
<picture>
  <source srcset="img/hero/home-hero.webp" type="image/webp">
  <img src="img/hero/home-hero.jpg" alt="Opis slike v slovenščini" loading="lazy">
</picture>
```

### Image treatment

All images use this CSS filter for brand consistency:

```css
filter: contrast(0.95) saturate(0.9);
```

Hero images also have a magenta tint overlay (applied via `.hero__visual-overlay`).

## WordPress migration

This site is structured for clean PHP template conversion:

| HTML element | WordPress equivalent |
|---|---|
| `<header class="site-nav">` | `header.php` |
| `<footer class="site-footer">` | `footer.php` |
| `<main id="main">` | Page template content |
| Nav `<nav class="nav-links">` | `wp_nav_menu()` |
| Form `action="#"` | Replace with CF7 / Gravity Forms shortcode |

Steps for migration:
1. Create WordPress theme directory
2. Extract `<head>` contents into `functions.php` (enqueue styles/scripts)
3. Create `header.php` from the `<header>` block
4. Create `footer.php` from the `<footer>` block
5. Create individual page templates (`page-tanja.php`, `page-retreati.php`, etc.)
6. Replace hard-coded asset URLs with `get_template_directory_uri()`

## Content to complete before launch

- [ ] Replace all `<!-- [PLACEHOLDER` images with real photos
- [ ] Replace placeholder testimonials (marked `<!-- [PLACEHOLDER — REPLACE`) with verified real quotes
- [ ] Add real phone number to footer and contact page
- [ ] Add real social media profile URLs (Facebook, LinkedIn, Instagram)
- [ ] Connect forms to real handler (CF7, Gravity Forms, Mailchimp, etc.)
- [ ] Add retreat PDF brochures (linked as `href="#"` in retreat pages)
- [ ] Verify retreat dates, prices, and locations are current
- [ ] Add Google Analytics or equivalent tracking
- [ ] Configure production domain in canonical URLs and OG tags
- [ ] Create sitemap.xml with final URLs
- [ ] Test all pages at 375px, 768px, 1024px, 1440px

## Design system

Colors, typography, and spacing are defined in `css/variables.css`. All design decisions:

- **Primary accent**: `--magenta: #B83280`
- **Background**: `--cream: #FAF6F1` (warm, not pure white)
- **Display font**: Fraunces (variable, Google Fonts)
- **Body font**: Manrope (Google Fonts)
- **Signature move**: Italic `<em>` inside headings renders in magenta

## Browser support

Modern evergreen browsers. No IE11 support. Uses:
- CSS Custom Properties
- CSS Grid and Flexbox
- Intersection Observer API
- CSS clamp() for fluid typography
- `font-variation-settings` for variable fonts
