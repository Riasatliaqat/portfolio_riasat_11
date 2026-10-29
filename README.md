# Riasat Ali – Data Analyst Portfolio

A high-performance personal portfolio website engineered for **Riasat Ali**, a Data Analyst specializing in Python, Power BI, Excel, and SQL. Built with an analytical dashboard aesthetic, dark/light theme support, accessible micro-interactions, and structured project case studies.

## Key Features

- **Analytics Dashboard Aesthetic**: Deep slate background (`#07090e`), Power BI gold/amber accents, subtle grid hairlines, and KPI metrics.
- **Typing Animation Header**: Cycles between *Data Analyst*, *Power BI Developer*, and *SQL & Python Analyst*.
- **Interactive Workflow Strip**: 5-stage interactive pipeline visualizing SQL → Python → Power Query → Power BI → Decision-Ready Insights.
- **Deep-Dive Case Study Modals**: Structured into *Problem/Goal → Data → Approach → Tools → Output*.
- **Live Search & Category Filters**: Search through skill competencies or filter projects by domain.
- **SEO & Social Share Cards**: Includes Open Graph, Twitter cards, meta descriptions, and Schema.org `Person` JSON-LD structured data.
- **Accessible & Responsive**: Keyboard navigability (ESC modal close, skip links, aria-labels), WCAG AA contrast, and zero fake fabricated numbers.

---

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with custom typography and variables
- **Icons**: Lucide React
- **Animations**: CSS keyframes and easing curves
- **Data Architecture**: Centralized data in `/src/data/` for one-file updates

---

## Project Structure

```
├── public/
│   └── cv.pdf                     # Downloadable resume file
├── src/
│   ├── components/
│   │   ├── About.tsx              # Background & 5-step data workflow
│   │   ├── Contact.tsx            # Form validation, email/phone copy & mailto
│   │   ├── DashboardMockup.tsx    # Abstract geometric dashboard previews
│   │   ├── Education.tsx          # Timeline card for Baba Guru Nanak University
│   │   ├── Footer.tsx             # Semantic footer & back-to-top
│   │   ├── Hero.tsx               # Animated headline, CTAs & KPI count-up
│   │   ├── Navbar.tsx             # 3-zone header & active-section tracking
│   │   ├── ProjectModal.tsx       # 5-part architecture breakdown & embed tab
│   │   ├── Projects.tsx           # Featured card + filterable project grid
│   │   ├── Skills.tsx             # Grouped tool chips with search filter
│   │   └── ThemeToggle.tsx        # Dark/Light theme switcher
│   ├── data/
│   │   ├── projects.ts            # All 6 projects, tools & case-study breakdowns
│   │   ├── site.ts                # Bio, stats, contact channels & education
│   │   └── skills.ts              # Categorized skills (Python, Power BI, Excel, SQL)
│   ├── types/
│   │   └── index.ts               # Clean TypeScript definitions
│   ├── App.tsx                    # Main single-page application
│   ├── index.css                  # Tailwind styles and theme CSS variables
│   └── main.tsx                   # React root entry
├── index.html                     # SEO metadata, Open Graph & JSON-LD Person schema
├── metadata.json                  # AI Studio application metadata
└── package.json                   # Dependencies and scripts
```

---

## How to Customize Data

All text, projects, and skills live in dedicated files in `/src/data/`:
1. **Projects**: Edit `/src/data/projects.ts` to update project titles, descriptions, tools, or embed Power BI reports (`embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=...'`).
2. **Skills**: Edit `/src/data/skills.ts` to add or modify technical proficiencies.
3. **Personal Info & Bio**: Edit `/src/data/site.ts` to change email, phone number, LinkedIn, GitHub, or education details.
4. **Resume**: Replace `/public/cv.pdf` with your updated PDF resume.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Vercel Deployment

1. Push your repository to **GitHub** or **GitLab**.
2. Log into your [Vercel Dashboard](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Configure Build Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your portfolio will be live with full global CDN distribution.
