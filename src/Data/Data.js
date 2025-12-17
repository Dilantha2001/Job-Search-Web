// categories

import Icon1 from ".././assets/images/categories/Icon1.jpg";
import Icon2 from ".././assets/images/categories/Icon2.jpg";
import Icon3 from ".././assets/images/categories/Icon3.svg";
import Icon4 from ".././assets/images/categories/Icon4.jpg";
import Icon5 from ".././assets/images/categories/Icon5.jpg";
import Icon6 from ".././assets/images/categories/Icon6.jpg";
import Icon7 from ".././assets/images/categories/Icon7.jpg";
import Icon8 from ".././assets/images/categories/Icon.jpg";
import Brand1 from "../assets/images/brands/brand1.png";
import Brand2 from "../assets/images/brands/brand2.png";
import Brand3 from "../assets/images/brands/brand3.png";
import Brand4 from "../assets/images/brands/brand4.png";
import Brand5 from "../assets/images/brands/brand5.png";
import CompanyHero from "../assets/images/latest-jobs/company.jpg";

export const categories = [
  {
    id: 1,
    name: "Information Technology",
    jobs: 185,
    icon: Icon1,
  },
  {
    id: 2,
    name: "Finance & Accounting",
    jobs: 120,
    icon: Icon2,
  },
  {
    id: 3,
    name: "Sales & Marketing",
    jobs: 210,
    icon: Icon3,
  },
  {
    id: 4,
    name: "Hospitality & Tourism",
    jobs: 95,
    icon: Icon4,
  },
  {
    id: 5,
    name: "Logistics & Supply Chain",
    jobs: 130,
    icon: Icon5,
  },
  {
    id: 6,
    name: "Engineering & Construction",
    jobs: 150,
    icon: Icon6,
  },
  {
    id: 7,
    name: "Healthcare & Pharma",
    jobs: 80,
    icon: Icon7,
  },
  {
    id: 8,
    name: "Education & Training",
    jobs: 70,
    icon: Icon8,
  },
];

// jobPosts
import JobPost1 from ".././assets/images/featured-jobs/meta.png";
import JobPost2 from ".././assets/images/featured-jobs/netflix.png";
import JobPost3 from ".././assets/images/featured-jobs/microsoft.png";
import JobPost4 from ".././assets/images/featured-jobs/reddit.png";
import JobPost5 from ".././assets/images/featured-jobs/google.png";
import JobPost6 from ".././assets/images/featured-jobs/spotify.png";

export const jobPosts = [
  {
    id: 1,
    title: "Software Engineer",
    application: 42,
    description:
      "Join a national engineering squad building scalable apps for millions of Sri Lankan mobile subscribers.",
    company: "Dialog Axiata",
    role: ["Intermediate", "Full-Time", "Hybrid"],
    salary: 195000,
    date: "3 days ago",
    logo: JobPost1,
  },
  {
    id: 2,
    title: "Product Designer",
    application: 31,
    description:
      "Design human-centered ride and delivery experiences tailored for Colombo and Kandy users.",
    company: "PickMe",
    role: ["Entry Role", "Full-Time", "Colombo"],
    salary: 165000,
    date: "7 days ago",
    logo: JobPost2,
  },
  {
    id: 3,
    title: "Senior Finance Analyst",
    application: 18,
    description:
      "Lead budgeting and investment analysis for a diversified Sri Lankan conglomerate expanding in Asia.",
    company: "LOLC Holdings",
    role: ["Expert", "Full-Time"],
    salary: 210000,
    date: "1 day ago",
    logo: JobPost3,
  },
  {
    id: 4,
    title: "HR Business Partner",
    application: 27,
    description:
      "Support factory clusters across Gampaha and Kandy with people ops, talent programs, and engagement.",
    company: "MAS Holdings",
    role: ["Intermediate", "Hybrid"],
    salary: 180000,
    date: "5 days ago",
    logo: JobPost4,
  },
  {
    id: 5,
    title: "Backend Developer",
    application: 36,
    description:
      "Build APIs and event-driven services for enterprise identity and integration platforms used worldwide.",
    company: "WSO2",
    role: ["Intermediate", "Full-Time", "Remote"],
    salary: 230000,
    date: "10 days ago",
    logo: JobPost5,
  },
  {
    id: 6,
    title: "Social Media Manager",
    application: 52,
    description:
      "Drive digital storytelling for a homegrown FMCG brand across Sinhala, Tamil, and English channels.",
    company: "Hemas Digital",
    role: ["Entry Role", "Part-Time"],
    salary: 120000,
    date: "6 days ago",
    logo: JobPost6,
  },
];

// latest jobs

import companyImage1 from ".././assets/images/latest-jobs/company.jpg";
import companyImage2 from ".././assets/images/latest-jobs/company2.jpg";
import companyImage3 from ".././assets/images/latest-jobs/company3.jpg";
import companyImage4 from ".././assets/images/latest-jobs/company4.jpg";
import companyImage5 from ".././assets/images/latest-jobs/company5.jpg";
import companyImage6 from ".././assets/images/latest-jobs/company6.jpg";
import companyImage7 from ".././assets/images/latest-jobs/company7.jpg";
import companyImage8 from ".././assets/images/latest-jobs/company8.jpg";

export const latestJobLists = [
  {
    id: 1,
    title: "Customer Success Associate",
    logo: companyImage1,
    location: "Colombo 03, Sri Lanka",
    companyName: "Dialog Enterprise",
    JobType: "Hybrid",
    jobFields: [
      { name: "Support", value: true },
      { name: "Operations", value: true },
    ],
  },
  {
    id: 2,
    title: "Brand Designer",
    logo: companyImage2,
    location: "Rajagiriya, Sri Lanka",
    companyName: "Hemas Consumer",
    JobType: "Full-Time",
    jobFields: [
      { name: "Marketing", value: true },
      { name: "Design", value: true },
    ],
  },

  {
    id: 3,
    title: "Frontend Developer",
    logo: companyImage3,
    location: "Kandy, Sri Lanka",
    companyName: "WSO2",
    JobType: "Part-Time",
    jobFields: [
      { name: "Technology", value: true },
      { name: "UI", value: true },
    ],
  },
  {
    id: 4,
    title: "HR Coordinator",
    logo: companyImage4,
    location: "Gampaha, Sri Lanka",
    companyName: "MAS Holdings",
    JobType: "Full-Time",
    jobFields: [
      { name: "HR", value: true },
      { name: "Operations", value: true },
    ],
  },
  {
    id: 5,
    title: "Social Media Assistant",
    logo: companyImage5,
    location: "Matara, Sri Lanka",
    companyName: "Spa Ceylon",
    JobType: "Full-Time",
    jobFields: [
      { name: "Marketing", value: true },
      { name: "Content", value: true },
    ],
  },
  {
    id: 6,
    title: "Brand Designer",
    logo: companyImage6,
    location: "Colombo 07, Sri Lanka",
    companyName: "Cargills Food City",
    JobType: "Full-Time",
    jobFields: [
      { name: "Marketing", value: true },
      { name: "Design", value: true },
    ],
  },

  {
    id: 7,
    title: "Logistics Coordinator",
    logo: companyImage7,
    location: "Kurunegala, Sri Lanka",
    companyName: "Pristine Logistics",
    JobType: "Full-Time",
    jobFields: [
      { name: "Logistics", value: true },
      { name: "Operations", value: true },
    ],
  },
  {
    id: 8,
    title: "Talent Acquisition Lead",
    logo: companyImage8,
    location: "Jaffna, Sri Lanka",
    companyName: "Hela Apparel",
    JobType: "Full-Time",
    jobFields: [
      { name: "HR", value: true },
      { name: "Recruitment", value: true },
    ],
  },
];

// footer

export const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Campanies", url: "/companies" },
      { name: "Pricing", url: "/pricing" },
      { name: "Terms", url: "/terms" },
      { name: "Advice", url: "#advice" },
      { name: "Privacy Policy", url: "#privacy-policy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Docs", url: "/docs" },
      { name: "Guide", url: "/guide" },
      { name: "Updates", url: "/update" },
      { name: "Contact Us", url: "/contact" },
    ],
  },
];

export const findJobListings = [
  {
    id: 101,
    title: "Software Engineer",
    company: "Dialog Axiata",
    location: "Colombo",
    type: "Full-Time",
    salary: 195000,
    experience: "3-5 years",
    remote: "Hybrid",
    tags: ["React", "Node.js", "AWS", "Microservices"],
    description:
      "Build performant web applications that serve millions of local subscribers with strong uptime SLAs.",
    logo: JobPost1,
  },
  {
    id: 102,
    title: "Product Designer",
    company: "PickMe",
    location: "Colombo",
    type: "Full-Time",
    salary: 165000,
    experience: "2-4 years",
    remote: "On-site",
    tags: ["Figma", "Design Systems", "UX Research"],
    description:
      "Own end-to-end design for ride and delivery experiences crafted for Sri Lankan audiences.",
    logo: JobPost2,
  },
  {
    id: 103,
    title: "Data Analyst",
    company: "John Keells Holdings",
    location: "Colombo",
    type: "Full-Time",
    salary: 175000,
    experience: "3-5 years",
    remote: "Hybrid",
    tags: ["SQL", "Power BI", "A/B Testing", "Forecasting"],
    description:
      "Analyze multi-vertical data (retail, leisure, finance) to surface growth insights for leadership.",
    logo: JobPost3,
  },
  {
    id: 104,
    title: "Backend Engineer",
    company: "WSO2",
    location: "Remote - Sri Lanka",
    type: "Full-Time",
    salary: 230000,
    experience: "4-7 years",
    remote: "Remote",
    tags: ["Java", "API Design", "Kubernetes", "gRPC"],
    description:
      "Ship secure, high-scale identity and integration services used by global enterprises.",
    logo: JobPost5,
  },
  {
    id: 105,
    title: "People Operations Lead",
    company: "MAS Holdings",
    location: "Gampaha",
    type: "Full-Time",
    salary: 180000,
    experience: "5-8 years",
    remote: "Hybrid",
    tags: ["HRBP", "Talent", "Engagement", "Policy"],
    description:
      "Drive culture, talent development, and policy rollouts across manufacturing clusters.",
    logo: JobPost4,
  },
  {
    id: 106,
    title: "Social Media Manager",
    company: "Hemas Digital",
    location: "Colombo",
    type: "Part-Time",
    salary: 120000,
    experience: "2-3 years",
    remote: "Hybrid",
    tags: ["Content", "Campaigns", "Analytics", "Paid Media"],
    description:
      "Lead multilingual campaigns (Sinhala, Tamil, English) to grow reach for FMCG brands.",
    logo: JobPost6,
  },
];

export const companiesList = [
  {
    id: 201,
    name: "Dialog Axiata",
    industry: "Telecom & Digital Services",
    hq: "Colombo",
    openings: 18,
    employees: "3,000+",
    website: "https://www.dialog.lk",
    tagline: "Connecting Sri Lankans with reliable digital experiences.",
    logo: Brand1,
    locations: ["Colombo", "Kandy", "Jaffna"],
  },
  {
    id: 202,
    name: "WSO2",
    industry: "Software & Cloud",
    hq: "Colombo",
    openings: 24,
    employees: "1,000+",
    website: "https://wso2.com",
    tagline: "Open-source integration and identity products used worldwide.",
    logo: Brand2,
    locations: ["Colombo", "Remote"],
  },
  {
    id: 203,
    name: "MAS Holdings",
    industry: "Apparel & Manufacturing",
    hq: "Katunayake",
    openings: 32,
    employees: "100,000+",
    website: "https://masholdings.com",
    tagline: "Purpose-led apparel manufacturing across the region.",
    logo: Brand3,
    locations: ["Gampaha", "Galle", "Kilinochchi"],
  },
  {
    id: 204,
    name: "PickMe",
    industry: "Mobility & Delivery",
    hq: "Colombo",
    openings: 12,
    employees: "800+",
    website: "https://pickme.lk",
    tagline: "Sri Lanka’s homegrown ride-hailing and delivery platform.",
    logo: Brand4,
    locations: ["Colombo", "Kandy", "Galle"],
  },
  {
    id: 205,
    name: "Hela Apparel Holdings",
    industry: "Apparel & Supply Chain",
    hq: "Colombo",
    openings: 15,
    employees: "20,000+",
    website: "https://helaapparel.com",
    tagline: "Design-to-delivery apparel partner for global brands.",
    logo: Brand5,
    locations: ["Colombo", "Jaffna", "Badulla"],
  },
  {
    id: 206,
    name: "John Keells Holdings",
    industry: "Conglomerate",
    hq: "Colombo",
    openings: 20,
    employees: "14,000+",
    website: "https://www.keells.com",
    tagline: "Diversified services spanning leisure, retail, and finance.",
    logo: CompanyHero,
    locations: ["Colombo", "Kandy"],
  },
];
