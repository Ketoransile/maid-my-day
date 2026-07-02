import { images } from "@/lib/images";

export const pageHeroContent = {
  services: {
    eyebrow: "Our Services",
    title: "Premium home & relocation support in Addis Ababa",
    description:
      "From finding your apartment to hiring trusted housemaids, drivers, and pet care — Maid My Day helps expat families run a calm, well-managed household in Ethiopia's capital.",
    image: images.backgrounds.services,
  },
  howItWorks: {
    eyebrow: "How It Works",
    title: "A clear path from first call to settled home",
    description:
      "We designed a straightforward process for busy professionals. No endless back-and-forth — just structured steps, vetted staff, and a team that stays with you after placement.",
    image: images.backgrounds.howItWorks,
  },
  whyUs: {
    eyebrow: "Why Maid My Day",
    title: "Built for expats who need reliability, not guesswork",
    description:
      "Diplomats, embassy staff, NGO leaders, and international families trust us because we understand the realities of moving to Addis Ababa — and we deliver support that actually works day to day.",
    image: images.backgrounds.whyUs,
  },
  faq: {
    eyebrow: "Help Center",
    title: "Answers before you commit",
    description:
      "Everything you need to know about vetting, placement, relocation packages, pricing, and ongoing household support — written plainly, without agency jargon.",
    image: images.backgrounds.faq,
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Tell us what your household needs",
    description:
      "Whether you are planning a move months ahead or need help this week, our team responds within 24 hours with practical next steps — no pressure and no obligation.",
    image: images.backgrounds.contact,
  },
} as const;

export type ServiceDetail = {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  includes: string[];
  idealFor: string[];
  image: string;
  imageAlt: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: "housing",
    title: "Housing & Relocation",
    summary:
      "End-to-end support for finding, securing, and settling into the right home in Addis Ababa.",
    paragraphs: [
      "Moving to a new country means navigating unfamiliar neighborhoods, lease norms, and utility setups — often while juggling work and family. Our relocation team acts as your local guide, narrowing options to areas that match your commute, security preferences, and lifestyle.",
      "We coordinate viewings, liaise with landlords and property managers, and help you understand what is included in local rental agreements. Once you sign, we support move-in logistics: key handover, basic furnishing guidance, and introductions to reliable local vendors.",
      "For families arriving on tight timelines — common with embassy postings and NGO rotations — we offer accelerated search packages with daily updates and shortlists tailored to your brief.",
    ],
    includes: [
      "Neighborhood scouting in Bole, Kazanchis, CMC, Old Airport, Sarbet & more",
      "Property shortlists matched to budget, size, and security needs",
      "Viewing coordination and lease review support",
      "Move-in assistance and utility setup guidance",
      "Post-arrival check-ins during your first month",
    ],
    idealFor: [
      "Newly arrived expats and diplomatic families",
      "Professionals relocating for UN, NGO, or corporate assignments",
      "Households upgrading or changing neighborhoods within Addis",
    ],
    image: images.services.housing,
    imageAlt: "Keys and documents for a new home in Addis Ababa",
  },
  {
    id: "housemaids",
    title: "Trained Housemaids",
    summary:
      "Reliable, vetted housemaids for cleaning, laundry, cooking, and daily household care.",
    paragraphs: [
      "A good housemaid changes how your home feels — but finding one you trust in a new city is hard. Every Maid My Day housemaid passes interviews, reference checks, and practical assessments before we ever suggest a match.",
      "We place staff for full-time, part-time, and live-out arrangements. You define the schedule, language preferences, and duties; we find candidates whose experience aligns. Cooking support can include Ethiopian dishes, international meals, or both, depending on your household.",
      "After placement, we remain your point of contact for scheduling adjustments, replacements, and feedback — so issues are resolved quickly rather than left to linger.",
    ],
    includes: [
      "Multi-stage vetting: interview, references & background checks",
      "Introduction meeting before any placement begins",
      "Cleaning, laundry, ironing, and kitchen support",
      "Replacement guarantee if the match is not right",
      "Ongoing coordination with your dedicated account contact",
    ],
    idealFor: [
      "Families with children who need consistent daily help",
      "Dual-career households with demanding schedules",
      "Clients who want cooking and home care under one trusted person",
    ],
    image: images.services.housemaid,
    imageAlt: "Professional housemaid maintaining a clean home",
  },
  {
    id: "drivers",
    title: "Professional Drivers",
    summary:
      "Safe, punctual drivers for school runs, office commutes, and family travel across Addis Ababa.",
    paragraphs: [
      "Addis traffic and unfamiliar routes can make even simple errands stressful. Our drivers are selected for safe driving records, local route knowledge, and professional conduct with families and employers.",
      "Whether you need a full-time family driver, a part-time school-run specialist, or occasional airport transfers, we match based on your schedule, vehicle situation, and language needs. Many of our clients are embassy and NGO families who require discretion and reliability above all.",
      "Drivers can work with your own vehicle or we can advise on local hiring norms if you are arranging transport for the first time in Ethiopia.",
    ],
    includes: [
      "Licensed drivers with verified experience in Addis Ababa",
      "School runs, commutes, errands, and airport transfers",
      "Punctuality and professional presentation standards",
      "Trial introduction before long-term placement",
      "Backup coordination if your driver is unavailable",
    ],
    idealFor: [
      "Families with school-age children",
      "Executives and diplomats with unpredictable schedules",
      "Households without a personal vehicle who need a trusted driver",
    ],
    image: images.services.driver,
    imageAlt: "Professional driver providing safe family transport",
  },
  {
    id: "pet-care",
    title: "Pet Care",
    summary:
      "Dependable care for dogs, cats, and other pets while you work, travel, or settle in.",
    paragraphs: [
      "Pets are family — and relocating with them adds another layer of complexity. Our pet care staff provide feeding, walking, basic grooming support, and companionship while you are at work or traveling within Ethiopia or abroad.",
      "We match caregivers who are comfortable with your pet's size, temperament, and routine. For newly arrived families, we can also help connect you with trusted local veterinarians and pet supply sources.",
      "Regular updates and clear handover notes mean you always know how your pet is doing, even when you cannot be home.",
    ],
    includes: [
      "Daily feeding, walking, and playtime",
      "Overnight or extended stay care on request",
      "Medication reminders and vet visit accompaniment",
      "Pet sitters vetted for experience with dogs and cats",
      "Flexible scheduling around your travel plans",
    ],
    idealFor: [
      "Expat families who relocated with pets",
      "Professionals who travel frequently for work",
      "Households needing backup care when house staff are off-duty",
    ],
    image: images.services.petCare,
    imageAlt: "Caring pet sitter with a family dog",
  },
  {
    id: "home-management",
    title: "Home Management",
    summary:
      "Complete coordination to keep your household running smoothly — vendors, schedules, and day-to-day oversight.",
    paragraphs: [
      "When you are managing work, family, and life in a new country, the small things pile up: grocery runs, vendor payments, maintenance calls, staff schedules. Home management brings order to that chaos.",
      "We assign a coordinator who understands your household rhythm — who comes when, what needs to happen weekly, and which local services to trust. This is especially valuable for larger homes, properties with gardens, or households employing multiple staff members.",
      "Think of it as having a experienced household manager without the full-time hire: structured, proactive, and focused on keeping your home efficient and calm.",
    ],
    includes: [
      "Staff schedule coordination across housemaids and drivers",
      "Vendor sourcing: cleaning supplies, maintenance, gardening",
      "Inventory and grocery list management",
      "Monthly household check-ins and issue resolution",
      "Single point of contact for all Maid My Day services",
    ],
    idealFor: [
      "Large households with multiple staff members",
      "Busy executives who want hands-off home operations",
      "Families who prefer one coordinator instead of juggling providers",
    ],
    image: images.services.homeManagement,
    imageAlt: "Well-organized modern household in Addis Ababa",
  },
  {
    id: "childcare",
    title: "Childcare & Nannies",
    summary:
      "Warm, trustworthy nannies and childminders who keep your children safe, engaged, and cared for at home.",
    paragraphs: [
      "Leaving your children with someone new is one of the hardest parts of settling into a different country. Every Maid My Day nanny is interviewed, reference-checked, and assessed for warmth, patience, and real experience caring for children before we suggest a match.",
      "We place caregivers for full-time, part-time, and occasional needs — from newborn support to after-school care for older kids. You set the routine, language, and house rules; we find someone whose experience and temperament fit your family, whether that means help with meals, homework, playtime, or school runs.",
      "After placement, we stay in touch for scheduling changes, feedback, and replacements — so you always have a reliable point of contact and peace of mind while you work or travel.",
    ],
    includes: [
      "Nannies vetted through interviews, references & background checks",
      "Newborn, toddler, and after-school care options",
      "Support with meals, hygiene, playtime, and homework",
      "Full-time, part-time, and occasional scheduling",
      "Replacement guarantee and ongoing coordination",
    ],
    idealFor: [
      "Working parents and dual-career households",
      "Newly arrived families who need trusted local childcare",
      "Parents needing flexible or backup care around their schedule",
    ],
    image: images.services.childcare,
    imageAlt: "Nanny playing with a young child at home",
  },
];

export const serviceAreas = [
  "Bole",
  "Kazanchis",
  "CMC",
  "Old Airport",
  "Sarbet",
  "Megenagna",
  "Summit",
  "Gerji",
  "Ayat",
  "Lebu",
  "Saris",
  "Kirkos",
] as const;

export const relocationPackages = [
  {
    title: "Arrival Essentials",
    description:
      "For professionals who have housing arranged but need trusted staff quickly after landing.",
    items: [
      "Housemaid or driver placement within days",
      "Introduction meetings and trial period",
      "First-week check-in call",
    ],
  },
  {
    title: "Full Relocation",
    description:
      "Our most popular package for families and diplomats moving to Addis for the first time.",
    items: [
      "Neighborhood search and property shortlist",
      "Move-in and utility setup support",
      "Staff placement: maid, driver, or both",
      "30-day settling-in support",
    ],
  },
  {
    title: "Household Plus",
    description:
      "For established residents who want ongoing home management and staff coordination.",
    items: [
      "Dedicated household coordinator",
      "Multi-staff scheduling and oversight",
      "Vendor and maintenance coordination",
      "Quarterly household review",
    ],
  },
] as const;

export const detailedProcessSteps = [
  {
    step: "01",
    title: "Share your brief",
    description:
      "Tell us about your household — who lives with you, where you are in Addis (or when you arrive), and what support you need. A short call or our contact form is enough to start.",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Needs assessment",
    description:
      "We clarify schedule, language, live-in vs live-out preferences, and any special requirements (pets, children, dietary needs, security considerations).",
    duration: "Day 1–2",
  },
  {
    step: "03",
    title: "Candidate shortlist",
    description:
      "Our team reviews vetted candidates from our network and sends a shortlist with profiles — typically within 24–48 hours of your inquiry.",
    duration: "Day 2–3",
  },
  {
    step: "04",
    title: "Introduction meeting",
    description:
      "You meet candidates in person or by video before any commitment. We encourage families to ask questions and observe fit firsthand.",
    duration: "Day 3–5",
  },
  {
    step: "05",
    title: "Trial & placement",
    description:
      "A short trial period lets both sides confirm the match. Once you approve, we finalize placement terms and start dates.",
    duration: "Week 1",
  },
  {
    step: "06",
    title: "Settling-in support",
    description:
      "We check in during the first weeks to ensure schedules work, communication is clear, and any early adjustments are handled quickly.",
    duration: "Weeks 2–4",
  },
  {
    step: "07",
    title: "Ongoing partnership",
    description:
      "Replacements, additional staff, relocation upgrades, and home management — your Maid My Day contact stays available as your needs evolve.",
    duration: "Ongoing",
  },
] as const;

export const first30Days = [
  {
    week: "Week 1",
    title: "Land & connect",
    items: [
      "Submit your inquiry or schedule an intro call",
      "Receive your shortlist and schedule introductions",
      "Begin housing viewings if relocation is part of your package",
    ],
  },
  {
    week: "Week 2",
    title: "Match & place",
    items: [
      "Complete trial periods with housemaid or driver candidates",
      "Finalize lease and move-in if relocating",
      "Set household routines and staff schedules",
    ],
  },
  {
    week: "Weeks 3–4",
    title: "Settle & refine",
    items: [
      "First check-in with your Maid My Day coordinator",
      "Adjust schedules or duties as needed",
      "Add pet care or home management if required",
    ],
  },
] as const;

export const preparationChecklist = [
  "Your expected arrival date or current neighborhood in Addis",
  "Household size and whether children or pets are involved",
  "Preferred staff schedule (full-time, part-time, live-in, live-out)",
  "Language preferences for staff communication",
  "Specific duties: cooking, cleaning, driving routes, school runs",
  "Budget range and timeline — urgent vs flexible",
] as const;

export const whoWeServe = [
  {
    title: "Diplomats & Embassy Staff",
    description:
      "Discretion, security awareness, and staff who understand protocol-heavy households. We regularly support embassy families across Addis Ababa's diplomatic zones.",
  },
  {
    title: "UN & NGO Professionals",
    description:
      "Fast placement for rotating assignments, with staff who adapt to irregular schedules and international household standards.",
  },
  {
    title: "Corporate Expats",
    description:
      "Executives and managers who need reliable drivers, housemaids, and home coordination without spending weekends on admin.",
  },
  {
    title: "International Families",
    description:
      "Parents settling children into new schools while keeping a clean, calm home — often with pets, guests, and travel in the mix.",
  },
] as const;

export const ourStandards = [
  {
    title: "Rigorous vetting",
    detail:
      "Application review, in-person interview, reference verification, and background checks before anyone is introduced to clients.",
  },
  {
    title: "Client approval first",
    detail:
      "No placement begins without your explicit sign-off after an introduction meeting.",
  },
  {
    title: "Replacement guarantee",
    detail:
      "If a match is not working, we find a better fit at no additional placement fee.",
  },
  {
    title: "Clear communication",
    detail:
      "Dedicated contact person, realistic timelines, and honest answers — including when we need more time to find the right candidate.",
  },
  {
    title: "Local expertise",
    detail:
      "Deep knowledge of Addis neighborhoods, rental norms, traffic patterns, and trusted local vendors.",
  },
  {
    title: "Long-term relationships",
    detail:
      "Many clients keep the same driver or housemaid for years. We optimize for retention, not quick turnover.",
  },
] as const;

export type FaqCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const extendedFaqs: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "Is there a minimum contract length for staff?",
        answer:
          "Terms vary by role and schedule. Many clients begin with a trial period of one to two weeks, then move to monthly arrangements. We explain options clearly before you commit.",
      },
      {
        question: "Can I hire staff for a temporary assignment?",
        answer:
          "Yes. We support short-term placements for visiting families, interim coverage between long-term hires, and seasonal needs.",
      },
      {
        question: "Do you help with work permits or employment paperwork?",
        answer:
          "We guide clients on local hiring norms and can connect you with appropriate legal or HR resources. Specific documentation requirements depend on your employer and visa status.",
      },
    ],
  },
  {
    category: "Staff & Vetting",
    items: [
      {
        question: "What training do housemaids receive?",
        answer:
          "Candidates are assessed on cleaning standards, laundry care, kitchen hygiene, and communication. Clients can request additional orientation on household-specific preferences during the trial period.",
      },
      {
        question: "Are drivers familiar with international school routes?",
        answer:
          "Yes. Many of our drivers regularly serve families in Bole, Old Airport, and CMC with school runs to major international schools in Addis Ababa.",
      },
      {
        question: "Can I request English-speaking staff?",
        answer:
          "Absolutely. Language preference is part of our needs assessment, and we prioritize candidates who match your household's communication needs.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    items: [
      {
        question: "How is pricing structured?",
        answer:
          "Staff salaries are paid directly between you and the employee per local norms. Maid My Day charges a placement and coordination fee that varies by service type and package. We provide a clear quote after understanding your needs.",
      },
      {
        question: "Are there hidden fees?",
        answer:
          "No. We itemize placement fees, relocation package costs, and any optional add-ons before you agree. Replacements under our guarantee do not incur a new placement fee.",
      },
      {
        question: "Do you offer corporate or embassy billing?",
        answer:
          "We can discuss invoicing arrangements for organizational clients. Contact us with your employer's requirements and we will outline options.",
      },
    ],
  },
  {
    category: "Relocation",
    items: [
      {
        question: "How far in advance should I contact you before moving?",
        answer:
          "Ideally four to six weeks before arrival for full relocation packages. For staff-only placement, we can often begin within 24 hours and place candidates within a few days.",
      },
      {
        question: "Can you help if I am already in Addis but unhappy with current staff?",
        answer:
          "Yes. Many clients come to us for replacements or upgrades. We treat urgent situations with priority and aim to present alternatives quickly.",
      },
      {
        question: "Do you assist with furniture and appliance sourcing?",
        answer:
          "We provide guidance and vendor introductions for furnishing a new home. Full procurement can be arranged as part of premium relocation packages.",
      },
    ],
  },
  {
    category: "Ongoing Support",
    items: [
      {
        question: "What if my schedule changes after placement?",
        answer:
          "Contact your Maid My Day coordinator. We help adjust hours, add duties, or coordinate additional staff as your household evolves.",
      },
      {
        question: "Do you provide holiday or leave coverage?",
        answer:
          "Backup and temporary coverage can be arranged with advance notice. Availability depends on season and role.",
      },
      {
        question: "How do I give feedback about staff performance?",
        answer:
          "Reach out to your dedicated contact by phone or email. We mediate concerns fairly and work toward solutions — including replacement when necessary.",
      },
    ],
  },
];

export const contactAfterSteps = [
  {
    title: "We read your message",
    description:
      "A coordinator reviews your household brief — services needed, timeline, and location — usually the same business day.",
  },
  {
    title: "We reply within 24 hours",
    description:
      "You receive a personal response with clarifying questions, next steps, or a suggested call time. No automated fluff.",
  },
  {
    title: "We build your plan",
    description:
      "Shortlists, viewings, or introduction meetings are scheduled based on urgency. Most staff placements begin within a few days.",
  },
  {
    title: "We stay available",
    description:
      "After placement, the same team handles adjustments, additions, and any concerns — you are not passed to a call center.",
  },
] as const;

export const officeInfo = {
  hours: "Monday – Saturday, 8:30 AM – 6:00 PM (EAT)",
  response: "Most inquiries answered within 24 hours",
  languages: "English, Amharic, and French coordination available",
  coverage: "All major residential areas across Addis Ababa",
} as const;

export const pageCtaContent = {
  services: {
    title: "Ready to build your household team?",
    description:
      "Tell us what you need — relocation, housemaids, drivers, or full home management — and we will reply with a practical plan within 24 hours.",
    secondaryLabel: "How It Works",
    secondaryHref: "/how-it-works",
  },
  howItWorks: {
    title: "Let's start with a conversation",
    description:
      "No lengthy forms required. Share a few details about your household and we will take it from there.",
    secondaryLabel: "Why Choose Us",
    secondaryHref: "/why-us",
  },
  whyUs: {
    title: "See the difference a trusted partner makes",
    description:
      "Join hundreds of expat families who rely on Maid My Day for calm, professional household support in Addis Ababa.",
    secondaryLabel: "Read FAQs",
    secondaryHref: "/faq",
  },
  faq: {
    title: "Still have questions?",
    description:
      "Our team is happy to walk through your specific situation — household size, timeline, and budget included.",
    secondaryLabel: "Our Services",
    secondaryHref: "/services",
  },
  contact: {
    title: "Prefer to talk through your needs?",
    description:
      "Call us at +251 911 000 000 or email hello@maidmyday.com. We are here Monday through Saturday.",
    primaryLabel: "Call Us",
    primaryHref: "tel:+251911000000",
    secondaryLabel: "View Services",
    secondaryHref: "/services",
  },
} as const;

export const homeIntro = {
  eyebrow: "Welcome to Addis",
  title: "Your household partner from day one",
  lead: "Maid My Day was built for expat families, diplomats, and international professionals who need more than a contact list — they need a team that understands life in Addis Ababa.",
  paragraphs: [
    "Relocating to Ethiopia's capital means new neighborhoods, new routines, and new people in your home. We help you navigate all of it: finding the right apartment in Bole or Kazanchis, placing a housemaid you trust, hiring a driver who knows school routes, and keeping daily life organized.",
    "Unlike generic staffing agencies, we specialize in international households. That means English-speaking coordination, realistic timelines, introduction meetings before placement, and a replacement guarantee if the fit is not right.",
    "Whether you are planning a move six weeks out or need help this weekend, our coordinators respond within 24 hours with clear next steps — never pressure, never vague promises.",
  ],
} as const;

export const homeNeighborhoodGuide = [
  {
    name: "Bole",
    detail:
      "Popular with corporate expats and embassy families. Close to Bole International Airport, international schools, and restaurants.",
  },
  {
    name: "Kazanchis",
    detail:
      "Central location near UN agencies and diplomatic missions. Ideal for professionals who want a short commute to international organizations.",
  },
  {
    name: "CMC & Megenagna",
    detail:
      "Growing residential areas with newer compounds, popular with NGO staff and families seeking space and security.",
  },
  {
    name: "Old Airport & Sarbet",
    detail:
      "Established neighborhoods with mature villas and strong school access. A favorite for long-term diplomatic postings.",
  },
] as const;

export const homeExpectations = [
  {
    title: "Vetted before introduction",
    detail:
      "Every housemaid, driver, and helper passes interviews, reference checks, and background verification before we suggest a match.",
  },
  {
    title: "You approve every placement",
    detail:
      "Meet candidates in person or by video before anyone starts. Your comfort and consent come first.",
  },
  {
    title: "Support after day one",
    detail:
      "Schedule changes, replacements, and additional services — your coordinator stays reachable as your household evolves.",
  },
  {
    title: "Local knowledge built in",
    detail:
      "Neighborhoods, traffic patterns, lease norms, and trusted vendors — we bring years of Addis-specific experience to every client.",
  },
] as const;

export const homeQuickFacts = [
  { label: "Families supported", value: "500+" },
  { label: "Average response", value: "24 hrs" },
  { label: "Neighborhoods covered", value: "12+" },
  { label: "Client rating", value: "5.0" },
] as const;

export const servicesWhyMatter = [
  {
    title: "Less admin, more living",
    body: "Stop spending weekends coordinating staff, vendors, and errands. We handle the operational side so you can focus on work and family.",
  },
  {
    title: "Continuity you can trust",
    body: "Many clients keep the same driver or housemaid for years. We optimize for long-term fit, not quick turnover.",
  },
  {
    title: "One point of contact",
    body: "Housemaids, drivers, relocation, and home management — coordinate everything through a single Maid My Day account contact.",
  },
] as const;

export const howItWorksFaqPreview = [
  {
    question: "How fast can you place staff?",
    answer:
      "Most inquiries receive a shortlist within 24–48 hours. Urgent placements are prioritized — many families have staff in place within a few days.",
  },
  {
    question: "What if the first match is not right?",
    answer:
      "We offer a replacement guarantee. Tell us what is not working and we will find a better fit at no additional placement fee.",
  },
  {
    question: "Do I need to be in Addis before contacting you?",
    answer:
      "No. Many clients reach out before arrival so housing search and staff placement can begin ahead of their move date.",
  },
] as const;

export const whyUsStory = {
  eyebrow: "Our Approach",
  title: "People first, placements second",
  paragraphs: [
    "We started Maid My Day because settling in Addis Ababa was harder than it needed to be — especially for families juggling work, school, and a new culture at once.",
    "Today we support households across the city's diplomatic, humanitarian, and corporate communities. Our team knows the difference between a quick hire and the right hire — and we will take the time to get it right.",
    "That patience shows in our retention: clients who found staff through us years ago still call when they need backup coverage, a second driver, or help relocating to a new compound.",
  ],
} as const;

export const faqStillWondering = {
  title: "Questions we hear in the first call",
  items: [
    "Can you help if I only need a driver, not a housemaid?",
    "We are arriving next month — when should we start?",
    "Do you work with embassy housing protocols?",
    "Can staff speak English with our children?",
    "What happens if our needs change after placement?",
  ],
} as const;

export const contactPrepTips = [
  {
    title: "Share your timeline",
    detail:
      "Arrival date, lease start, or how soon you need staff — urgency helps us prioritize the right package.",
  },
  {
    title: "Describe your household",
    detail:
      "Children, pets, live-in vs live-out preferences, and languages spoken at home all shape the match.",
  },
  {
    title: "List must-have duties",
    detail:
      "School runs, cooking, cleaning, pet walks — the more specific, the better the shortlist.",
  },
  {
    title: "Mention your neighborhood",
    detail:
      "Bole, Kazanchis, CMC, or elsewhere — location affects who we recommend and how quickly we can place.",
  },
] as const;
