// Portfolio content for Shreya Ashoka.

export const profile = {
  name: "Shreya Ashoka",
  initials: "SA",
  tagline: "AI/ML Engineer • Full-Stack Developer • Published Author (Taylor & Francis, IEEE)",
  eyebrow: "Hii, I'm Shreya Ashoka",
  intro:
    "Building machine learning workflows, APIs, and dashboards with Python, LLMs, and modern web tools.",
  resumeUrl: "/resume.pdf",
  email: "shreyaashoka234@gmail.com",
  phone: "+91 6361157415",
  github: "https://github.com/Shreya-ashoka",
  linkedin: "https://linkedin.com/in/shreya-ashoka-81868a259",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm an AI and Machine Learning engineer with hands-on experience across model development, backend APIs, and product dashboards.",
    "I like working on systems that make model outputs usable: clear data flows, dependable APIs, and interfaces people can actually act on.",
  ],
  currentRole: {
    label: "Current Role",
    title: "AI Engineer at NeuAlto Technologies",
    period: "Jan 2026 - Present",
  },
  education: {
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
    school: "Global Academy of Technology, Bengaluru",
    period: "Dec 2021 - Jul 2025",
    detail: "CGPA: 9.39 / 10",
  },
  highlights: [
    {
      title: "AI/ML Expertise",
      body: "Working with Python, LLMs, deep learning, and NLP to build applied AI systems.",
    },
    {
      title: "Research Publications",
      body: "Presented a peer-reviewed research paper published with Taylor & Francis on AI-driven evaluation systems.",
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  stack: string[];
  github: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "lexassist",
    title: "AI-Driven Legal Assistant (LexAssist)",
    description:
      "Built an AI-powered legal assistant for legal query resolution, document generation, and metadata extraction.",
    tags: ["Legal Query Resolution", "Document Generation", "Metadata Extraction"],
    stack: ["Python", "LangChain", "SQLite", "LLMs", "NLP", "ML"],
    github: "https://github.com/Shreya-ashoka/LexassistAI4JUSTICE",
    image: "/projects/legal-ai.jpg",
  },
  {
    id: "answer-eval",
    title: "Efficient Automated Evaluation of Answer Scripts using LLMs, NLP, and Deep Learning",
    badge: "Published",
    description: "Developed a hybrid AI system for automated evaluation of handwritten answers.",
    tags: ["93.8% Accuracy", "70% Time Reduction", "Published Research"],
    stack: ["OCR", "CNN", "USE", "LLMs", "NLP"],
    github: "https://github.com/shreya-ashoka/answer-evaluation-system",
    image: "/projects/answer-eval.jpg",
  },
  {
    id: "cervical-cancer",
    title: "Cervical Cancer Risk Assessment System",
    description:
      "Developed an ML-based web application to assess cervical cancer risk and support early diagnosis.",
    tags: ["Risk Assessment", "Clinical Interface", "Early Diagnosis Support"],
    stack: ["XGBoost", "Flask", "React.js", "ML"],
    github: "https://github.com/Shreya-ashoka/mini6thsem",
    image: "/projects/healthcare.jpg",
  },
  {
    id: "music-recommendation",
    title: "Sentiment-Based Music Recommendation System",
    description:
      "Built a sentiment-aware recommendation system by analyzing user emotions from audio input.",
    tags: ["Emotion Detection", "Real-time Playlists", "Sentiment Analysis"],
    stack: ["Python", "AssemblyAI", "Spotify API"],
    github: "https://github.com/shreya-ashoka/music-recommendation-system",
    image: "/projects/music-ai.jpg",
  },
];

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  statusLabel?: string;
  bullets?: string[];
  keyContributions?: string[];
  techStack?: {
    group: string;
    skills: string[];
  }[];
  projects?: {
    title: string;
    description: string;
    technologies: string[];
    subprojects?: string[];
  }[];
  coreResponsibilities?: string[];
  metrics?: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "neualto",
    role: "AI Engineer",
    company: "NeuAlto Technologies",
    period: "Jan 2026 - Present",
    current: true,
    statusLabel: "NOW",
    keyContributions: [
      "Built a reusable AI Decision Intelligence Platform supporting customer acquisition, customer retention, and cross-sell recommendation use cases.",
      "Developed Machine Learning pipelines for feature engineering, propensity scoring, CLTV prediction, customer segmentation, decile analysis, and recommendation workflows.",
      "Designed and implemented interactive analytics dashboards using Next.js, React, TypeScript, Tailwind CSS, and Recharts.",
      "Developed FastAPI backend services to integrate machine learning predictions with frontend dashboards through REST APIs.",
      "Built an AI Budget Simulator featuring Budget Optimization and Scenario Simulation workflows.",
      "Developed an ROI Calculator for estimating campaign profitability, expected revenue, and marketing ROI.",
      "Worked with AWS, Amazon S3, Parquet storage, and Google Cloud Platform for cloud storage, deployment, and scalable AI workflows.",
      "Collaborated across the complete full-stack architecture, from Jupyter notebooks and ML pipelines to FastAPI backend APIs, React frontend dashboards, and cloud deployment.",
    ],
    techStack: [
      { group: "Programming", skills: ["Python", "TypeScript"] },
      { group: "Machine Learning", skills: ["Scikit-learn", "Pandas", "NumPy"] },
      { group: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Recharts", "React Query", "Zustand"] },
      { group: "Backend", skills: ["FastAPI", "REST APIs"] },
      { group: "Cloud", skills: ["AWS", "Amazon S3", "Google Cloud Platform", "Docker"] },
      { group: "Tools", skills: ["Git", "Jupyter Notebook"] },
    ],
    projects: [
      {
        title: "AI Decision Intelligence Platform",
        description:
          "Reusable AI platform for decisioning across growth, retention, and recommendation workflows. I built ML pipeline integrations, API-backed dashboard flows, and reusable frontend analytics modules.",
        technologies: ["Python", "FastAPI", "React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Customer Acquisition Engine",
        description:
          "Propensity-driven workflow for identifying high-value acquisition opportunities. I contributed feature engineering, scoring pipelines, decile analysis, and dashboard views for business review.",
        technologies: ["Scikit-learn", "Pandas", "FastAPI", "Recharts"],
      },
      {
        title: "Customer Retention Engine",
        description:
          "Predictive retention system for surfacing churn risk and prioritizing intervention segments. I worked on ML preprocessing, segmentation logic, REST integration, and interactive retention analytics.",
        technologies: ["Python", "NumPy", "FastAPI", "React"],
      },
      {
        title: "Cross-Sell Recommendation Engine",
        description:
          "Recommendation workflow for matching customers with relevant cross-sell offers. I developed recommendation pipeline pieces, model-output integration, and dashboard components for exploration.",
        technologies: ["Scikit-learn", "Pandas", "REST APIs", "Next.js"],
      },
      {
        title: "Multi-Domain Analytics Dashboard",
        description:
          "Unified analytics experience for comparing AI outputs across acquisition, retention, and cross-sell domains. I designed responsive dashboard sections, charts, filters, and state-driven interactions.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Zustand"],
      },
      {
        title: "Budget Simulator",
        description:
          "Simulation tool for planning spend allocation and testing campaign scenarios before execution. I built the Budget Optimization and Scenario Simulation workflows across UI, API, and model integration layers.",
        technologies: ["Next.js", "FastAPI", "Python", "React Query"],
        subprojects: ["Budget Optimization Workflow", "Scenario Simulation Workflow"],
      },
      {
        title: "ROI Calculator",
        description:
          "Campaign profitability calculator for estimating expected revenue, marketing ROI, and return scenarios. I implemented calculation flows, dashboard presentation, and backend endpoints for structured inputs.",
        technologies: ["TypeScript", "React", "FastAPI", "REST APIs"],
      },
    ],
    coreResponsibilities: [
      "Machine Learning Model Development",
      "Feature Engineering",
      "Data Processing Pipelines",
      "FastAPI Backend Development",
      "REST API Integration",
      "Dashboard Development",
      "Cloud Deployment",
      "Model Integration",
      "Performance Optimization",
      "Cross-functional Collaboration",
    ],
    metrics: [
      "AI Decision Platform",
      "Multi-Domain Dashboards",
      "Budget Simulator",
      "ROI Calculator",
      "Full Stack AI Development",
      "AWS & GCP Integration",
      "Machine Learning Pipelines",
      "Production Deployment",
    ],
  },
  {
    id: "praxiti",
    role: "Backend Developer Intern",
    company: "Praxiti Technologies",
    period: "Jul 2025 - Oct 2025",
    bullets: [
      "Developed secure backend modules using FastAPI and Keycloak",
      "Implemented role-based and attribute-based access control",
      "Built RESTful APIs ensuring scalability and authentication",
      "Created AI-powered chatbot using RAG techniques",
    ],
  },
  {
    id: "freshmind",
    role: "Frontend Developer Intern",
    company: "FreshMind Technologies",
    period: "Oct 2024 - Jan 2025",
    bullets: [
      "Built responsive UI components with Next.js, TypeScript, and Tailwind CSS",
      "Designed intuitive frontend layouts and user flows",
      "Implemented Git version control and collaborative development",
      "Tested APIs using Postman for reliability",
    ],
  },
];

export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  { id: "languages", label: "Languages", skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { id: "frontend", label: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"] },
  { id: "backend", label: "Backend", skills: ["FastAPI", "Flask", "Node.js", "REST APIs"] },
  {
    id: "ai-ml",
    label: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "LangChain", "Hugging Face", "OpenAI API", "RAG"],
  },
  { id: "databases", label: "Databases", skills: ["PostgreSQL", "MongoDB", "SQL"] },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Jupyter", "Power BI", "Tableau", "GCP"],
  },
];

export type Publication = {
  id: string;
  title: string;
  venue: string;
  bullets: string[];
  tags: string[];
  doi: { label: string; href: string };
  paper: { label: string; href: string };
};

export const publications: Publication[] = [
  {
    id: "answer-eval-paper",
    title: "Efficient Automated Evaluation of Answer Scripts using LLMs, NLP, and Deep Learning",
    venue: "Published in Taylor & Francis",
    bullets: [
      "Hybrid AI framework using CNN, OCR, USE, cosine similarity, and LLMs.",
      "Achieved 93.8% accuracy and 70% time reduction.",
      "Presented at MAHE and Code-AI 2024 International Conference.",
    ],
    tags: ["93.8% Accuracy", "NLP", "LLMs", "Deep Learning"],
    doi: { label: "DOI: 10.1201/9781003589273", href: "https://doi.org/10.1201/9781003589273" },
    paper: { label: "View Paper", href: "http://tiny.cc/0say001" },
  },
  {
    id: "legal-assistant-paper",
    title: "AI-Driven Legal Assistant and Judicial Support System",
    venue: "Published in IEEE",
    bullets: [
      "AI-powered legal assistant for the Indian legal system.",
      "Implemented RAG, LangChain, NLP, Streamlit, and SQLite.",
      "Enabled multilingual legal query resolution and document automation.",
    ],
    tags: ["AI Legal Assistant", "RAG", "LangChain", "NLP"],
    doi: { label: "DOI: 10.1109/ICACT67549.2025.11351452", href: "https://doi.org/10.1109/ICACT67549.2025.11351452" },
    paper: { label: "View Paper", href: "https://ieeexplore.ieee.org/document/11351452" },
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  tags?: string[];
};

export const certifications: Certification[] = [
  { id: "google-analytics", title: "Google Analytics Certification", issuer: "Skillshop", issued: "Mar 2026", expires: "Mar 2027" },
  { id: "campaign-manager-360", title: "Campaign Manager 360 Certification Exam", issuer: "Skillshop", issued: "Mar 2026", expires: "Mar 2027" },
  { id: "google-ads-beginners", title: "Google Ads for Beginners", issuer: "Coursera", issued: "Feb 2026" },
  { id: "aws-core-services", title: "Introduction to AWS: Core AWS Services", issuer: "Skillsoft", issued: "Feb 2026" },
  { id: "aws-fundamentals", title: "Introduction to AWS: AWS Fundamentals and Navigation", issuer: "Skillsoft", issued: "Jan 2026" },
  { id: "prompt-engineering-101", title: "Learn by Doing – Prompt Engineering 101", issuer: "KodeKloud", issued: "Jan 2026", tags: ["Prompt Engineering"] },
  { id: "aws-basics", title: "Crash Course: AWS Basics", issuer: "KodeKloud", issued: "Jan 2026", tags: ["AWS", "EC2", "S3", "VPC"] },
  { id: "k8s-lab", title: "Udemy Labs – Online Kubernetes Lab for Beginners (Hands-On)", issuer: "KodeKloud", issued: "Jan 2026", tags: ["Kubernetes", "Hands-on Labs", "Docker", "Cluster Management", "Pods", "Namespaces", "Kubectl"] },
  { id: "k8s-crash-course", title: "Crash Course: Kubernetes for Absolute Beginners", issuer: "KodeKloud", issued: "Jan 2026", tags: ["Kubernetes", "Containers", "Docker", "Pods", "Deployments", "Services", "Kubectl"] },
  { id: "deep-learning-tf", title: "Deep Learning using TensorFlow", issuer: "IBM", issued: "Jan 2026", tags: ["CNN", "Deep Learning", "RNN", "TensorFlow", "Autoencoders"] },
  { id: "ml-python-1", title: "Machine Learning with Python – Level 1", issuer: "IBM", issued: "Jan 2026", tags: ["Logistic Regression", "Linear Regression", "Recommender Systems", "Clustering", "Classification"] },
  { id: "python-data-science", title: "Python for Data Science", issuer: "IBM", issued: "Jan 2026", tags: ["Python", "REST APIs", "pandas", "Data Science"] },
  { id: "python-libraries-ds", title: "Python Libraries for Data Science", issuer: "Simplilearn", issued: "Dec 2025", tags: ["TensorFlow", "NumPy", "pandas", "Scikit-Learn", "Matplotlib", "Web Scraping"] },
  { id: "basics-of-python", title: "Basics of Python", issuer: "UniAthena", issued: "Nov 2025", tags: ["Python"] },
  { id: "power-bi-workshop", title: "Power BI Workshop", issuer: "Office Master", issued: "May 2025", tags: ["Power BI"] },
  { id: "ai-tools-chatgpt", title: "AI Tools & ChatGPT Workshop", issuer: "Be10x", issued: "Nov 2024", tags: ["AI Tools", "ChatGPT"] },
  { id: "data-analytics-sim", title: "Data Analytics and Visualization Job Simulation", issuer: "Accenture in India", issued: "Jul 2024", tags: ["Data Visualization", "Data Cleaning", "Storytelling", "Data Modeling"] },
  { id: "excel-data-analysis", title: "Introduction to Data Analysis using Excel", issuer: "Coursera", issued: "Jun 2024", tags: ["Data Analysis", "Pivot Tables", "Microsoft Excel"] },
  { id: "prompt-engineering-everyone", title: "Prompt Engineering for Everyone", issuer: "Cognitive Class", issued: "Feb 2024", tags: ["Prompt Engineering"] },
  { id: "data-mining", title: "Data Mining", issuer: "Great Learning", issued: "Jan 2024", tags: ["Data Mining"] },
  { id: "chatbot-python", title: "Build Your Own Chatbot using Python", issuer: "Great Learning", issued: "Jan 2024", tags: ["Python", "Chatbot Development"] },
  { id: "probability-ds", title: "Probability for Data Science", issuer: "Great Learning", issued: "Dec 2023", tags: ["Probability Theory"] },
  { id: "linkedin-genai", title: "LinkedIn Certified Generative AI", issuer: "LinkedIn", issued: "Nov 2023", tags: ["Generative AI", "AI for Business"] },
  { id: "dbms-intro", title: "Introduction to Database Management System", issuer: "Great Learning", issued: "Aug 2023", tags: ["Database Management"] },
  { id: "intro-ai", title: "Introduction to AI", issuer: "Great Learning", issued: "Jun 2023", tags: ["Artificial Intelligence"] },
];

export const contact = {
  heading: "Get In Touch",
  body: "For roles, collaborations, or research conversations, you can reach me here.",
};
