import './styles.css';
import logo10 from '../assts/Group 10.png';
import logo12 from '../assts/Group 12.png';
import logo13 from '../assts/Group 13.png';
import logo15 from '../assts/Group 15.png';
import logo17 from '../assts/Group 17.png';
import logo18 from '../assts/Group 18.png';
import logo19 from '../assts/Group 19.png';
import heroImage from './assets/rehletna-hero.png';

const logoThemes=[
  {id:'beige-gold',name:'Beige Gold',file:'Group 10.png',logo:logo10,accent:'#C8A96B',hover:'#B79555',soft:'#C8A96B26'},
  {id:'orange',name:'Rehletna Orange',file:'Group 12.png',logo:logo12,accent:'#FC6C30',hover:'#E85A20',soft:'#FC6C3026'},
  {id:'forest',name:'Forest Green',file:'Group 13.png',logo:logo13,accent:'#4A5A40',hover:'#384630',soft:'#4A5A4026'},
  {id:'coral',name:'Rehletna Coral',file:'Group 15.png',logo:logo15,accent:'#FF6B57',hover:'#E95745',soft:'#FF6B5726'},
  {id:'golden',name:'Golden Yellow',file:'Group 17.png',logo:logo17,accent:'#C89B3C',hover:'#AD8229',soft:'#C89B3C26'},
  {id:'warm-gradient',name:'Warm Gradient',file:'Group 18.png',logo:logo18,accent:'#D99A48',hover:'#C17E32',soft:'#D99A4826',gradient:'linear-gradient(135deg, #C89B3C, #FF6B57)'},
  {id:'soft-coral',name:'Soft Coral',file:'Group 19.png',logo:logo19,accent:'#FF6F5E',hover:'#E85B4B',soft:'#FF6F5E26'}
];
const defaultLogo=logo12;
const photos={
  hero:heroImage,
  cairo:'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80',
  istanbul:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80',
  maldives:'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80',
  coast:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
  hotel:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
  resort:'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80',
  cityhotel:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80',
  pool:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80',
  culture:'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80',
  market:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80',
  beach:'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80',
  palms:'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80',
  marina:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80'
};

const destinations=[['Cairo, Egypt','cairo'],['Istanbul, Türkiye','istanbul'],['Antalya, Türkiye','maldives']];
const hotels=[['Istanbul Suite Hotel','Istanbul, Türkiye','$134.10','hotel'],['Grand Golden Sands','Antalya, Türkiye','$189.50','resort'],['Cairo Nile Palace','Cairo, Egypt','$210.00','cityhotel'],['Pyramids Vista Resort','Cairo, Egypt','$156.00','pool']];
const trips=[['City & Culture','Dive into local heritage, markets, museums, and vibrant neighborhoods.','culture'],['Luxury Getaways','Premium journeys with 5-star hotels, private tours, and VIP comfort.','market'],['Beach Escapes','Relax on soft-sand coastlines with handpicked seaside stays.','beach']];
const tours=[['Azure Bay','4.92','$189.99','palms'],['Palm Horizon','4.88','$134.10','maldives'],['Sunset Marina','4.9','$110.75','marina']];

function icon(name){const icons={pin:'<path d="M12 21s7-5.3 7-12A7 7 0 1 0 5 9c0 6.7 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',arrow:'<path d="m9 18 6-6-6-6"/>',star:'<path d="m12 2 3 6 6.5 1-4.7 4.6 1.1 6.4-5.9-3.1L6.1 20l1.1-6.4L2.5 9 9 8Z"/>',palette:'<path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h4a5 5 0 0 0 5-5c0-2.8-4-5-9-5Z"/><circle cx="7.5" cy="10" r="1"/><circle cx="9" cy="6.5" r="1"/><circle cx="14" cy="6.5" r="1"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>'};return `<svg aria-hidden="true" viewBox="0 0 24 24">${icons[name]}</svg>`}
function logo(className='logo'){return `<img class="${className} js-brand-logo" src="${defaultLogo}" alt="Rehletna" />`}
function heading(kicker,title,controls=true){return `<div class="section-head"><div><span>${kicker}</span><h2>${title}</h2></div>${controls?`<div class="arrows"><button aria-label="Previous">‹</button><button aria-label="Next">›</button></div>`:''}</div>`}
function destCard([name,key]){return `<article class="destination-card card"><img src="${photos[key]}" alt="${name}" loading="lazy"><div><h3>${name}</h3><button aria-label="Explore ${name}">${icon('arrow')}</button></div></article>`}
function hotelCard([name,place,price,key]){return `<article class="hotel-card card"><div class="image"><img src="${photos[key]}" alt="${name}" loading="lazy"><span>Featured</span></div><div class="card-body"><div class="rating">★ 4.9</div><h3>${name}</h3><p>${icon('pin')}${place}</p><div class="price"><strong>${price}</strong><span>/ night</span></div></div></article>`}
function packageCard(title,img,price='$2,500'){return `<article class="package-card card"><img src="${img}" alt="${title}" loading="lazy"><div class="shade"></div><div class="package-copy"><span class="pill">4 days</span><h3>${title}</h3><p>${icon('pin')} Istanbul, Türkiye</p><div><small>from</small><strong>${price}</strong></div></div></article>`}
function tourCard([name,rating,price,key]){return `<article class="tour-card card"><img src="${photos[key]}" alt="${name}" loading="lazy"><div class="tour-content"><div class="tour-title"><h3>${name}</h3><span>★ ${rating}</span></div><p>Tour package 5 days 4 nights for couples and family vacation plans.</p><div class="tour-footer"><div><small>From</small><strong>${price}</strong></div><button class="btn btn-small">Book now</button></div></div></article>`}

document.querySelector('#app').innerHTML=`
<header class="site-header"><div class="container nav-wrap">${logo()}<nav aria-label="Main navigation"><a href="#destinations">Tours</a><a href="#destinations">Destinations</a><a href="#packages">Deals</a><a href="#trips">Blog</a><a href="#footer">Contact</a></nav><div class="nav-actions"><a class="language" href="#">العربية</a><button class="theme-toggle icon-btn" aria-label="Switch to dark mode" title="Switch color mode"><span>☾</span></button><button class="icon-btn" aria-label="Account">${icon('user')}</button><button class="icon-btn search-action" aria-label="Search">${icon('search')}</button><button class="menu-btn" aria-label="Open menu" aria-expanded="false">${icon('menu')}</button></div></div><div class="mobile-menu"><a href="#destinations">Tours</a><a href="#destinations">Destinations</a><a href="#packages">Deals</a><a href="#trips">Blog</a><a href="#footer">Contact</a></div></header>
<main>
  <section class="hero"><img src="${photos.hero}" alt="A tropical coast at sunset"><div class="hero-overlay"></div><div class="hero-content container"><span class="eyebrow">YOUR JOURNEY STARTS HERE</span><h1>Discover. Explore. <em>Go!</em></h1><p>Explore stunning destinations around the world.</p><div class="hero-actions"><a class="btn" href="#destinations">Explore tours</a><a class="btn btn-ghost" href="#trips">Plan your trip</a></div></div>
  <form class="search-box container"><label><span>Where to?</span><div>${icon('search')}<input type="text" placeholder="Search for places" aria-label="Search destination"></div></label><label><span>Check in</span><div>${icon('calendar')}<input type="date" aria-label="Check in"></div></label><label><span>Check out</span><div>${icon('calendar')}<input type="date" aria-label="Check out"></div></label><button class="btn" type="submit">${icon('search')} Search</button></form></section>
  <div class="container tabs" role="tablist"><button class="active">Most popular</button><button>Family</button><button>Honeymoon</button><button>Adventure</button><button>Budget</button></div>
  <section id="destinations" class="section container">${heading('Explore the world','Featured destinations')}<div class="destination-grid">${destinations.map(destCard).join('')}</div></section>
  <section id="packages" class="section container">${heading('Curated for you','Suggested packages')}<div class="package-grid">${packageCard('4-day Istanbul tour',photos.coast,'$2,500')}${packageCard('Maldives island escape',photos.maldives,'$1,890')}</div></section>
  <section class="section container">${heading('Handpicked stays','Featured hotels')}<div class="hotel-grid">${hotels.map(hotelCard).join('')}</div></section>
  <section id="trips" class="section container">${heading('Curated for you','Book your next trip')}<div class="trip-grid">${trips.map(([n,d,k])=>`<article class="trip-card card"><img src="${photos[k]}" alt="${n}" loading="lazy"><div class="card-body"><h3>${n}</h3><p>${d}</p><a href="#">Explore <span>→</span></a></div></article>`).join('')}</div></section>
  <section class="section popular container">${heading('Explore locations','Popular tours')}<div class="tour-grid">${tours.map(tourCard).join('')}</div></section>
  <section class="newsletter"><div class="container"><div><span class="eyebrow">TRAVEL INSPIRATION</span><h2>Ready for your next story?</h2><p>Get destination ideas and handpicked offers in your inbox.</p></div><form><input type="email" placeholder="Your email address" aria-label="Email address"><button class="btn">Get inspired</button></form></div></section>
</main>
<footer id="footer"><div class="container footer-grid"><div>${logo('footer-logo')}<p>Discover destinations, explore curated tour packages, and plan your next journey with confidence.</p></div><div><h3>Explore</h3><a href="#destinations">Destinations</a><a href="#destinations">Tours</a><a href="#packages">Deals</a><a href="#trips">Travel journal</a></div><div><h3>Contact</h3><p>Ready to plan your next trip?</p><a href="mailto:hello@rehletna.com">hello@rehletna.com</a></div><div><h3>Follow the journey</h3><div class="socials"><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Pinterest">p</a></div></div></div><div class="container copyright">© 2026 Rehletna. All rights reserved.</div></footer>
<button class="lab-toggle" aria-expanded="false">${icon('palette')} <span>Logo Lab</span></button><aside class="logo-lab" aria-hidden="true"><div class="lab-head"><div><small>DEVELOPER UTILITY</small><h2>Logo + Theme Lab</h2></div><button class="lab-close" aria-label="Close Logo Lab">${icon('close')}</button></div><section><label>Current theme</label><div class="logo-preview transparent">${logo('lab-logo')}</div><div class="current-theme"><i></i><div><strong></strong><span></span></div></div></section><section><label>Project themes</label><div class="logo-options"></div></section><section><label for="logo-upload">Upload custom logo</label><input id="logo-upload" type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml"><div class="custom-accent"><label for="custom-accent">Custom accent color</label><input id="custom-accent" type="color" value="#FC6C30"></div></section><section><div class="range-label"><label for="logo-size">Logo width</label><output>150px</output></div><input id="logo-size" type="range" min="80" max="250" value="150"></section><section><label>Preview background</label><div class="segmented"><button data-bg="transparent" class="active">Transparent</button><button data-bg="dark">Dark</button><button data-bg="light">Light</button></div></section><button class="reset-logo">Reset theme</button></aside><div class="lab-backdrop"></div>`;

let activeObjectUrl;
const setLogo=(src,persist=true)=>{document.querySelectorAll('.js-brand-logo').forEach(x=>x.src=src); if(persist&&!src.startsWith('blob:')) localStorage.setItem('rehletna-dev-logo',src)};
const setWidth=(width,persist=true)=>{document.documentElement.style.setProperty('--logo-width',`${width}px`);document.querySelector('#logo-size').value=width;document.querySelector('.range-label output').textContent=`${width}px`;if(persist)localStorage.setItem('rehletna-dev-logo-width',width)};
function applyBrandTheme(theme,persist=true){
  const root=document.documentElement;
  root.style.setProperty('--brand-accent',theme.accent);root.style.setProperty('--brand-accent-hover',theme.hover);root.style.setProperty('--brand-accent-soft',theme.soft);root.style.setProperty('--brand-accent-fill',theme.gradient||theme.accent);root.style.setProperty('--accent',theme.accent);
  setLogo(theme.logo,false);document.querySelector('.current-theme i').style.background=theme.gradient||theme.accent;document.querySelector('.current-theme strong').textContent=theme.name;document.querySelector('.current-theme span').textContent=theme.gradient?'#C89B3C → #FF6B57':theme.accent;
  document.querySelectorAll('[data-theme-id]').forEach(x=>x.classList.toggle('selected',x.dataset.themeId===theme.id));if(persist){localStorage.setItem('rehletna-dev-theme',theme.id);localStorage.removeItem('rehletna-dev-logo')}
}
document.querySelector('.logo-options').innerHTML=logoThemes.map((theme,i)=>`<button data-theme-id="${theme.id}"><img src="${theme.logo}" alt="${theme.name} logo"><strong>${theme.name}</strong><span><i style="background:${theme.gradient||theme.accent}"></i>${theme.gradient?'Gold → Coral':theme.accent}</span></button>`).join('');
const storedBrand=logoThemes.find(x=>x.id===localStorage.getItem('rehletna-dev-theme'))||logoThemes.find(x=>x.id==='orange');
applyBrandTheme(storedBrand,false);setWidth(localStorage.getItem('rehletna-dev-logo-width')||150,false);
document.querySelectorAll('[data-theme-id]').forEach(b=>b.addEventListener('click',()=>applyBrandTheme(logoThemes.find(x=>x.id===b.dataset.themeId))));
document.querySelector('#logo-size').addEventListener('input',e=>setWidth(e.target.value));
document.querySelector('#logo-upload').addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;if(activeObjectUrl)URL.revokeObjectURL(activeObjectUrl);activeObjectUrl=URL.createObjectURL(file);applyBrandTheme({id:'custom',name:'Custom Logo',logo:activeObjectUrl,accent:document.querySelector('#custom-accent').value,hover:document.querySelector('#custom-accent').value,soft:`${document.querySelector('#custom-accent').value}26`},false)});
document.querySelector('#custom-accent').addEventListener('input',e=>{if(!activeObjectUrl)return;applyBrandTheme({id:'custom',name:'Custom Logo',logo:activeObjectUrl,accent:e.target.value,hover:e.target.value,soft:`${e.target.value}26`},false)});
document.querySelectorAll('[data-bg]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-bg]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelector('.logo-preview').className=`logo-preview ${b.dataset.bg}`}));
document.querySelector('.reset-logo').addEventListener('click',()=>{localStorage.removeItem('rehletna-dev-logo');localStorage.removeItem('rehletna-dev-theme');localStorage.removeItem('rehletna-dev-logo-width');applyBrandTheme(logoThemes.find(x=>x.id==='orange'),false);setWidth(150,false);document.querySelector('#logo-upload').value='';document.querySelector('#custom-accent').value='#FC6C30'});
const lab=document.querySelector('.logo-lab'), toggle=document.querySelector('.lab-toggle'),backdrop=document.querySelector('.lab-backdrop');
function toggleLab(force){const open=force??!lab.classList.contains('open');lab.classList.toggle('open',open);backdrop.classList.toggle('open',open);toggle.setAttribute('aria-expanded',open);lab.setAttribute('aria-hidden',!open)}
toggle.addEventListener('click',()=>toggleLab());document.querySelector('.lab-close').addEventListener('click',()=>toggleLab(false));backdrop.addEventListener('click',()=>toggleLab(false));
document.querySelector('.menu-btn').addEventListener('click',e=>{const menu=document.querySelector('.mobile-menu');const open=menu.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
document.querySelector('.search-box').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#destinations').scrollIntoView({behavior:'smooth'})});
const themeButton=document.querySelector('.theme-toggle');
function applyTheme(theme){document.documentElement.dataset.theme=theme;localStorage.setItem('rehletna-theme',theme);const dark=theme==='dark';themeButton.setAttribute('aria-label',`Switch to ${dark?'light':'dark'} mode`);themeButton.querySelector('span').textContent=dark?'☀':'☾'}
applyTheme(localStorage.getItem('rehletna-theme')||'light');
themeButton.addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
