import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Riasat Ali',
  titles: [
    'Data Analyst',
    'Power BI Developer',
    'SQL & Python Analyst',
  ],
  pitch: 'Turns raw data into decision-ready insights, from SQL and Python cleaning to Power BI dashboards.',
  aboutSummary:
    'Computer Science student and data analytics developer with hands-on project experience in data cleaning, modelling, analysis, and dashboard reporting. Comfortable working end to end: pulling data from SQL databases, transforming it with Python and Power Query, modelling it in Power BI, and presenting clear, decision-ready insights, with practical exposure to workflow automation and AI-assisted analysis.',
  email: 'iamriasatliaqat@gmail.com',
  phone: '0343 3470791',
  location: 'Nankana Sahib, Pakistan',
  github: '#',
  linkedin: '#',
  stats: [
    {
      value: 6,
      suffix: '',
      label: 'Projects',
      sublabel: 'End-to-end analytical solutions',
    },
    {
      value: 4,
      suffix: '',
      label: 'Core Tools',
      sublabel: 'Python, Power BI, Excel, SQL',
    },
    {
      value: 20,
      suffix: '+',
      label: 'Automation Utilities',
      sublabel: 'ETL & automated report scripts',
    },
  ],
  workflow: [
    {
      step: 1,
      name: 'SQL Extraction',
      tool: 'SQL',
      action: 'Query & Extract',
      description: 'Ingest raw structured records from databases using joins, CTEs, and aggregations.',
    },
    {
      step: 2,
      name: 'Python Processing',
      tool: 'Python',
      action: 'Clean & Validate',
      description: 'Cleanse missing values, normalize schemas, and perform exploratory data transformations.',
    },
    {
      step: 3,
      name: 'Power Query ETL',
      tool: 'Power Query',
      action: 'Reshape & Merge',
      description: 'Standardize cross-functional tables, handle merges/appends, and configure data pipelines.',
    },
    {
      step: 4,
      name: 'Power BI Modelling',
      tool: 'Power BI',
      action: 'DAX & Star Schema',
      description: 'Build robust relational data models, calculate dynamic DAX measures, and design views.',
    },
    {
      step: 5,
      name: 'Executive Insights',
      tool: 'Insights',
      action: 'Decision-Ready Reports',
      description: 'Deliver interactive dashboards, KPIs, and AI-assisted summaries for decision makers.',
    },
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    field: 'Computer Science',
    institution: 'Baba Guru Nanak University',
    location: 'Nankana Sahib, Pakistan',
    period: '2022 – 2026',
    cgpa: '3.1 / 4.0',
    highlights: [
      'Focus areas: Database Systems, Data Structures & Algorithms, Software Engineering, Python Programming',
      'Hands-on practical development of data transformation pipelines and analytical dashboards',
    ],
  },
};
