/* ============================================================
   PROJECT DATA
   ============================================================ */
const PROJECTS = [
  {
    id: 'electrify-now',
    alts: [
      "Electrify Now by AGL cover slide with a phone mockup of the product selection screen listing solar panels, home battery, induction cooktop and electric vehicle",
      "My process diagram: a double-diamond spanning Problem Discovery through Commercial Availability, with Solution Discovery, Concept Validation, Design & Development and Early Access Programme milestones",
      "My role and contribution slide: designing the authenticated experience, integrating a centralised data model, optimising for lead conversion, and continuous usability research",
      "My remit flow diagram mapping the journey from Electrification Hub through Electrify Now, Customer Profile, Savings Report and eNow Connect to referral partners and AGL experts",
      "Complications slide covering three challenges: one calculation engine across two platforms, designing around multiple design systems, and multiple reporting lines to manage",
      "Solution discovery slide showing research synthesis boards, a centralised home profile diagram unifying Electrify Now, Energy Insights and Energy Coach, and an example data capture model",
      "Concept validation slide with research team photos, participant interview transcripts and a user journey map annotated with findings",
      "Design & development slide showing the Electrify Now flow across mobile screens, from product selection through solar and battery estimates to speaking with an expert",
      "Results slide with visitor and conversion charts showing 66% success rate and 132% better lead conversion, plus press coverage of an award win and 140,000-customer milestone",
      "Full mobile flow of the final Electrify Now product, from landing page through product and vehicle selection, personalised savings estimates and installer quote request"
    ],
    title: 'Electrify Now',
    subtitle: 'Design / Research / Optimisation',
    company: 'AGL Energy',
    year: '2024 — 2025',
    behance: 'https://www.behance.net/kmatsuda',
    tools: ['Figma', 'FigJam'],
    tags: ['Electrification', 'Calculator', 'Web', 'Mobile', 'Energy'],
    description: 'AGL launched Electrify Now as a pilot in mid-2024, helping customers understand accurate bill savings from electrifying their home based on their real energy data. I led the design, research and CX strategy to take the pilot from MVP to a productionised tool — aligning it with a centralised home-profile data model shared across Electrify Now, Energy Insights and Energy Coach, and continuously optimising the experience through usability testing. The digital channel now converts 132% better than other channels, with over 140,000 customers using the tool and an Australian Financial Review Customer Champions award in 2024.',
    images: [
      'images/electrify-now/01.jpg',
      'images/electrify-now/02.jpg',
      'images/electrify-now/03.jpg',
      'images/electrify-now/04.jpg',
      'images/electrify-now/05.jpg',
      'images/electrify-now/06.jpg',
      'images/electrify-now/07.jpg',
      'images/electrify-now/08.jpg',
      'images/electrify-now/09.jpg',
      'images/electrify-now/10.jpg',
    ]
  },
  {
    id: 'agl-business-portal',
    videos: [
      { after: 7, id: 'aOxVQ08zkYA', title: 'AGL for Business portal prototype walkthrough' },
      { after: 11, id: 'X-yXN1NJaYg', title: 'AGL for Business final UI demo' },
    ],
    alts: [
      "AGL for Business cover with tablet showing portal dashboard of Telstra sites, balances and site statuses",
      "Background slide: AGL's business portal lagged behind residential, with legacy My Sites screen shown",
      "Research approach slide: stakeholder interviews, site visits and analysis of 15,000+ customer enquiries",
      "Key findings: four business personas, billing structure diagrams and photo of research findings wall",
      "Design approach slide with competitor analysis screenshots and photo of stakeholder co-design session",
      "Four design principles: simplicity, reliability, scalability and reusability, with supporting icons",
      "Information architecture sitemaps and flow diagrams for the portal, plus prototype introduction",
      "Dashboard design evolution from grey wireframes to final welcome screen listing business sites",
      "Search and filter designs for locating sites, showing filter list iterations and faceted search concept",
      "Data visualisation screens comparing gas, solar and smart-meter electricity usage charts per site",
      "Final UI slide: research handed to UI team using AGL's design system, pilot MVP launched January 2021",
      "Closing slide with AGL logo reading 'AGL for Business — Thanks for viewing'"
    ],
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
    videos: [
      { after: 5, id: '1GjQq0ji530', title: 'Solar usage monitoring concept walkthrough' },
      { after: 11, id: 'oEg_EomPxA0', title: 'Solar usage monitoring final design demo' },
    ],
    alts: [
      "Energy Usage Monitoring cover with phone and laptop showing solar and electricity usage dashboards",
      "Background slide comparing 2016 solar app with 2018 app that lost solar feed-in, plus project tasks",
      "Research approach diagram: competitor analysis, solar technology, remote user testing and contextual inquiry",
      "Co-design session outputs and sketched chart concepts answering how solar customers monitor usage",
      "Concept exploration intro: leveraging the AGL smartphone app's established patterns for aesthetics",
      "Wireframe evolution of the web usage page across desktop, tablet and mobile with solar credit charts",
      "High-fidelity blue usage dashboards for desktop, tablet web and mobile web showing solar feed-in charts",
      "Final Electricity Usage & Solar Feed-In screens with mirrored bar charts across three screen sizes",
      "Three app concepts for solar usage charts, with the mirrored solar-versus-electricity graph outperforming",
      "Hourly and monthly chart explorations with toggles layering cost, peak periods and temperature data",
      "App visual designs over wireframes, including accessibility mode and a sample voiceover script"
    ],
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
    alts: [
      "Peak Energy Rewards cover with AGL logo and flat illustration of a city skyline in blues and teal",
      "Slide explaining demand response and pilot-year problems with reward motivation and energy behaviour",
      "Registration journey map from email invite through landing page, authentication and confirmation",
      "Registration form screens for Peak Energy Rewards with validation states and thank-you confirmation",
      "Event dashboard journey and concept exploration wireframes for SMS-triggered peak event monitoring",
      "Customer journey exploration with wireframe flows and tablet and phone prototypes of the event dashboard",
      "User testing slide with remote test screens and photo wall of annotated research findings",
      "Results slide: 3,500 respondents, 1,980 participants, 500+ concurrent users and $14k saved during event"
    ],
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
    alts: [
      "AGL Voice Skill cover showing half Amazon Echo, half Google Home with Alexa and Assistant logos",
      "Conversation flow diagram mapping voice intents like payments, billing, usage and energy-saving tips",
      "Why voice slide: drive digital adoption, grow AGL accounts and enter the smart home space",
      "Persona-based sample dialog showing a voice conversation about bills across multiple properties",
      "User testing slide with insights on utterances, feature wants and privacy, plus 'Alexa, open AGL' card",
      "Multimodal designs: Google Assistant account-choice interaction and Alexa Show screen flow diagram",
      "AGL Kids concept: child playing Energy Hog game on Echo, with kid-friendly definitions, games and tips"
    ],
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
    videos: [
      { after: 10, id: '-5E6L5BNFFE', title: 'Xero design sprint prototype walkthrough' },
    ],
    alts: [
      "Cover slide: Forming Xero's Small Business Profile case study, Part 1 – Capturing Role in Business design sprint",
      "Background text with diagram linking Person, Business and Practice entities to Xero via roles and relationships",
      "Jigsaw puzzle illustrations showing fragmented customer data today, the next puzzle piece, and the future SB Profile",
      "Slide explaining Role in Business value for Xero and customers, with Subscriber vs Owner diagram",
      "Methodology slide with GV's Idea–Build–Launch–Learn loop and the sprint question on where and how to ask customers their role",
      "Three-week sprint timeline of six phases: Understand, Define, Sketch, Decide, Prototype and Validate",
      "Matrix of key sprint activities across Empathise, Define, Ideate, Decide, Prototype and Validate stages",
      "Remote sprint sessions on Miro and user interviews, plus a collaborative customer journey map with drop-off data",
      "Key results: dashboard landing identified as the best place to ask users their role, returning a structured dataset",
      "Results slide: about 350,000 role responses in under three weeks and Xero's most successful Intercom campaign",
      "Retrospective quote 'Success is a journey, not a destination' with reflections on the three-week sprint"
    ],
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
    // Original Behance canvas: 600px transparent modules over a 725px background.
    layeredLayout: {
      width: 740, backgroundWidth: 725, backgroundHeight: 10681,
      background: 'images/honda/background.jpg', color: '#e9e7e7',
      dimensions: [[600,866],[600,2512],[600,526],[600,637],[600,1162],
        [600,412],[600,548],[600,386],[600,803],[600,584],[600,438],
        [600,571],[600,987],[601,189]]
    },
    alts: [
      "Honda logo cover slide introducing the Honda Australia website redesign case study",
      "Style guide showing Univers typography, red-black-grey colour palette and custom red car iconography",
      "Honda Australia homepage design with HR-V hero banner, model highlights and shopping tools",
      "Browse Models page listing Honda cars by category with prices, overview and showroom links",
      "CR-V showroom page with full-width lifestyle imagery, feature sections and 2WD/4WD video",
      "Find a Honda Dealer page with postcode search, dealer details and Melbourne map",
      "Honda Mag page promoting issue 56 with iPad app download and past editions in PDF",
      "Display Audio & HondaLink tech guides page with vehicle selector dropdowns and FAQ links",
      "404 error page featuring ASIMO robot apologising, with links back to home, dealers and contact",
      "Close-up detail of a model card: 2013 Civic Hatch with price, overview and view showroom buttons",
      "Close-up of brand switcher menu for Honda Motorcycles, Marine and Power Equipment sites",
      "Close-up of Jazz configurator showing transmission toggle and colour swatch options",
      "Close-up of Browse Models mega-menu grouping cars into Compact/Sport, Sedan and Minivan/SUV",
      "Closing slide: thanks for viewing, with link to honda.com.au/cars"
    ],
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
    videos: [
      { after: 10, id: 'M-lG9axyyNQ', title: 'PayProtect payment platform prototype walkthrough' },
    ],
    alts: [
      "Hero banner for carsales One Membership Part 2, Payment Platform, with a white hatchback under aurora skies",
      "Intro text: carsales launched a pilot secure payment platform for private car sales, needing a holistic redesign",
      "Research approach: customer complaints, competitor escrow services, remote user testing and journey mapping",
      "Key insights: payment status communications, awareness without ad-like feel, and a native home for PayProtect",
      "Heuristic analysis of pilot PayProtect chat UI, annotating confusion around escrow, ads and payment status",
      "Intro to concept phase: crude mockups and low-fidelity prototypes for quick remote usability testing",
      "Four greyscale mobile wireframes exploring PayProtect transaction page layouts and payment statuses",
      "Wireframed email templates for buyer and seller at each escrow stage, from funds held to release and cancellation",
      "Seven transaction status card designs, from seller initiating PayProtect through funds released and cancelled",
      "Prototype section divider",
      "Prototype flow map linking buyer verification, seller status and details screens, with phone showing funds transferred",
      "Sequence of desktop PayProtect screens showing the payment journey on an iMac display",
      "Final PayProtect tablet UI with 'What is PayProtect?' explainer video and New Payment action, carsales PayProtect logo"
    ],
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
    videos: [
      { after: 6, id: 'Co8ftd1wvG0', title: 'Manage Ads prototype walkthrough' },
    ],
    alts: [
      "Hero banner for carsales One Membership Part 1, Manage Ad, with a sports car's tail lights on a rainy city street",
      "Intro text: overhauling legacy design and UX of the carsales membership area, starting with Manage Ads",
      "Research approach: support team interviews, competitor analysis, site analytics and customer journey mapping",
      "Focus areas: fix customer support woes, modernise UI with flexible layout, and increase upsell discoverability",
      "Analysis of legacy Manage Ad page on an old laptop, flagging hidden navigation, buried stats and no pause option",
      "Concept intro: quick tissue sketches mixed with rapid prototyping for continuous testing and iteration",
      "Greyscale desktop wireframes of ad dashboard, performance stats, photo upload and upgrade screens",
      "Collage of mobile mockups for managing a car ad, including ad views chart and improvement tools",
      "Redesigned dashboard greeting the seller with listed cars, ad status badges and an instant offer card",
      "Ad details page with pause and mark-as-sold actions, plus upsells like Full Vehicle Inspection Report",
      "Ad performance dashboard comparing views, enquiries, saves and calls against similar cars, with pricing insights",
      "Ad views modal charting weekly views against search results, with an upsell for a history report",
      "Edit ad screen with drag-to-reorder photos and a prompt showing ad quality rising 11% with more photos",
      "Vehicle inspection upsell with ad quality tooltip, shown across desktop screens on an iMac",
      "Closing slide: final Manage Ad tablet UI with ad performance stats under the carsales One Membership logo"
    ],
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
    videos: [
      { after: 5, id: '9HU11gxCivU', title: 'RedBook mechanic inspection app prototype demo' },
    ],
    alts: [
      "RedBook Mechanic Inspections cover: iPad app for mobile car inspections surrounded by mechanic's tools",
      "Problem and analysis slide covering competitor research, mechanic interviews and field observation",
      "Key pain-points list: connectivity limits, third-party survey app, linear inspection flow and accessibility needs",
      "Low-fidelity iPad wireframes exploring scheduling dashboard, inspection commenting and landscape layouts",
      "Section heading slide: tested prototype and initial UI",
      "Visual design concept on iPad Minis: accessibility, dynamic weather, iOS patterns and send-to-phone feature",
      "iPad screens showing standardised star ratings, generated comments, flexible steps and appointment map view",
      "Closing slide on an iPad corner: thanks for viewing, additional screens",
      "Animated walkthrough of additional RedBook inspection app screens"
    ],
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
      'images/redbook/09-animation.gif',
    ]
  },
  {
    id: 'great-barrier-reef',
    alts: [
      "Great Barrier Reef Foundation website concept: long-scroll pages with coral and marine life photography on tablet and phone"
    ],
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
    alts: [
      "After5 title slide on black: concept for partnering with like-minded folks, a design exploration",
      "Problem slide quoting 'Everyone is talking about it. No one is getting it done' about unstarted side projects",
      "Concept slide: build an inclusive community of doers, with an early mobile wireframe of a project matching card",
      "Exploration slide with After5 logo sketches: a focused platform for creatives to partner regardless of experience",
      "Three bold black-and-pink mobile screens: home with post/find project actions, browse feed and user profile",
      "Mobile screens for a full project post, a 140-character reply pitch, and a prompt to post your first project",
      "Colour-coded After5 role badges for artist, animator, editor, designer, developer, photographer and more",
      "Animated After5 mobile interface demonstration",
      "Responsive After5 browse screen across laptop, tablet and phone with role filter and highlighted project blurb",
      "After5 applicant reply screens shown on a tablet inbox and a phone on a marble surface",
      "Closing slide on black: After5 conceptual design exercise, thanks for viewing"
    ],
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
      'images/after5/08-animation.gif',
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
      <button class="lb__nav lb__nav--prev" aria-label="Previous project">&#8592;</button>
      <button class="lb__nav lb__nav--next" aria-label="Next project">&#8594;</button>

      <div class="lb__inner">
        <aside class="lb__info">
          <button class="lb__close" aria-label="Close project">&#8592; Back</button>
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
function openLightbox(projectId, pushState = true) {
  const idx = PROJECTS.findIndex(p => p.id === projectId);
  if (idx === -1) return;
  currentProjectIndex = idx;
  renderProject(idx);

  const lb = document.getElementById('lightbox');
  lb.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  lb.querySelector('.lb__close').focus();

  // Push a history entry so the back button closes the lightbox
  if (pushState) {
    history.pushState({ lightbox: projectId }, '', `#project/${projectId}`);
  }
}

function closeLightbox(popState = true) {
  const lb = document.getElementById('lightbox');
  lb.setAttribute('hidden', '');
  document.body.style.overflow = '';
  // Return focus to the card that opened it
  const activeCard = document.querySelector(`.project-card[data-project="${PROJECTS[currentProjectIndex].id}"]`);
  if (activeCard) activeCard.focus();

  // Clean up the URL hash without adding another history entry
  if (popState && location.hash.startsWith('#project/')) {
    history.pushState(null, '', location.pathname + location.search);
  }
}

// Back button support — intercept popstate and close lightbox instead
window.addEventListener('popstate', (e) => {
  const lb = document.getElementById('lightbox');
  if (lb && !lb.hasAttribute('hidden')) {
    closeLightbox(false); // already popped, don't push again
  }
});

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
  const layout = p.layeredLayout;
  imagesEl.classList.toggle('lb__images--layered', Boolean(layout));
  // Clear project-specific styling when navigating to another case study.
  imagesEl.removeAttribute('style');
  if (layout) {
    imagesEl.style.maxWidth = `${layout.width}px`;
    imagesEl.style.backgroundColor = layout.color;
    imagesEl.style.backgroundImage = `url("${layout.background}")`;
    imagesEl.style.backgroundSize = `${layout.backgroundWidth / layout.width * 100}% auto`;
    imagesEl.style.aspectRatio = `${layout.width} / ${layout.backgroundHeight}`;
  }
  imagesEl.innerHTML = p.images.map((src, i) => {
    const dimensions = layout?.dimensions[i];
    const size = dimensions ? ` width="${dimensions[0]}" height="${dimensions[1]}"` : '';
    const style = dimensions ? ` style="width: ${dimensions[0] / layout.width * 100}%"` : '';
    const img = `
    <div class="lb__img-wrap"${style}>
      <img src="${src}"${size} alt="${(p.alts && p.alts[i]) || `${p.title} — image ${i + 1}`}" loading="${i === 0 ? 'eager' : 'lazy'}" />
    </div>`;
    const vids = (p.videos || [])
      .filter(v => v.after === i + 1)
      .map(v => `
    <div class="lb__video-wrap">
      <iframe src="https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1"
        title="${v.title}" loading="lazy" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>`)
      .join('');
    return img + vids;
  }).join('');

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

  // Focus trap — keep Tab cycling within the dialog
  if (e.key === 'Tab') {
    const focusables = lb.querySelectorAll('button, a[href]');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
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

  // Open lightbox on page load if URL contains a #project/ hash (e.g. shared link)
  const match = location.hash.match(/^#project\/(.+)$/);
  if (match) {
    openLightbox(match[1], false); // don't double-push history
  }
});
