/**
 * Seed data script for Project 25 CMS
 * Run with: npm run seed
 */

// Base URLs for Cloudflare R2 storage
const CLOUDFLARE_BASE_URL = 'https://76c05bb2d162508a6abf799f4757e5f5.r2.cloudflarestorage.com';

// Helper to construct image URLs
const p25ImageUrl = (filename) => `${CLOUDFLARE_BASE_URL}/p25images/${filename}`;
const teamImageUrl = (filename) => `${CLOUDFLARE_BASE_URL}/teamimages/${filename}`;
const videoUrl = (filename) => `${CLOUDFLARE_BASE_URL}/videos/${filename}`;
const funRunImageUrl = (filename) => `${CLOUDFLARE_BASE_URL}/funrunimages/${filename}`;

// ============================================================================
// INITIATIVES DATA
// ============================================================================
const initiatives = [
  {
    title: "Open Tribe Foundation",
    slug: "open-tribe-foundation",
    status: "Active",
    shortDescription: "Rebuilding Zimbabwe by empowering the next generation.",
    fullDescription: `The Open Tribe Foundation school in Epworth is home to over 300 students from Grades 1 to 7 — a place where, despite limited resources, dreams continue to grow.

Our journey with Open Tribe began in 2017 under the Vaka Dzidzo initiative, when we first started supporting the school through donations of school supplies, textbooks, and other essentials. But as we spent more time with the students and their community, we realized they needed more than just supplies — they needed proper classrooms, safe spaces to learn, and real infrastructure to support their education.

In 2020, we took a major step forward and launched our first construction project: building a toilet block for the school. From there, we moved on to building classrooms — starting small, but fueled by a big vision for the future.

Under Project 2025, our mission is clear: to help complete the construction and furnishing of the school. So far, with the help of incredible supporters and partners, we have:
• Completed a toilet block
• Built and finished four classrooms — fully roofed, tiled, with doors and windows
• Secured a fence around the school grounds
• Provided desks and chairs for students who had never had them before

The work is not yet finished. In 2025, we are aiming to complete the remaining classrooms and facilities, creating a safe, fully equipped school environment where every child can learn, dream, and thrive.

This journey is about more than just bricks and mortar — it's about restoring hope and opportunity to a new generation of Zimbabwean children.

Join us as we build the future, one classroom at a time.`,
    images: [
      p25ImageUrl('WhatsApp%20Image%202025-05-16%20at%2001.28.12.jpeg'),
      p25ImageUrl('WhatsApp%20Image%202025-05-16%20at%2001.28.13.jpeg')
    ],
    videoUrl: videoUrl('VIDEO-2025-04-02-00-53-05.mp4'),
    imageTransitionTime: 3000,
    raised: 15000,
    spent: 12526,
    nextGoal: 10000,
    breakdown: [
      { item: "Toilets", cost: 1922 },
      { item: "Half the school", cost: 10604 }
    ],
    impactMetrics: null,
    publishedAt: new Date().toISOString()
  },
  {
    title: "Vaka Dzidzo",
    slug: "vaka-dzidzo",
    status: "Completed",
    shortDescription: "Providing academic resources to underprivileged students in Zimbabwe.",
    fullDescription: `Vaka Dzidzo was launched in 2017 to provide academic resources to underprivileged students in Zimbabwe. With this initiative, we supported 400 students from the Open Tribe Foundation, aged 6 to 15, by donating books, stationery, and food worth USD 5,000. Our team organized fundraising events, including a Bible Quiz Night, and secured sponsorships from individuals across the globe to help meet some of the students' needs.

Despite our efforts, the school lacked proper infrastructure, adequate furniture, and essential supplies. At the time, it consisted of two makeshift sheds, with students sitting on benches without desks and no clear separation between grades due to limited space. We didn't know what the future held, but we hoped that one day, we could create a more deserving learning environment, though we weren't sure if that dream would ever become a reality.`,
    imageUrl: p25ImageUrl('VakaDzidzo.jpeg'),
    raised: 5000,
    spent: 5000,
    breakdown: [
      { item: "Books and Stationery", cost: 3000 },
      { item: "Food Supplies", cost: 2000 }
    ],
    impactMetrics: {
      studentsSupported: 400,
      ageRange: "6-15 years",
      items: ["Books", "Stationery", "Food"],
      events: ["Bible Quiz Night"]
    },
    publishedAt: new Date().toISOString()
  },
  {
    title: "#FeedZim",
    slug: "feedzim",
    status: "Completed",
    shortDescription: "Fighting food insecurity, one food hamper at a time.",
    fullDescription: `In 2019, an estimated 60% of Zimbabwe's population was food insecure. This meant that over 14 million people lived in households where breadwinners struggled to obtain enough food to meet basic nutritional needs. In 2020, we harnessed the power of social capital to raise USD 4,300, providing food hampers to 315 families in Epworth, Dzivarasekwa, and Bulawayo. Each hamper contained necessities such as mealie meal, sugar, flour, salt, soya chunks or kapenta, petroleum jelly, and soap.

While our initiative was vital in addressing immediate needs, we recognize that it was merely a temporary solution to a much deeper crisis. We hope to explore sustainable ways to empower vulnerable families to put food on their tables without relying on philanthropy alone.`,
    imageUrl: p25ImageUrl('feedzimimage.jpeg'),
    raised: 4300,
    spent: 4300,
    breakdown: [
      { item: "Food Hampers", cost: 4300 }
    ],
    impactMetrics: {
      hampersDelivered: 500,
      locationsServed: [
        "Epworth, Harare",
        "Dzivarasekwa, Harare",
        "Tsholotsho"
      ]
    },
    publishedAt: new Date().toISOString()
  }
];

// ============================================================================
// EVENTS DATA
// ============================================================================
const events = [
  {
    title: "BUMP ZIM",
    slug: "bump-zim",
    subtitle: "The Babies and Underprivileged Moms Project",
    tagline: "Help us reduce the number of teenage mothers that start this journey alone",
    description: "In response to the teenage pregnancy statistics in Matabeleland, PROJECT 25 is raising funds to provide care baskets containing vital supplies for safe newborn and postnatal care.",
    deadline: "2026-03-12T23:59:59",
    location: "Matabeleland, Zimbabwe",
    isActive: true,
    eventType: "campaign",
    heroImage: p25ImageUrl('IMG_3280.jpg'),
    gallery: [
      p25ImageUrl('WhatsApp Image 2026-02-25 at 20.37.12.jpeg'),
      p25ImageUrl('IMG_3281.jpg'),
      p25ImageUrl('WhatsApp Image 2026-02-25 at 20.37.12 (1).jpeg')
    ],
    careBasketItems: [
      "20 L bucket",
      "Diapers (60 pack)",
      "Vaseline",
      "Cotton wool",
      "Bottle of methylated spirit",
      "Baby soap",
      "Green bar soap",
      "1 face towel for baby",
      "1 packet of baby wipes",
      "1 flannel wrapper",
      "1 baby hat",
      "1 long sleeved baby romper",
      "2 long sleeved vests with fasteners",
      "2 pairs of socks"
    ],
    hamperValue: "$50",
    paymentMethods: [
      {
        name: "PayPal",
        details: "project25zim@gmail.com"
      },
      {
        name: "Cash App / Venmo",
        details: "missnyarr"
      },
      {
        name: "EcoCash / Cash",
        details: "Maxine\\n+263 772 352 266"
      }
    ],
    publishedAt: new Date().toISOString()
  },
  {
    title: "P25 Fun Run",
    slug: "p25-fun-run",
    description: "Join us for an unforgettable evening of giving and celebration.",
    endDate: "2025-04-30T23:59:59",
    location: "Virtual Event - Worldwide",
    isActive: false,
    eventType: "challenge",
    textImage: funRunImageUrl('p25text.jpeg'),
    posters: [
      funRunImageUrl('poster3.jpeg'),
      funRunImageUrl('poster1.jpeg'),
      funRunImageUrl('poster3.jpeg')
    ],
    gallery: [
      funRunImageUrl('banner1.jpeg'),
      funRunImageUrl('banner2.jpeg')
    ],
    testimonials: [
      "An amazing event that truly makes a difference!",
      "Proud to be part of this wonderful initiative.",
      "Can't wait for next year's gala!"
    ],
    registrationLink: "https://forms.gle/J3nxKSpCJd6iU5KJ9",
    pricing: {
      standard: "USD 20",
      withMedal: "USD 25 (includes medal, Zimbabwe only)"
    },
    howItWorks: "Sign up for $20 USD (or $25 USD for a medal after completion if you are in Zimbabwe). Run a total of 25 km in April.",
    impactMessage: "By signing up, you're not just running—you're helping to build a future for students in Epworth.",
    stravaNote: "After signing up, you'll receive a link on March 31 to join the challenge on Strava and track your progress.",
    paymentMethods: [
      {
        name: "PayPal",
        details: "project25zim@gmail.com"
      },
      {
        name: "Cash App/Venmo",
        details: "Nyaradzo Sirewu\\n@missnyarr"
      },
      {
        name: "EcoCash/InnBucks/Cash",
        details: "Maxine Chisweto\\n+263 772 325 566"
      },
      {
        name: "EcoCash/InnBucks/Cash",
        details: "Ruvarashe Dahwa\\n+263 773 824 952"
      }
    ],
    publishedAt: new Date().toISOString()
  }
];

// ============================================================================
// TEAM MEMBERS DATA
// ============================================================================
const teamMembers = [
  {
    name: "Mutsa Chiromo",
    slug: "mutsa-chiromo",
    occupation: "Medical Student",
    imageUrl: teamImageUrl('Chiromo, Mutsa 2025.jpg'),
    isFounder: true,
    order: 1
  },
  {
    name: "Maakwe Cumanzala",
    slug: "maakwe-cumanzala",
    occupation: "PhD candidate in Economics and Public Policy",
    imageUrl: teamImageUrl('IMG-20250106-WA0019.jpg'),
    isFounder: true,
    order: 2
  },
  {
    name: "Varaidzo Kamhunga",
    slug: "varaidzo-kamhunga",
    occupation: "Head of Corporate Services",
    imageUrl: teamImageUrl('IMG-20250113-WA0001.jpg'),
    isFounder: true,
    order: 3
  },
  {
    name: "Ruvarashe Dahwa",
    slug: "ruvarashe-dahwa",
    occupation: "General Practioner",
    imageUrl: teamImageUrl('IMG-20250113-WA0002.jpg'),
    isFounder: true,
    order: 4
  },
  {
    name: "Maxine Chisweto",
    slug: "maxine-chisweto",
    occupation: "Lawyer",
    imageUrl: teamImageUrl('IMG-20250113-WA0003.jpg'),
    isFounder: true,
    order: 5
  },
  {
    name: "Mufaro Hungwe",
    slug: "mufaro-hungwe",
    occupation: "Footwear Product Developer",
    imageUrl: teamImageUrl('IMG-20250113-WA0004.jpg'),
    isFounder: true,
    order: 6
  },
  {
    name: "Michelle Kabaira",
    slug: "michelle-kabaira",
    occupation: "Process Support Engineer",
    imageUrl: teamImageUrl('IMG-20250113-WA0005.jpg'),
    isFounder: true,
    order: 7
  },
  {
    name: "Nyaradzo Sirewu",
    slug: "nyaradzo-sirewu",
    occupation: "Public Health Practitioner",
    imageUrl: teamImageUrl('IMG-20250113-WA0006.jpg'),
    isFounder: true,
    order: 8
  }
];

// ============================================================================
// PARTNERS DATA
// ============================================================================
const partners = [
  {
    name: "Maxitreats",
    slug: "maxitreats",
    logoUrl: "/assets/maxitreats-logo.jpg",
    isActive: true,
    order: 1
  },
  {
    name: "New Marlborough Private Hospital",
    slug: "new-marlborough-private-hospital",
    logoUrl: "/assets/new-marlborough-private-hospital-logo.jpg",
    isActive: true,
    order: 2
  },
  {
    name: "Australian Embassy - Zimbabwe",
    slug: "australian-embassy-zimbabwe",
    logoUrl: "/assets/australian-embassy.png",
    isActive: true,
    order: 3
  },
  {
    name: "Chozen Foundation",
    slug: "chozen-foundation",
    logoUrl: "/assets/chozen-foundation.png",
    isActive: true,
    order: 4
  },
  {
    name: "Tiyamike Phiri",
    slug: "tiyamike-phiri",
    logoUrl: "/assets/tiyamike-phiri-logo.jpg",
    isActive: true,
    order: 5
  },
  {
    name: "Steel Centre",
    slug: "steel-centre",
    logoUrl: "/assets/steel-centre-logo.jpg",
    isActive: true,
    order: 6
  },
  {
    name: "Paper Pieces",
    slug: "paper-pieces",
    logoUrl: "/assets/paper-pieces-logo.jpg",
    isActive: true,
    order: 7
  },
  {
    name: "Arundel School",
    slug: "arundel-school",
    logoUrl: "/assets/arundel-logo.png",
    isActive: true,
    order: 8
  },
  {
    name: "Rotaract Club of Harare City",
    slug: "rotaract-club-harare-city",
    logoUrl: "/assets/rotaract-club.svg",
    isActive: true,
    order: 9
  }
];

// ============================================================================
// IMPACT STATS DATA
// ============================================================================
const impactStats = [
  {
    amount: "500+",
    label: "Food hampers distributed",
    subtext: "Through #FeedZim campaign",
    order: 1
  },
  {
    amount: "$15,000",
    label: "Raised for school construction",
    subtext: "Half the school building completed",
    order: 2
  },
  {
    amount: "400",
    label: "Students supported",
    subtext: "With books, stationery & food",
    order: 3
  }
];

// ============================================================================
// FOOTER DATA (Single Type)
// ============================================================================
const footer = {
  companyName: "Project 25",
  companyDescription: "Empowering communities and transforming lives across Zimbabwe.",
  trustName: "Project 25 Trust",
  contactEmail: "project25zim@gmail.com",
  socialLinks: [
    { platform: "Twitter", url: "https://twitter.com/project25zim", icon: "twitter" },
    { platform: "Instagram", url: "https://instagram.com/project25zim", icon: "instagram" }
  ],
  quickLinks: [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Our Initiatives", url: "/ourinitiatives" },
    { label: "Donate", url: "/donate" },
    { label: "Volunteer", url: "/volunteer" }
  ],
  copyrightText: "© 2025 Project 25. All rights reserved.",
  developerName: "Project 25",
  developerUrl: "https://project25.org"
};

// ============================================================================
// NAVIGATION DATA (Single Type)
// ============================================================================
const navigation = {
  logoText: "Project",
  logoHighlight: "25",
  menuItems: [
    { label: "Home", url: "/", order: 1 },
    { label: "About Us", url: "/about", order: 2 },
    {
      label: "Our Initiatives",
      url: "/ourinitiatives",
      order: 3,
      submenu: [
        { label: "Open Tribe Foundation", url: "/initiative/open-tribe-foundation" },
        { label: "Vaka Dzidzo", url: "/initiative/vaka-dzidzo" },
        { label: "#FeedZim", url: "/initiative/feedzim" }
      ]
    },
    { label: "Events", url: "/events", order: 4 },
    { label: "Volunteer", url: "/volunteer", order: 5 },
    { label: "Donate", url: "/donate", order: 6 }
  ]
};

// ============================================================================
// PAGES DATA
// ============================================================================
const pages = [
  {
    title: "Home",
    slug: "home",
    heroHeading: "Growing and Grounded",
    heroTagline: "Empowering communities and transforming lives across Zimbabwe.",
    heroImage: p25ImageUrl('fullsizeoutput_bce3.jpeg')
  },
  {
    title: "About Us",
    slug: "about",
    subtitle: "Our Story",
    content: "Established in 2020, Project 25 aims to be an initiative that reflects both our personal growth and our commitment to giving back to the communities that shaped us."
  },
  {
    title: "Volunteer",
    slug: "volunteer",
    heroHeading: "Join Our Mission",
    heroTagline: "Become a volunteer and help us bring positive change."
  },
  {
    title: "Donate",
    slug: "donate",
    heroHeading: "Support Our Cause",
    heroTagline: "Your donation makes a real difference in the lives of others."
  }
];

// ============================================================================
// SEED FUNCTION
// ============================================================================
async function seed() {
  const { strapi } = require('@strapi/strapi');

  console.log('🌱 Starting seed...');

  try {
    // Seed Initiatives
    console.log('📦 Seeding initiatives...');
    for (const initiative of initiatives) {
      await strapi.documents('api::initiative.initiative').create({
        data: initiative
      });
    }
    console.log(`✅ Created ${initiatives.length} initiatives`);

    // Seed Events
    console.log('📦 Seeding events...');
    for (const event of events) {
      await strapi.documents('api::event.event').create({
        data: event
      });
    }
    console.log(`✅ Created ${events.length} events`);

    // Seed Team Members
    console.log('📦 Seeding team members...');
    for (const member of teamMembers) {
      await strapi.documents('api::team-member.team-member').create({
        data: member
      });
    }
    console.log(`✅ Created ${teamMembers.length} team members`);

    // Seed Partners
    console.log('📦 Seeding partners...');
    for (const partner of partners) {
      await strapi.documents('api::partner.partner').create({
        data: partner
      });
    }
    console.log(`✅ Created ${partners.length} partners`);

    // Seed Impact Stats
    console.log('📦 Seeding impact stats...');
    for (const stat of impactStats) {
      await strapi.documents('api::impact-stat.impact-stat').create({
        data: stat
      });
    }
    console.log(`✅ Created ${impactStats.length} impact stats`);

    // Seed Footer (Single Type)
    console.log('📦 Seeding footer...');
    await strapi.documents('api::footer.footer').create({
      data: footer
    });
    console.log('✅ Created footer');

    // Seed Navigation (Single Type)
    console.log('📦 Seeding navigation...');
    await strapi.documents('api::navigation.navigation').create({
      data: navigation
    });
    console.log('✅ Created navigation');

    // Seed Pages
    console.log('📦 Seeding pages...');
    for (const page of pages) {
      await strapi.documents('api::page.page').create({
        data: page
      });
    }
    console.log(`✅ Created ${pages.length} pages`);

    console.log('🎉 Seed completed successfully!');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    throw error;
  }
}

// Export for use in Strapi
module.exports = {
  seed,
  initiatives,
  events,
  teamMembers,
  partners,
  impactStats,
  footer,
  navigation,
  pages
};
