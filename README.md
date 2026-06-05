# The Legend Rajveer — Travel Hub

**Domain:** thelegendrajveer.com  
**Type:** Static HTML/CSS/JS — no build step, no framework  
**Hosting:** Works anywhere — GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, Hostinger, GoDaddy

---

## File Structure

```
thelegendrajveer.com/
├── index.html              ← Homepage
├── 404.html                ← Error page
├── robots.txt              ← Search engine instructions
├── sitemap.xml             ← Sitemap for SEO
├── CNAME                   ← For GitHub Pages custom domain
├── css/
│   ├── main.css            ← Shared site styles
│   └── trip.css            ← Trip detail page styles
├── js/
│   └── main.js             ← Scroll animations + newsletter
├── trips/
│   ├── k2k.html            ← Kashmir → Kanyakumari
│   ├── spiti.html          ← Mumbai → Spiti Valley
│   ├── nepal.html          ← Nepal Off-Road (BUTR)
│   └── puri.html           ← Mumbai → Puri → Mumbai
└── photos/                 ← Drop your photos here (per trip)
    ├── k2k/
    ├── spiti/
    ├── nepal/
    └── puri/
```

---

## ✨ Features Built

### Homepage (`index.html`)
- ✅ Hero with hand-drawn Himalayan SVG + rotating travel stamp
- ✅ Stats bar (25K+ km, 4 journeys, 44 videos, Khardung La peak)
- ✅ **Interactive India Map** — hover any route in the legend to highlight it
- ✅ 4 journey cards (each links to its detail page)
- ✅ About section with magazine drop-cap
- ✅ Working newsletter signup (saves to localStorage)
- ✅ Sticky nav with scroll-shrink
- ✅ Mobile responsive

### Trip Detail Pages (4 of them)
Each trip page includes:
- ✅ Trip hero with custom scenic SVG illustration
- ✅ Rotating stamp showing trip stat (km / altitude / etc)
- ✅ Stats row (km, days, episodes)
- ✅ Downloads bar (YouTube · PDF · XLSX · Map)
- ✅ **Day-by-day timeline** with vertical line, stamped circle dots
- ✅ **Fuel map table** with every fill-up and total cost
- ✅ **Embedded YouTube playlist** (real videos from your channel)
- ✅ Photo gallery layout (currently placeholders — drop in photos)
- ✅ Newsletter signup
- ✅ Related trips at bottom

---

## 🚀 Deploy in 5 Minutes (GitHub Pages — FREE)

1. Create a new GitHub repo: `thelegendrajveer.com`
2. Upload all files from this folder
3. Go to: Settings → Pages
4. Source: `main` branch, `/root` folder
5. Custom domain: `thelegendrajveer.com`
6. Update your DNS provider:
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add CNAME pointing to `<your-username>.github.io`
7. Enforce HTTPS in the GitHub Pages settings

Done. Site is live.

---

## 🖼️ Adding Real Photos

Replace the placeholder SVG gallery items with your photos:

1. Drop photos into `/photos/k2k/`, `/photos/spiti/`, etc.
2. Open the trip HTML file (`trips/k2k.html`)
3. Search for `gallery-item` — each is currently an `<svg>` placeholder
4. Replace with `<img src="../photos/k2k/photo-01.jpg" alt="...">`

Or open `build_trips.py`, add a `photos: [...]` array per trip, regenerate.

---

## ✉️ Newsletter — Going Live

Currently the newsletter form **stores emails in browser localStorage** (demo only). For production:

**Option 1 — Mailchimp/ConvertKit/Brevo:**
- Get an embed code from your provider
- Replace the `<form class="newsletter-form">` in each HTML file

**Option 2 — Formspree (easiest):**
1. Sign up at formspree.io
2. Get your form endpoint (e.g., `https://formspree.io/f/xyzabc`)
3. In each HTML, replace `<form class="newsletter-form">` with:
   ```html
   <form class="newsletter-form" action="https://formspree.io/f/xyzabc" method="POST">
   ```

---

## 📊 Updating Trip Data

All trip content is data-driven in `build_trips.py`. Edit the `TRIPS` dictionary:
- Timeline (day-by-day)
- Fuel stops
- Stats
- Stamps

Then run:
```bash
python3 build_trips.py
```

The 4 trip HTML files regenerate from the data.

---

## 🎨 Design System

| Token | Value | Use |
|-------|-------|-----|
| `--rust` | #A6452B | Primary accent (sunset rust) |
| `--ochre` | #C68B1F | Secondary accent (turmeric) |
| `--ink` | #1A1A1A | Body text |
| `--bg-base` | #F5F0E6 | Page background (parchment) |

**Fonts:** Fraunces (display serif, italic accents) · Inter Tight (sans body) · JetBrains Mono (metadata)

---

## 📺 YouTube Playlists Embedded

| Trip | Playlist | Videos |
|------|----------|--------|
| K2K Adventure | [Watch ↗](https://www.youtube.com/playlist?list=PLEqvpqwlrSHKWjIGfCJ8vvlnuL25x-ibe) | 7 |
| Mumbai → Spiti | [Watch ↗](https://www.youtube.com/playlist?list=PLEqvpqwlrSHJEOXsE9fGu5uHcuXgFolAs) | 17 |
| Nepal (BUTR) | [Watch ↗](https://www.youtube.com/playlist?list=PLEqvpqwlrSHJg_RlaUN8y2LOR4F2ydjih) | 15 |
| Mumbai → Puri | [Watch ↗](https://www.youtube.com/playlist?list=PLEqvpqwlrSHI_uNHnR1mnG-lFIpLmK6Gc) | 5 |

---

**Built with care for thelegendrajveer.com · 2025**
