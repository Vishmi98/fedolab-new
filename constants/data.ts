import { BiMobile } from "react-icons/bi";
import { FaBullhorn, FaCloud, FaCode, FaMicrochip } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";

import { ServiceType } from "@/modules/home/home.types";
import { BlogType } from "@/modules/blogs/blogs.types";


export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    // { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
]

export const FEATURED_WORKS = [
    {
        id: 1,
        title: "AI Business Intelligence Platform",
        description:
            "An AI-powered platform that helps businesses analyze data, automate decision-making, and gain actionable insights.",
        image: "/f1.jpg",
        link: "ai-business-intelligence-platform",
    },
    {
        id: 2,
        title: "E-Commerce Mobile Application",
        description:
            "A modern mobile commerce app with secure payments, real-time inventory management, and seamless user experience.",
        image: "/f2.jpg",
        link: "e-commerce-mobile-application",
    },
    {
        id: 3,
        title: "Digital Marketing Automation Suite",
        description:
            "A complete digital marketing solution with campaign automation, analytics, and multi-channel engagement tools.",
        image: "/f3.jpg",
        link: "digital-marketing-automation-suite",
    },
    {
        id: 4,
        title: "AI Customer Support Chatbot",
        description:
            "An intelligent chatbot solution designed to automate customer support and improve response times across platforms.",
        image: "/f4.jpg",
        link: "ai-customer-support-chatbot",
    },
    {
        id: 5,
        title: "Multi-Vendor E-Commerce Platform",
        description:
            "A scalable multi-vendor marketplace with seller dashboards, order tracking, and integrated payment systems.",
        image: "/f5.jpg",
        link: "multi-vendor-e-commerce-platform",
    },
    {
        id: 6,
        title: "Social Media Analytics Dashboard",
        description:
            "A data-driven dashboard that tracks social performance, audience engagement, and campaign effectiveness.",
        image: "/f6.jpg",
        link: "social-media-analytics-dashboard",
    },
];

export const SERVICE_DATA: ServiceType[] = [
    {
        id: 1,
        icon: FaMicrochip,
        title: "AI Solutions",
        paragraph:
            "Unleash the power of artificial intelligence to transform your business operations and gain a competitive edge. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, suscipit.",
    },
    {
        id: 2,
        icon: FaCloud,
        title: "Software Development",
        paragraph:
            "Get custom software solutions tailored to your unique business needs, ensuring efficiency and innovation. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, suscipit.",
    },
    {
        id: 3,
        icon: FaCode,
        title: "AWS Cloud Solutions",
        paragraph:
            "Optimize your operations with tailored AWS solutions that boost scalability, security, and efficiency. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, suscipit.",
    },
    {
        id: 4,
        icon: FaBullhorn,
        title: "Digital Marketing",
        paragraph:
            "Amplify your online presence with our comprehensive digital marketing strategies that drive growth and engagement. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, suscipit.",
    },
    {
        id: 5,
        icon: BiMobile,
        title: "Mobile App Development",
        paragraph:
            "Experience the future of mobile with our user-centric app development for iOS and Android platforms. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, suscipit.",
    },
    {
        id: 6,
        icon: TbSeo,
        title: "SEO Services",
        paragraph:
            "Boost your website's visibility and attract more organic traffic with our expert search engine optimization techniques. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, suscipit.",
    },

];

export const BLOGS_DATA: BlogType[] = [
    {
        id: 1,
        image: "/b1.jpg",
        title: "Future of Web Development",
        description:
            "Explore the latest trends in web development including AI, performance optimization, and modern frameworks.",
        date: "Dec 20, 2025",
        author: "Admin",
        slug: "future-of-web-development",
    },
    {
        id: 2,
        image: "/b2.jpg",
        title: "Why TypeScript Matters",
        description:
            "Learn how TypeScript improves code quality, scalability, and developer experience in large projects.",
        date: "Dec 18, 2025",
        author: "Vishmi",
        slug: "why-typeScript-matters",
    },
    {
        id: 3,
        image: "/b3.jpg",
        title: "Next.js Best Practices",
        description:
            "A practical guide to building fast, SEO-friendly applications using Next.js.",
        date: "Dec 15, 2025",
        author: "Editor",
        slug: "nextjs-best-practices",
    },
];

export const FEATURED_IMAGES = [
    {
        id: 1,
        src: "/f1.jpg",
        alt: "AI Platform Dashboard",
    },
    {
        id: 2,
        src: "/f2.jpg",
        alt: "Mobile App Interface",
    },
    {
        id: 3,
        src: "/f3.jpg",
        alt: "E-commerce Experience",
    },
    {
        id: 4,
        src: "/f4.jpg",
        alt: "SaaS Landing Page",
    },
];

export const CLIENTS = [
  { id: 1, src: "/1.svg", alt: "Client 1" },
  { id: 2, src: "/2.svg", alt: "Client 2" },
  { id: 3, src: "/3.svg", alt: "Client 3" },
  { id: 4, src: "/4.svg", alt: "Client 4" },
  { id: 5, src: "/5.svg", alt: "Client 5" },
  { id: 6, src: "/6.svg", alt: "Client 6" },
  { id: 7, src: "/7.svg", alt: "Client 7" },
  { id: 8, src: "/8.svg", alt: "Client 8" },
];

// data/team.ts
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "ALEX RIVERA",
    role: "Creative Director",
    description: "Pushing the boundaries of digital interaction through code and art.",
    texture: "/t4.jpg",
  },
  {
    id: 2,
    name: "SARAH CHENG",
    role: "Technical Architect",
    description: "Specializing in high-performance WebGL and real-time rendering.",
    texture: "/t5.jpg",
  }
];