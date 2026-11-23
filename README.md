# ShowersForElderly.com

Production-ready static site for GitHub Pages.

## Added commercial pages

- Walk-in showers for seniors
- ADA compliant shower planning
- Barrier-free showers
- Tub-to-shower conversions for seniors
- Affordable walk-in showers for seniors

## Added guide pages

- Shower benches for elderly adults
- Rolling shower chairs
- Bathroom safety checklist for older adults
- Caregiver-assisted shower planning
- Grab-bar placement for senior showers
- Portable showers for elderly adults
- Shower entry and splash control

The `/blog/` gateway links all seven guides. Every main page uses the same responsive navigation, including a direct Blog link. Blog articles include a topic-specific animated planning sequence and respect reduced-motion preferences.

The homepage includes 21 linked Showers4Less product examples. Product specifications, configurations, freight terms, prices, and availability must be confirmed on each live seller page before ordering.

Product media is isolated in fixed-height, clipped frames so tall catalog images cannot overlap card titles or descriptions.

All lead forms post directly to the Eye To Ad Lead Net server (clients.eyetoad.com) through assets/quote.js, with a hidden honeypot, a 3 second minimum time check, one retry, and success shown only when the server answers ok. lead-send.js is the safety-net router.

`sitemap.xml`, `sitemap.html`, `robots.txt`, `llms.txt`, canonical metadata, JSON-LD, and the supplied Google Search Console verification token are included.
