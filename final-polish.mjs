import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const logo='https://www.agingsafelybaths.com/wp-content/uploads/2026/03/Aging-Safely-Baths-Logo-320.png';
const header=`<header class="home-global-header global-header"><div class="masthead"><a href="/" class="site-logo"><img src="${logo}" width="300" height="188" alt="Aging Safely Baths"></a><div class="header-actions"><span>Speak with a shower specialist</span><a href="tel:18887792284">1-888-779-2284</a></div><button class="menu-toggle" aria-expanded="false" aria-controls="primaryNav">Menu</button></div><nav id="primaryNav" aria-label="Primary"><a href="/walk-in-showers-for-seniors.html">Senior Showers</a><a href="/ada-compliant-showers.html">ADA Planning</a><a href="/barrier-free-showers.html">Barrier-Free</a><a href="/tub-to-shower-conversions-for-seniors.html">Conversions</a><a href="/affordable-walk-in-showers-for-seniors.html">Costs</a><a href="/blog/">Blog</a><a class="nav-cta" href="/#quote">Free Quote</a></nav></header>`;

function ensureAssets(html){
  if(!html.includes('/assets/polish.css')) html=html.replace('</head>','<link rel="stylesheet" href="/assets/polish.css">\n</head>');
  if(!html.includes('/assets/site.js')) html=html.replace('</body>','<script src="/assets/site.js" defer></script>\n</body>');
  return html;
}

let home=fs.readFileSync(path.join(root,'index.html'),'utf8');
home=home.replace(/<header class="site-header" id="home">[\s\S]*?<\/header>\s*<!--[\s\S]*?Mobile Nav Drawer[\s\S]*?<div class="mobile-nav"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,header);
home=home.replace(/<nav class="enhanced-site-nav"[\s\S]*?<\/nav>(?=<div class="trust-bar")/,'');
home=home.replace(/<nav class="enhanced-site-nav"[\s\S]*?<\/nav>/g,'');
home=ensureAssets(home);
fs.writeFileSync(path.join(root,'index.html'),home);

for(const name of ['choosing-a-roll-in-shower-for-elderly.html','ada-roll-in-showers-and-fall-prevention.html','low-threshold-showers-vs-standard-tubs.html']){
  const file=path.join(root,name);
  let html=fs.readFileSync(file,'utf8');
  html=html.replace(/<header class="site-header"[\s\S]*?<\/header>/,header);
  html=html.replace(/<nav class="enhanced-site-nav"[\s\S]*?<\/nav>/g,'');
  html=ensureAssets(html);
  fs.writeFileSync(file,html);
}

console.log('Standardized homepage and legacy article navigation; removed duplicate menus.');
