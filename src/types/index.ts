export interface ProjectDetails {
  problemGoal: string;
  data: string;
  approach: string;
  tools: string;
  output: string;
  keyHighlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: 'End-to-End' | 'Business Analytics' | 'Reporting' | 'Automation';
  tools: string[];
  featured?: boolean;
  liveUrl?: string; // '#' placeholder if unknown
  githubUrl?: string; // '#' placeholder if unknown
  embedUrl?: string; // Optional Power BI embed URL or dashboard frame
  details: ProjectDetails;
  mockupType: 'attendance' | 'events' | 'ecommerce' | 'election' | 'social' | 'toolkit';
}

export interface SkillCategory {
  name: string;
  description: string;
  iconName: 'python' | 'barChart' | 'sheet' | 'database' | 'code';
  skills: string[];
}

export interface StatKpi {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface WorkflowStep {
  step: number;
  name: string;
  tool: string;
  action: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  highlights: string[];
}

export interface SiteConfig {
  name: string;
  titles: string[];
  pitch: string;
  aboutSummary: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  stats: StatKpi[];
  workflow: WorkflowStep[];
  education: EducationItem;
}
