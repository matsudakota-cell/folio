/* ============================================================
   PROJECT DATA
   ============================================================ */
const PROJECTS = [
  {
    id: 'agl-business-portal',
    title: 'AGL Business Portal',
    subtitle: 'UX Research & Design',
    company: 'AGL Energy',
    year: '2021',
    behance: 'https://www.behance.net/gallery/114298127/AGL-Business-Portal-UX-Research-Design',
    tools: ['Figma'],
    tags: ['B2B', 'Dashboard', 'Energy', 'Portal', 'Billing'],
    description: 'End-to-end UX research and design for AGL\'s B2B business customer portal. The project focused on billing, dashboard, and energy management functionality for commercial customers — from SME to enterprise — giving them clear visibility over their energy usage and accounts.',
    images: [
      'images/agl-business-portal/01.jpg',
      'images/agl-business-portal/02.png',
      'images/agl-business-portal/03.jpg',
      'images/agl-business-portal/04.jpg',
      'images/agl-business-portal/05.jpg',
      'images/agl-business-portal/06.jpg',
      'images/agl-business-portal/07.jpg',
      'images/agl-business-portal/08.jpg',
      'images/agl-business-portal/09.jpg',
      'images/agl-business-portal/10.jpg',
      'images/agl-business-portal/11.jpg',
      'images/agl-business-portal/12.jpg',
    ]
  },
  {
    id: 'agl-solar',
    title: 'Solar Energy Usage Monitoring',
    subtitle: 'UX / Native App',
    company: 'AGL Energy',
    year: '2020',
    behance: 'https://www.behance.net/gallery/90085389/AGL-Energy-Solar-Energy-Usage-Monitoring-UX',
    tools: ['Adobe Illustrator', 'Sketch', 'Axure', 'InVision'],
    tags: ['Solar', 'Data Visualisation', 'Native App', 'Responsive', 'Energy'],
    description: 'AGL launched revamped iOS and Android apps but the web experience still needed updating. The new native app also omitted solar feed-in viewing — a highly requested feature. This project redesigned the solar usage experience within My Account and the native app, giving customers clear insight into their solar generation and energy trading.',
    images: [
      'images/agl-solar/01.jpg',
      'images/agl-solar/02.jpg',
      'images/agl-solar/03.jpg',
      'images/agl-solar/04.jpg',
      'images/agl-solar/05.jpg',
      'images/agl-solar/06.jpg',
      'images/agl-solar/07.jpg',
      'images/agl-solar/08.jpg',
      'images/agl-solar/09.jpg',
      'images/agl-solar/10.jpg',
      'images/agl-solar/11.jpg',
    ]
  },
  {
    id: 'agl-peak-energy',
    title: 'Peak Energy Rewards',
    subtitle: 'Product Design',
    company: 'AGL Energy',
    year: '2019',
    behance: 'https://www.behance.net/gallery/79878165/AGL-Peak-Energy-Rewards-Demand-Response-Program',
    tools: ['Sketch', 'Usertesting.com', 'UsabilityHub'],
    tags: ['Demand Response', 'Dashboard', 'Rewards', 'Monitoring', 'Energy'],
    description: 'AGL, partnering with the Australian government, worked to tweak customer behaviour to reduce energy usage during peak summer days — easing load on the power grid and reducing blackout risk. This project designed the monitoring dashboards and reward mechanics to incentivise reduced consumption, making it meaningful and rewarding for everyday Australians.',
    images: [
      'images/agl-peak-energy/01.jpg',
      'images/agl-peak-energy/02.jpg',
      'images/agl-peak-energy/03.jpg',
      'images/agl-peak-energy/04.jpg',
      'images/agl-peak-energy/05.jpg',
      'images/agl-peak-energy/06.jpg',
      'images/agl-peak-energy/07.jpg',
      'images/agl-peak-energy/08.jpg',
    ]
  },
  {
    id: 'agl-voice',
    title: 'Voice Assistant',
    subtitle: 'Voice UI / VUI',
    company: 'AGL Energy',
    year: '2018',
    behance: 'https://www.behance.net/gallery/72553967/AGL-Voice-Assistant-Amazon-Alexa-Google-Assistant',
    tools: ['Dialogflow', 'Microsoft Visual Studio', 'Sketch'],
    tags: ['VUI', 'Voice Design', 'Alexa', 'Google Assistant', 'Conversational UI'],
    description: 'AGL is one of Australia\'s leading energy companies. This initiative established brand presence in households through voice technology — moving beyond traditional billing communications into conversational utility management via Amazon Alexa and Google Assistant. One of the first utility voice products launched in Australia.',
    images: [
      'images/agl-voice/01.jpg',
      'images/agl-voice/02.jpg',
      'images/agl-voice/03.jpg',
      'images/agl-voice/04.jpg',
      'images/agl-voice/05.jpg',
      'images/agl-voice/06.jpg',
      'images/agl-voice/07.jpg',
    ]
  },
  {
    id: 'xero-design-sprint',
    title: 'Uplifting Role Data Quality',
    subtitle: 'Design Sprint',
    company: 'Xero',
    year: '2023',
    behance: 'https://www.behance.net/gallery/168612637/Xero-Uplifting-Role-data-quality-Design-Sprint',
    tools: ['Figma', 'Miro', 'Google Slides'],
    tags: ['Design Sprint', 'Data Quality', 'Personalisation', 'Fintech', 'Research'],
    description: 'A focused design sprint to improve the quality and completeness of role data in Xero\'s Small Business Profile. Better role data enables more personalised experiences and sharper customer insight at scale — a strategic initiative that required balancing data acquisition with user trust and transparency.',
    images: [
      'images/xero-design-sprint/01.jpg',
      'images/xero-design-sprint/02.jpg',
      'images/xero-design-sprint/03.jpg',
      'images/xero-design-sprint/04.jpg',
      'images/xero-design-sprint/05.jpg',
      'images/xero-design-sprint/06.jpg',
      'images/xero-design-sprint/07.jpg',
      'images/xero-design-sprint/08.jpg',
      'images/xero-design-sprint/09.jpg',
      'images/xero-design-sprint/10.jpg',
      'images/xero-design-sprint/11.jpg',
    ]
  },
  {
    id: 'honda',
    title: 'Honda Australia Website',
    subtitle: 'Web Redesign',
    company: 'Leo Burnett / Honda',
    year: '2014',
    behance: 'https://www.behance.net/gallery/22255995/Honda-Australia-Website-Re-Design',
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Automotive', 'Web Redesign', 'UX', 'Adaptive', 'Responsive'],
    description: 'Standardised, re-architected and redesigned Honda Australia\'s website as they migrated to the new Adobe platform. The process involved wireframing and UX designs that created a clear user journey. The overall approach maintained an adaptive environment — research showed mobile users on-the-go have meaningfully different goals to home desktop users.',
    images: [
      'images/honda/01.png',
      'images/honda/02.png',
      'images/honda/03.png',
      'images/honda/04.png',
      'images/honda/05.png',
      'images/honda/06.png',
      'images/honda/07.png',
      'images/honda/08.png',
      'images/honda/09.png',
      'images/honda/10.png',
      'images/honda/11.png',
      'images/honda/12.png',
      'images/honda/13.png',
      'images/honda/14.png',
    ]
  },
  {
    id: 'carsales-payment-gateway',
    title: 'One Membership — Payment Gateway',
    subtitle: 'UX / Payment Flow',
    company: 'carsales.com.au',
    year: '2018',
    behance: 'https://www.behance.net/gallery/67594139/One-Membership-Carsales-Payment-Gateway-UX-Design',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Sketch', 'Axure'],
    tags: ['Payment', 'Fintech', 'Escrow', 'Private Sales', 'Classifieds'],
    description: 'Carsales launched a platform for customers to securely make payments when buying and selling cars privately online. Starting as a pilot, the project evolved into a comprehensive reassessment of the entire payment workflow — ensuring a cohesive, trustworthy experience for what is often a person\'s second-largest financial transaction.',
    images: [
      'images/carsales-payment-gateway/01.jpg',
      'images/carsales-payment-gateway/02.jpg',
      'images/carsales-payment-gateway/03.jpg',
      'images/carsales-payment-gateway/04.jpg',
      'images/carsales-payment-gateway/05.jpg',
      'images/carsales-payment-gateway/06.jpg',
      'images/carsales-payment-gateway/07.jpg',
      'images/carsales-payment-gateway/08.jpg',
      'images/carsales-payment-gateway/09.jpg',
      'images/carsales-payment-gateway/10.jpg',
      'images/carsales-payment-gateway/11.jpg',
      'images/carsales-payment-gateway/12.jpg',
      'images/carsales-payment-gateway/13.jpg',
    ]
  },
  {
    id: 'carsales-manage-ads',
    title: 'One Membership — Manage Ads',
    subtitle: 'UX Overhaul',
    company: 'carsales.com.au',
    year: '2017',
    behance: 'https://www.behance.net/gallery/58022077/One-Membership-Manage-Ads-UX-Design-overhaul',
    tools: ['Sketch', 'Axure', 'UserTesting.com', 'InVision'],
    tags: ['Membership', 'Dashboard', 'Automotive', 'Classifieds', 'Research'],
    description: 'The Carsales membership area was in desperate need of an overhaul. The team tackled it incrementally, prioritising the most-used feature — ad management. This strategic approach served dual purposes: identifying active sellers and enabling more targeted, relevant messaging to the right customers at the right time.',
    images: [
      'images/carsales-manage-ads/01.jpg',
      'images/carsales-manage-ads/02.jpg',
      'images/carsales-manage-ads/03.jpg',
      'images/carsales-manage-ads/04.jpg',
      'images/carsales-manage-ads/05.jpg',
      'images/carsales-manage-ads/06.jpg',
      'images/carsales-manage-ads/07.jpg',
      'images/carsales-manage-ads/08.jpg',
      'images/carsales-manage-ads/09.jpg',
      'images/carsales-manage-ads/10.jpg',
      'images/carsales-manage-ads/11.jpg',
      'images/carsales-manage-ads/12.jpg',
      'images/carsales-manage-ads/13.jpg',
      'images/carsales-manage-ads/14.jpg',
      'images/carsales-manage-ads/15.jpg',
    ]
  },
  {
    id: 'redbook',
    title: 'Mechanic Inspection Application',
    subtitle: 'Mobile App / UX',
    company: 'RedBook',
    year: '2017',
    behance: 'https://www.behance.net/gallery/57596069/RedBook-Mechanic-Inspection-Application',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Sketch', 'Axure', 'InVision'],
    tags: ['iPad', 'Automotive', 'Inspection', 'Pre-purchase', 'Mobile App'],
    description: 'Car buyers want to inspect before purchase — often their second-largest financial commitment. An iPad Mini application was designed to streamline the mechanic inspection process, saving time and money while providing transparency for both the customer and the wider business. The app digitised a traditionally paper-based workflow.',
    images: [
      'images/redbook/01.jpg',
      'images/redbook/02.jpg',
      'images/redbook/03.jpg',
      'images/redbook/04.jpg',
      'images/redbook/05.png',
      'images/redbook/06.jpg',
      'images/redbook/07.jpg',
      'images/redbook/08.jpg',
    ]
  },
  {
    id: 'great-barrier-reef',
    title: 'Website Concept',
    subtitle: 'Pro Bono / Website Concept',
    company: 'Great Barrier Reef Foundation',
    year: '2017',
    behance: 'https://www.behance.net/gallery/54167209/Great-Barrier-Reef-Foundation-Website-Concept',
    tools: ['Adobe Photoshop'],
    tags: ['Pro Bono', 'Charity', 'Website Concept', 'Conservation', 'Branding'],
    description: 'GBRF underwent a significant rebrand in mid-2015. This concept reimagined the website around their new logo — which featured interchangeable icons representing the many lifeforms of the reef. The main challenge was simplifying a complicated site architecture while retaining all existing content, and creating UI that floated seamlessly over immersive imagery. Also featured a customisable donation mechanic.',
    images: [
      'images/great-barrier-reef/01.jpg',
    ]
  },
  {
    id: 'after5',
    title: 'After5 — Creative Partner Platform',
    subtitle: 'Concept / Product',
    company: 'Personal Project',
    year: '2018',
    behance: 'https://www.behance.net/gallery/67593101/After5-Parter-with-creative-folks-Concept',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Sketch'],
    tags: ['Side Project', 'Startup Concept', 'Collaboration', 'Networking', 'Creatives'],
    description: 'Born from frustration — "We could have been rich if only we worked on that million dollar idea we had." Three agency professionals built a concept platform to help creative practitioners collaborate on side projects without fear of failure. An inclusive community for action-oriented doers who want to turn great ideas into reality.',
    images: [
      'images/after5/01.jpg',
      'images/after5/02.jpg',
      'images/after5/03.jpg',
      'images/after5/04.jpg',
      'images/after5/05.jpg',
      'images/after5/06.jpg',
      'images/after5/07.jpg',
      'images/after5/08.jpg',
      'images/after5/09.jpg',
      'images/after5/10.jpg',
    ]
  },
];

/* ============================================================
   LIGHTBOX STATE
   ============================================================ */
let currentProjectIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

/* ============================================================
   BUILD LIGHTBOX HTML
   ============================================================ */
function buildLightbox() {
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.id = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Project details');
  lb.setAttribute('hidden', '');

  lb.innerHTML = `
    <div class="lb__backdrop"></div>
    <div class="lb__shell">
      <button class="lb__close" aria-label="Close project">&times;</button>
      <button class="lb__nav lb__nav--prev" aria-label="Previous project">&#8592;</button>
      <button class="lb__nav lb__nav--next" aria-label="Next project">&#8594;</button>

      <div class="lb__inner">
        <aside class="lb__info">
          <p class="lb__company"></p>
          <h2 class="lb__title"></h2>
          <p class="lb__subtitle"></p>
          <p class="lb__desc"></p>
          <div class="lb__meta">
            <div class="lb__meta-row">
              <span class="lb__meta-label">Year</span>
              <span class="lb__meta-year"></span>
            </div>
            <div class="lb__meta-row">
              <span class="lb__meta-label">Tools</span>
              <span class="lb__meta-tools"></span>
            </div>
          </div>
          <div class="lb__tags"></div>
          <a class="lb__behance" target="_blank" rel="noopener">View on Behance ↗</a>
        </aside>

        <div class="lb__gallery">
          <div class="lb__images"></div>
          <div class="lb__counter"></div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(lb);

  // Events
  lb.querySelector('.lb__backdrop').addEventListener('click', closeLightbox);
  lb.querySelector('.lb__close').addEventListener('click', closeLightbox);
  lb.querySelector('.lb__nav--prev').addEventListener('click', () => navigateProject(-1));
  lb.querySelector('.lb__nav--next').addEventListener('click', () => navigateProject(1));

  // Touch swipe on gallery
  const gallery = lb.querySelector('.lb__gallery');
  gallery.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  gallery.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
    if (Math.abs(dx) > 50 && dy < 80) {
      navigateProject(dx < 0 ? 1 : -1);
    }
  }, { passive: true });

  return lb;
}

/* ============================================================
   OPEN / CLOSE
   ============================================================ */
function openLightbox(projectId) {
  const idx = PROJECTS.findIndex(p => p.id === projectId);
  if (idx === -1) return;
  currentProjectIndex = idx;
  renderProject(idx);

  const lb = document.getElementById('lightbox');
  lb.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  lb.querySelector('.lb__close').focus();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.setAttribute('hidden', '');
  document.body.style.overflow = '';
  // Return focus to the card that opened it
  const activeCard = document.querySelector(`.project-card[data-project="${PROJECTS[currentProjectIndex].id}"]`);
  if (activeCard) activeCard.focus();
}

function navigateProject(dir) {
  currentProjectIndex = (currentProjectIndex + dir + PROJECTS.length) % PROJECTS.length;
  renderProject(currentProjectIndex);
}

/* ============================================================
   RENDER PROJECT INTO LIGHTBOX
   ============================================================ */
function renderProject(idx) {
  const p = PROJECTS[idx];
  const lb = document.getElementById('lightbox');

  lb.querySelector('.lb__company').textContent = p.company;
  lb.querySelector('.lb__title').textContent = p.title;
  lb.querySelector('.lb__subtitle').textContent = p.subtitle;
  lb.querySelector('.lb__desc').textContent = p.description;
  lb.querySelector('.lb__meta-year').textContent = p.year;
  lb.querySelector('.lb__meta-tools').textContent = p.tools.join(', ');
  lb.querySelector('.lb__behance').href = p.behance;

  // Tags
  const tagsEl = lb.querySelector('.lb__tags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="lb__tag">${t}</span>`).join('');

  // Images
  const imagesEl = lb.querySelector('.lb__images');
  imagesEl.innerHTML = p.images.map((src, i) => `
    <div class="lb__img-wrap">
      <img src="${src}" alt="${p.title} — image ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" />
    </div>
  `).join('');

  // Counter
  lb.querySelector('.lb__counter').textContent = `${idx + 1} / ${PROJECTS.length}`;

  // Scroll gallery back to top
  lb.querySelector('.lb__gallery').scrollTop = 0;

  // Update prev/next visibility
  lb.querySelector('.lb__nav--prev').style.opacity = PROJECTS.length > 1 ? '1' : '0';
  lb.querySelector('.lb__nav--next').style.opacity = PROJECTS.length > 1 ? '1' : '0';
}

/* ============================================================
   KEYBOARD NAVIGATION
   ============================================================ */
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb || lb.hasAttribute('hidden')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navigateProject(1);
  if (e.key === 'ArrowLeft') navigateProject(-1);
});

/* ============================================================
   INIT — wire up project cards
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildLightbox();

  document.querySelectorAll('.project-card').forEach(card => {
    const projectId = card.dataset.project;
    if (!projectId) return;

    // Make card open lightbox instead of navigating to Behance
    card.addEventListener('click', e => {
      e.preventDefault();
      openLightbox(projectId);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(projectId);
      }
    });
  });
});
