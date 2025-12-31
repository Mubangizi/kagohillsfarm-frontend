import { 
  FiAward, FiUsers, FiZap, FiShield, FiTarget, FiHeart, FiTrendingUp,
  FiSearch, FiPenTool, FiTool, FiSettings, FiRotateCw, FiStar, FiRefreshCw,
  FiCode, FiLayers, FiGlobe, FiMonitor, FiFileText, FiEdit,
  FiServer, FiDatabase, FiCoffee, FiBox, FiHash,
  FiSmartphone, FiTablet, FiCircle, FiSquare, FiGrid,
  FiCloud, FiKey, FiPackage,
  FiHardDrive, FiBookOpen, FiActivity,
  FiCpu, FiBarChart, FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter
} from "react-icons/fi";
import { GiCoffeeBeans, GiFactory, GiBookshelf } from "react-icons/gi";

// ============================================
// CONTACT INFORMATION
// ============================================
export const CURRENT_URL = "https://kagohillfarm.com";
export const EMAIL = "yvonneatwiine@gmail.com";
export const PHONE = "+256774383575";
export const PHONE_DETAIL = "+256 774 383 575";
export const ADDRESS = "Kambuga, Kanungu District, Uganda";
export const LINKEDIN_LINK = "https://www.linkedin.com/company/kagohillfarm/";
export const TWITTER_LINK = "https://twitter.com/kagohillfarm";
export const PROGRAM_DIRECTOR = "Yvonne Atwiine Mwesige";

// ============================================
// TEAM MEMBERS
// ============================================
export const TEAM_MEMBERS = [
  {
    name: "Margaret Mugisha",
    role: "Founder & Inspiration",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&h=900&fit=crop&auto=format&sig=11",
    social: {
      linkedin: LINKEDIN_LINK,
      twitter: TWITTER_LINK,
      email: EMAIL,
    },
  },
  {
    name: "Yvonne Atwiine Mwesige",
    role: "Program Director",
    image: "/team/yvonne.jpg"
  },
  {
    name: "Community Partners",
    role: "30+ Women Farmers",
    image: "/team/community.jpg"
  }
];

// ============================================
// CONTACT METHODS
// ============================================
export const CONTACT_METHODS = [
  {
    icon: FiPhone,
    title: "Call Us",
    description: "Speak directly with our team",
    detail: PHONE_DETAIL,
    action: `tel:${PHONE}`,
    available: "Mon-Fri 9AM-6PM EAT"
  },
  {
    icon: FiMail,
    title: "Email Us",
    description: "Get a detailed response within 24 hours",
    detail: EMAIL,
    action: `mailto:${EMAIL}`,
    available: "We respond within 24 hours"
  },
  {
    icon: FiMapPin,
    title: "Visit Us",
    description: "Meet us at our office",
    detail: ADDRESS,
    action: "#",
    available: "Farm visits welcome"
  }
];

// ============================================
// SOCIAL LINKS
// ============================================
export const SOCIAL_LINKS = [
  {
    icon: FiLinkedin,
    name: "LinkedIn",
    href: LINKEDIN_LINK,
    description: "Connect with us professionally"
  },
  {
    icon: FiTwitter,
    name: "Twitter",
    href: TWITTER_LINK,
    description: "Follow us for updates"
  }
];

// ============================================
// OFFICE HOURS
// ============================================
export const OFFICE_HOURS = [
  { day: "Monday - Saturday", hours: "8:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "By appointment" }
];

// ============================================
// SERVICES
// ============================================
export const SERVICES = [
  {
    title: "Sustainable Coffee Farming",
    description:
      "We cultivate high-altitude Arabica coffee using environmentally friendly practices that enhance soil health, yield, and long-term productivity.",
    icon: GiCoffeeBeans,
    features: [
      "Climate-smart farming techniques",
      "Improved agronomic practices",
      "Farmer training & support",
    ],
  },
  {
    title: "Value Addition & Processing",
    description:
      "We process coffee from cherry to clean bean, ensuring improved quality, storage, grading, and access to premium markets.",
    icon: GiFactory,
    features: [
      "Professional hulling & drying",
      "Quality grading & sorting",
      "Warehouse receipt systems",
    ]
  },
  {
    title: "Training & Community Empowerment",
    description:
      "We equip women and youth with skills in modern agronomy, barista craft, leadership, and financial literacy, positioning them for economic growth.",
    icon: GiBookshelf,
    features: [
      "Women's leadership programs",
      "Barista training & certification",
      "Youth agricultural education",
    ]
  },
];

// ============================================
// WHY CHOOSE US FEATURES
// ============================================
export const WHY_CHOOSE_FEATURES = [
  {
    name: "Premium Ugandan Arabica",
    description: "Grown in rich volcanic soils and processed with precision.",
    icon: FiUsers,
  },
  {
    name: "Ethical & Sustainable Farming",
    description: "Climate-smart, environmentally responsible techniques guide everything we do.",
    icon: FiZap,
  },
  {
    name: "High Social Impact",
    description: "Every purchase supports farmers, women's groups, and youth employment",
    icon: FiShield,
  },
  {
    name: "Full Value Chain Control",
    description: "From seedlings to storage and processing, we ensure consistent quality and fair returns for farmers.",
    icon: FiAward,
  },
];

// ============================================
// PROCESS STEPS
// ============================================
export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Planting & Cultivation",
    description: "We plant high-quality Arabica seedlings and nurture them using climate-smart, sustainable farming practices.",
    details: ["Quality seedling selection", "Soil health management", "Climate-smart techniques", "Organic farming practices"],
    icon: FiSearch
  },
  {
    step: "02", 
    name: "Growing & Maintenance",
    description: "Careful tending of coffee trees with proper pruning, mulching, and pest management for optimal growth.",
    details: ["Regular pruning", "Mulching & composting", "Natural pest control", "Shade tree management"],
    icon: FiPenTool
  },
  {
    step: "03",
    name: "Harvesting",
    description: "Selective hand-picking of ripe coffee cherries at peak maturity to ensure premium quality.",
    details: ["Hand-picking techniques", "Cherry selection", "Multiple harvest passes", "Quality control"],
    icon: FiZap
  },
  {
    step: "04",
    name: "Processing",
    description: "Professional processing including pulping, fermentation, washing, and drying to preserve coffee quality.",
    details: ["Cherry pulping", "Fermentation control", "Clean water washing", "Sun drying on raised beds"],
    icon: FiShield
  },
  {
    step: "05",
    name: "Hulling & Grading", 
    description: "Mechanical hulling removes parchment, followed by careful grading and sorting for market-ready green beans.",
    details: ["Mechanical hulling", "Size grading", "Quality sorting", "Defect removal"],
    icon: FiTool
  },
  {
    step: "06",
    name: "Storage & Marketing",
    description: "Proper storage in warehouses with climate control, leading to better pricing and market access.", 
    details: ["Warehouse storage", "Quality preservation", "Warehouse receipts", "Market linkages"],
    icon: FiSettings
  }
];

// ============================================
// METHODOLOGIES / CORE VALUES
// ============================================
export const CORE_VALUES = [
  { name: "Organic Methods", description: "Chemical-free, environmentally sustainable farming", icon: FiRotateCw },
  { name: "Women-Led", description: "Empowering women in all stages of production", icon: FiSettings },
  { name: "Fair Trade", description: "Equitable pricing and transparent transactions", icon: FiStar },
  { name: "Community-First", description: "Training, employment, and shared prosperity", icon: FiRefreshCw }
];

// ============================================
// COLLABORATORS / PARTNERS
// ============================================
export const COLLABORATORS = [
  {
    title: "Women's Groups",
    description: "Partnering with local women's organizations for economic empowerment",
    partners: [
      { name: "Kinkiizi Coffee SACCO", icon: FiCode },
      { name: "Kakindo Women Group", icon: FiLayers },
      { name: "Nyakagyezi Tweyambe", icon: FiGlobe },
      { name: "Local SACCOs", icon: FiMonitor },
      { name: "Self-Help Groups", icon: FiFileText },
      { name: "Farmer Cooperatives", icon: FiEdit }
    ]
  },
  {
    title: "Training Partners",
    description: "Educational institutions supporting skills development and capacity building",
    partners: [
      { name: "Coffee Farm School", icon: FiServer },
      { name: "NAADS Extension", icon: FiDatabase },
      { name: "Agronomy Experts", icon: FiCoffee },
      { name: "Barista Training", icon: FiBox },
      { name: "Leadership Programs", icon: FiHash },
      { name: "Financial Literacy", icon: FiTrendingUp }
    ]
  },
  {
    title: "Financial Partners",
    description: "Banking and financial institutions enabling farmer access to credit and markets",
    partners: [
      { name: "Centenary Bank", icon: FiSmartphone },
      { name: "PostBank Uganda", icon: FiTablet },
      { name: "Local SACCOs", icon: FiCircle },
      { name: "Microfinance Groups", icon: FiSquare },
      { name: "Warehouse Receipts", icon: FiGrid },
      { name: "Credit Access", icon: FiZap }
    ]
  },
  {
    title: "Community Network",
    description: "Local farmers and community members driving sustainable growth",
    partners: [
      { name: "Banyakinkiizi Assoc.", icon: FiCloud },
      { name: "Smallholder Farmers", icon: FiSettings },
      { name: "Coffee Growers", icon: FiKey },
      { name: "Coffee Processors", icon: FiPackage },
      { name: "Local Businesses", icon: FiRotateCw },
      { name: "Community Leaders", icon: FiTool }
    ]
  },
  {
    title: "Government & NGOs",
    description: "Policy support and development programs for agricultural advancement",
    partners: [
      { name: "District Leaders", icon: FiHardDrive },
      { name: "Agricultural Dept.", icon: FiBookOpen },
      { name: "NGO Partners", icon: FiDatabase },
      { name: "Extension Workers", icon: FiSearch },
      { name: "Policy Makers", icon: FiActivity },
      { name: "Development Orgs", icon: FiZap }
    ]
  },
  {
    title: "Tourism & Markets",
    description: "Building coffee tourism and expanding market access for premium Ugandan coffee",
    partners: [
      { name: "Tourism Boards", icon: FiCpu },
      { name: "Export Markets", icon: FiActivity },
      { name: "Local Retailers", icon: FiCode },
      { name: "Coffee Buyers", icon: FiZap },
      { name: "Tour Operators", icon: FiBarChart },
      { name: "Marketing Partners", icon: FiTrendingUp }
    ]
  }
];

// ============================================
// PROBLEMS WE SOLVE
// ============================================
export const PROBLEMS = [
  {
    icon: FiTarget,
    title: "Low Monetary Returns for Farmers",
    description: "Most smallholder farmers sell coffee in cherry form at giveaway prices due to lack of processing capacity, storage, and market access."
  },
  {
    icon: FiHeart,
    title: "Limited Value Addition",
    description: "Without access to hulling, drying, and grading facilities, farmers miss out on the premium earned from clean, processed coffee."
  },
  {
    icon: FiUsers,
    title: "Economic Marginalization of Women",
    description: "Women provide most of the labor but receive the least financial benefit. Their potential remains untapped."
  },
  {
    icon: FiTrendingUp,
    title: "Absence of a Coffee-Drinking Culture",
    description: "Local consumption is low, meaning farmers rarely experience the end product of their labor, and local market potential remains unexplored."
  },
  {
    icon: FiShield,
    title: "Youth Unemployment",
    description: "Young people lack skills in barista training, coffee processing, and modern agricultural methods."
  },
  {
    icon: FiZap,
    title: "Limited Financial Access",
    description: "Without proper storage, farmers cannot benefit from warehouse receipts or use their produce as collateral for credit."
  }
];

// ============================================
// STATS
// ============================================
export const STATS = [
  { value: "2019", label: "Farm Established" },
  { value: "20+", label: "Acres of Coffee" },
  { value: "30+", label: "Women Employed" },
  { value: "100%", label: "Arabica Quality" }
];


