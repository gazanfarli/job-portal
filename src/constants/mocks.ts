import { ICategory } from "../models/category";
import {
  EMPLOYMENT_TYPE,
  EXPERIENCE_LEVEL,
  IJob,
  IJobDetails,
  JOB_TYPE,
} from "../models/job";

export const jobDetails: IJobDetails = {
  id: 1,
  title: "Frontend Developer",
  company: "Tech Innovators",
  companyLogo: "/logos/tech-innovators.png",
  location: "San Francisco, CA",
  jobType: JOB_TYPE.FULL_TIME,
  employmentType: EMPLOYMENT_TYPE.HYBRID,
  experienceLevel: EXPERIENCE_LEVEL.MID_LEVEL,
  salary: "$80,000 - $100,000",
  category: "Software Development",
  postedDate: new Date("2024-03-18"),
  description:
    "We are seeking a highly motivated Senior Full Stack Developer to join our innovative tech team at Tech Innovators Inc. In this critical role, you will drive the development of robust, scalable, and secure web applications that power our cutting-edge products and services. This is a unique opportunity to work with modern technologies, collaborate with cross-functional teams, and shape the future of our digital solutions.",
  skills: ["JavaScript", "React", "TypeScript", "CSS", "Tailwind CSS"],
  requirements: [
    "3+ years of experience in frontend development",
    "Proficiency in JavaScript and React",
    "Experience with TypeScript is a plus",
  ],
  responsibilities: [
    "Develop and maintain frontend applications",
    "Collaborate with designers and backend developers",
    "Optimize applications for maximum performance",
  ],
  qualifications: [
    "Bachelor's degree in Computer Science or equivalent experience",
    "Proven experience in frontend technologies",
  ],
  benefits: [
    "Health insurance",
    "Flexible work schedule",
    "Remote work options",
    "Annual company retreats",
  ],
  howToApply: "Send your resume and portfolio to careers@techinnovators.com",
  companyDetails:
    "Tech Innovators is a leading software development firm specializing in AI-driven solutions.",
};

export const jobListings: IJob[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Innovators Inc.",
    location: "New York, NY",
    jobType: JOB_TYPE.FULL_TIME,
    salary: "$90,000 - $110,000",
    postedDate: "2025-03-01",
    category: "Development",
    description:
      "We are seeking a skilled Full Stack Developer with experience in React and Node.js to build and maintain our web applications.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Minds Studio",
    location: "Remote",
    jobType: JOB_TYPE.CONTRACT,
    salary: "$40/hr - $60/hr",
    postedDate: "2025-02-25",
    category: "Design",
    description:
      "Looking for a creative UI/UX Designer to enhance user experience across our digital platforms. Remote work opportunity.",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Data Solutions Corp.",
    location: "San Francisco, CA",
    jobType: JOB_TYPE.FULL_TIME,
    salary: "$100,000 - $130,000",
    postedDate: "2025-03-05",
    category: "Development",
    description:
      "Join our team as a Backend Developer to build scalable and efficient APIs using Node.js and Express.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudWorks",
    location: "Austin, TX",
    jobType: JOB_TYPE.FULL_TIME,
    salary: "$95,000 - $120,000",
    postedDate: "2025-03-03",
    category: "DevOps",
    description:
      "Seeking a DevOps Engineer to manage our CI/CD pipelines, infrastructure, and cloud services.",
  },
];

export const categories: ICategory[] = [
  {
    id: 1,
    name: "Software Development",
    image: "/images/software-development.jpg",
    jobCount: 320,
    description: "Jobs related to web, mobile, and software engineering.",
  },
  {
    id: 2,
    name: "Data Science",
    image: "/images/data-science.jpg",
    jobCount: 150,
    description: "Opportunities in machine learning, AI, and data analytics.",
  },
  {
    id: 3,
    name: "Marketing",
    image: "/images/marketing.jpg",
    jobCount: 210,
    description: "Digital marketing, SEO, branding, and social media jobs.",
  },
  {
    id: 4,
    name: "Design",
    image: "/images/design.jpg",
    jobCount: 95,
    description: "UI/UX, graphic design, and product design jobs.",
  },
  {
    id: 5,
    name: "Finance",
    image: "/images/finance.jpg",
    jobCount: 180,
    description: "Roles in accounting, investment, and financial management.",
  },
  {
    id: 6,
    name: "Customer Support",
    image: "/images/customer-support.jpg",
    jobCount: 120,
    description: "Support representative, helpdesk, and client service jobs.",
  },
  {
    id: 7,
    name: "Human Resources",
    image: "/images/human-resources.jpg",
    jobCount: 75,
    description: "Recruitment, talent management, and HR specialist roles.",
  },
  {
    id: 8,
    name: "Project Management",
    image: "/images/project-management.jpg",
    jobCount: 130,
    description: "Jobs for project managers, product owners, and coordinators.",
  },
];
