import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'university-attendance-analytics',
    title: 'University Analytics & Attendance Dashboard',
    shortDescription:
      'End-to-end analytics solution that loads attendance and student request data from SQL, cleans it with Python, and reports it in Power BI with turnaround tracking.',
    category: 'End-to-End',
    tools: ['Python', 'SQL', 'Power BI'],
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    embedUrl: '', // Optional: Add published Power BI embed URL or dashboard iframe here
    mockupType: 'attendance',
    details: {
      problemGoal:
        'Consolidate university attendance tracking and student request workflows into a single automated reporting system to monitor attendance patterns and track administrative response turnaround times.',
      data:
        'Student attendance records and departmental student request logs stored across relational SQL database tables.',
      approach:
        'Extracted raw records from SQL, cleaned and validated datasets using automated Python scripts, established relational data models in Power BI, and designed request-tracking views showing approval status, resolution bottlenecks, and AI-assisted interpretative summaries.',
      tools: 'Python, SQL, Power BI',
      output:
        'Interactive multi-page Power BI dashboard featuring attendance distributions, request status breakdown, turnaround time metrics, and AI-assisted summary callouts for university administration.',
      keyHighlights: [
        'End-to-end ETL: SQL extraction to Python cleansing to Power BI',
        'Request-tracking view highlighting approval status & turnaround time',
        'AI-assisted summaries providing quick narrative interpretations of trends',
      ],
    },
  },
  {
    id: 'university-event-participation',
    title: 'University Event Participation Dashboard',
    shortDescription:
      'Consolidated event and attendee records with Power Query; dashboards tracking participation, attendance rates, and event trends.',
    category: 'Reporting',
    tools: ['Excel', 'Power Query', 'Power BI'],
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    embedUrl: '',
    mockupType: 'events',
    details: {
      problemGoal:
        'Provide university organizers and administration with clear visibility into campus event attendance rates, student engagement levels, and participation trends across sessions.',
      data:
        'Multiple spreadsheet records of campus event schedules, student registrations, check-in sheets, and department lists.',
      approach:
        'Consolidated disparate event logs and attendee files using Power Query ETL (merging queries, standardizing headers, and cleansing mismatched identifiers), then developed an interactive Power BI report with dynamic slicers.',
      tools: 'Excel, Power Query, Power BI',
      output:
        'Interactive dashboards tracking overall participation rates, attendee turnout versus registrations, and seasonal campus event trends.',
      keyHighlights: [
        'Automated Power Query merge and append pipeline across multiple spreadsheets',
        'Cross-filtering by event category, department, and semester',
        'Visual comparison of registered vs actual attendees',
      ],
    },
  },
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-Commerce Sales Analysis',
    shortDescription:
      'Analysed product, order, and customer data with SQL and pandas to find top products, sales trends, and cart-to-checkout behaviour; Power BI report with DAX KPIs.',
    category: 'Business Analytics',
    tools: ['SQL', 'Python', 'Power BI'],
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    embedUrl: '',
    mockupType: 'ecommerce',
    details: {
      problemGoal:
        'Evaluate transaction and shopping journey patterns to determine top-selling product categories, revenue momentum, and drop-off stages in the cart-to-checkout funnel.',
      data:
        'Multi-table relational retail dataset containing customer accounts, transaction orders, line-item details, and product catalog metadata.',
      approach:
        'Queried and aggregated transaction tables via SQL joins and CTEs; performed exploratory data analysis with pandas to detect cart-to-checkout funnel behaviours; built a dimensional star schema in Power BI with custom DAX measures.',
      tools: 'SQL, Python, Power BI',
      output:
        'Executive Power BI report featuring DAX KPIs for revenue, average order value (AOV), sales trends over time, category performance, and purchase conversion funnel.',
      keyHighlights: [
        'Complex SQL queries utilizing joins, aggregations, and CTEs',
        'DAX measures for Revenue, Average Order Value, and growth indices',
        'Visual cart-to-checkout drop-off funnel analysis',
      ],
    },
  },
  {
    id: 'university-election-analysis',
    title: 'University GR & CR Election Results Analysis',
    shortDescription:
      'Structured election data in SQL with validation checks; results dashboard with turnout and vote-share breakdowns.',
    category: 'Reporting',
    tools: ['SQL', 'Excel', 'Power BI'],
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    embedUrl: '',
    mockupType: 'election',
    details: {
      problemGoal:
        'Structure, audit, and visually communicate General Representative (GR) and Class Representative (CR) student election vote tallies with high integrity and transparency.',
      data:
        'Polling ballot records, registered student voter counts, candidate nomination rosters, and departmental vote counts.',
      approach:
        'Organized and validated raw ballot data in SQL with integrity checks to ensure no duplicate votes or discrepancies; formatted verification summaries in Excel; published an intuitive visual dashboard in Power BI.',
      tools: 'SQL, Excel, Power BI',
      output:
        'Election reporting dashboard presenting overall voter turnout percentages, department-by-department voter distribution, and candidate vote-share comparisons.',
      keyHighlights: [
        'Rigorous SQL data validation checks to ensure tally integrity',
        'Granular vote-share breakdown for GR and CR positions',
        'Turnout proportion visualization by department and cohort',
      ],
    },
  },
  {
    id: 'social-media-engagement',
    title: 'Social Media Engagement Analysis',
    shortDescription:
      'Analysed user activity and engagement data to identify peak usage times, growth trends, and content performance.',
    category: 'Business Analytics',
    tools: ['Python', 'pandas', 'Matplotlib'],
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    embedUrl: '',
    mockupType: 'social',
    details: {
      problemGoal:
        'Analyze user engagement data to uncover peak interaction periods, audience responsiveness patterns, and content format performance.',
      data:
        'Engagement log exports containing timestamps, post categories, impression metrics, like/share ratios, and comment frequencies.',
      approach:
        'Ingested timeseries datasets using Python and pandas; normalized engagement metrics and timestamp intervals; generated visual plots and heatmaps with Matplotlib to isolate high-performing content types and optimal posting hours.',
      tools: 'Python, pandas, Matplotlib',
      output:
        'Comprehensive analytical visual breakdown illustrating hourly/daily engagement curves, format comparisons, and overall growth momentum.',
      keyHighlights: [
        'Timeseries data manipulation and feature engineering in pandas',
        'Matplotlib visualizations identifying peak activity windows',
        'Evaluation of content performance by interaction rate',
      ],
    },
  },
  {
    id: 'excel-automation-toolkit',
    title: 'Excel Automation Toolkit',
    shortDescription:
      '20+ reusable Excel and Python utilities for data cleaning, deduplication, merging, formatting, and automated report generation.',
    category: 'Automation',
    tools: ['Excel', 'Power Query', 'Python'],
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    embedUrl: '',
    mockupType: 'toolkit',
    details: {
      problemGoal:
        'Eliminate repetitive manual spreadsheet maintenance and reduce data preparation overhead through standardized, reusable automation tools.',
      data:
        'Diverse operational spreadsheets, varying CSV export structures, multi-sheet financial workbooks, and raw tabular data extracts.',
      approach:
        'Engineered 20+ standalone utilities combining Python scripts (leveraging openpyxl and pandas) and parameterized Power Query transformation templates to execute batch deduplication, schema alignment, data concatenation, and report generation.',
      tools: 'Excel, Power Query, Python',
      output:
        'Suite of 20+ modular utilities enabling one-click data cleaning, file consolidation, format normalization, and automatic spreadsheet report export.',
      keyHighlights: [
        'Collection of 20+ automated scripts and transformation templates',
        'Reusable Python (openpyxl/pandas) routines for multi-sheet processing',
        'Plug-and-play Power Query M-scripts for standardized deduplication and merging',
      ],
    },
  },
];
