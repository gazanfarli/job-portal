export enum JOB_TYPE {
  FULL_TIME = "Full-time",
  PART_TIME = "Part-time",
  CONTRACT = "Contract",
  FREELANCE = "Freelance",
  INTERNSHIP = "Internship",
}

export enum EMPLOYMENT_TYPE {
  ON_SITE = "On-site",
  REMOTE = "Remote",
  HYBRID = "Hybrid",
}

export enum EXPERIENCE_LEVEL {
  ENTRY_LEVEL = "Entry Level",
  MID_LEVEL = "Mid Level",
  SENIOR_LEVEL = "Senior Level",
  DIRECTOR = "Director",
}

export interface IJob {
  id: number;
  title: string;
  company: string;
  location: string;
  jobType: JOB_TYPE;
  salary: string;
  category: string;
  postedDate: string;
  description: string;
}

export interface IJobDetails {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  jobType: JOB_TYPE;
  employmentType: EMPLOYMENT_TYPE;
  experienceLevel: EXPERIENCE_LEVEL;
  salary?: string;
  category: string;
  postedDate: Date;
  description: string;
  skills: string[];
  requirements: string[];
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  howToApply: string;
  companyDetails: string;
}
