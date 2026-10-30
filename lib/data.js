// Edit everything about your portfolio here.
// Leave a link as "" to hide it.

export const profile = {
  name: "Hibah Sindi",
  fullName: "Hibah Mohammed Sindi",
  roles: ["AI Engineer", "Data Analyst", "Multi-agent systems builder", "ML Engineer"],
  intro:
    "I build generative AI and multi-agent systems, ML models, and data pipelines that turn noisy social media data into clear decisions.",
  location: "Riyadh, Saudi Arabia",
  email: "hibahsindi@gmail.com",
  phone: "+966 54 394 8873",
  links: {
    linkedin: "https://www.linkedin.com/in/hibah-sindi/",
    github: "https://github.com/hibahdesu",
    kaggle: "https://www.kaggle.com/hibah1996",
  },
  // Social icons, in the order they appear. Remove a line to hide it.
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/hibah-sindi/" },
    { name: "GitHub", href: "https://github.com/hibahdesu" },
    { name: "Kaggle", href: "https://www.kaggle.com/hibah1996" },
    { name: "X", href: "https://x.com/hibah_sindi" },
    { name: "Instagram", href: "https://www.instagram.com/en_la_programacion" },
    { name: "YouTube", href: "https://www.youtube.com/@en_la_programacion" },
    { name: "TikTok", href: "https://www.tiktok.com/@en.la.programacion" },
    { name: "Pinterest", href: "https://www.pinterest.com/hibahsindi/_created/" },
  ],
  cv: "/Hibah_Sindi_CV.pdf",
};

export const about = {
  text: [
    "I'm an AI Engineer and Data Analyst at the Saudi Water Authority, where I design the agents that monitor social media, classify what people report, and email the right summary to the right team.",
    "Before that I co-founded Kaleem.AI and shipped its product end to end with Next.js, FastAPI, and CrewAI. I hold degrees in Computer Science and Chemistry, so I like my experiments reproducible and my pipelines clean.",
    "Outside work: robots, AI, and cats. Lucy, the cat on this page, is all three.",
  ],
  facts: [
    { value: "15+", label: "professional certifications" },
    { value: "13th", label: "of thousands in a Kaggle competition" },
    { value: "3", label: "multi-agent systems running in production" },
  ],
};

export const systems = {
  org: "Saudi Water Authority",
  intro:
    "At the Saudi Water Authority I build the authority's AI monitoring stack. It started with its first machine learning model for classifying citizens' posts (Feb – Jul 2026) and grew into three multi-agent systems that run on their own.",
  list: [
    {
      id: "daily",
      name: "Daily monitoring crew",
      schedule: "Runs every day",
      period: "Aug 2026 – present, co-built with a colleague",
      summary:
        "Automates the full daily monitoring workflow, from raw posts to a cleaned file in the team's inbox. We improve it every day.",
      steps: [
        { title: "Collect", detail: "Pull posts from every major social platform" },
        { title: "Clean", detail: "Normalize text and drop noise" },
        { title: "Classify", detail: "Complaints, cases, spam, sentiment, city, neighborhood, topic" },
        { title: "Deduplicate", detail: "Catch duplicated users and repeated cases" },
        { title: "Build file", detail: "Prepare the final cleaned dataset" },
        { title: "Email", detail: "Send it to the team automatically" },
      ],
    },
    {
      id: "realtime",
      name: "Real-time case monitor",
      schedule: "Every 4 hours",
      period: "Sep 2026 – present",
      summary:
        "Watches a specific issue in a specific city and neighborhood, then briefs the team and stakeholders every four hours.",
      steps: [
        { title: "Collect", detail: "Posts on one issue, by city and neighborhood" },
        { title: "Classify", detail: "Separate real cases from everything else" },
        { title: "Sentiment", detail: "Score how people feel about each case" },
        { title: "Data file", detail: "Package the cases into a file" },
        { title: "Summarize", detail: "Write a short summary of the situation" },
        { title: "Email", detail: "Send data and summary to stakeholders" },
      ],
    },
    {
      id: "topic",
      name: "Topic tracker",
      schedule: "Per event",
      period: "Sep 2026 – present",
      summary:
        "Follows one high-profile topic across platforms, such as the Minister of Environment, Water & Agriculture's interview on the Socrates podcast, and turns the conversation into a report.",
      steps: [
        { title: "Collect", detail: "Every post about the topic, on every platform" },
        { title: "Filter", detail: "Drop spam and off-topic posts" },
        { title: "Comments", detail: "Scrape the comments on the relevant posts" },
        { title: "Sentiment", detail: "Classify sentiment toward the topic" },
        { title: "Refresh", detail: "Re-scrape engagement up to the cutoff" },
        { title: "Merge", detail: "One clean multi-sheet file with all the data" },
        { title: "Report", detail: "Generate the final analytical report" },
      ],
    },
  ],
};

export const experience = [
  {
    role: "Data Monitoring & Analysis Specialist",
    org: "Saudi Water Authority",
    dates: "Dec 2025 – present",
    current: true,
    points: [
      "Built the authority's first ML model for classifying citizens' social media posts.",
      "Build and run three multi-agent systems for daily, real-time, and topic monitoring.",
      "Scrape and analyze data from all major social platforms and report insights to leadership.",
    ],
  },
  {
    role: "Co-Founder & AI Engineer",
    org: "Kaleem.AI",
    dates: "Sep 2024 – Apr 2026",
    points: [
      "Built the product end to end with Next.js, FastAPI, and MongoDB.",
      "Architected the multi-agent CrewAI systems behind the platform's core intelligence.",
    ],
  },
  {
    role: "Software Engineer Leader (volunteer)",
    org: "MASAR",
    dates: "Feb 2025 – May 2026",
    points: ["Led frontend and backend work in Next.js and MongoDB, including APIs and integrations."],
  },
  {
    role: "AI Engineer Intern",
    org: "Launched, Misk Global Trainingship",
    dates: "Oct – Dec 2024",
    points: [
      "Built OpenAI and LangChain agents with RAG over PDFs and web content.",
      "Shipped an AI voice and chat app with ElevenLabs, Next.js, and MongoDB.",
    ],
  },
  {
    role: "ML Engineer & MLOps (training program)",
    org: "Qafza",
    dates: "Aug 2024 – Mar 2025",
    points: ["Deployed, monitored, and scaled ML models; built ETL pipelines for ML workloads."],
  },
  {
    role: "Data Analyst & AI Researcher",
    org: "Excelerate",
    dates: "Jan – Mar 2025",
    points: ["Led a churn analysis team, built Power BI and Looker dashboards, and researched prompt engineering."],
  },
  {
    role: "AI Software Engineer Fellow",
    org: "HeadstarterAI",
    dates: "Jul – Sep 2024",
    points: ["Built and deployed 5 AI projects in 5 weeks, including a RAG customer support agent."],
  },
];

// Shown when the visitor clicks "Show more experience".
export const moreExperience = [
  {
    role: "AI-Driven Content Creator",
    org: "Excelerate × Saint Louis University",
    dates: "Aug – Sep 2025",
    points: [
      "Created and optimized social content with AI tools such as ChatGPT and Canva AI.",
      "Analyzed campaign performance and engagement, and used audience segmentation to improve targeting.",
    ],
  },
  {
    role: "Data Analyst Freelancer",
    org: "Self-employed",
    dates: "Apr – Jun 2025",
    points: ["Delivered data analysis and stakeholder presentations for freelance clients."],
  },
  {
    role: "Data Science & Data Analysis Intern",
    org: "360DigiTMG",
    dates: "Sep – Oct 2024",
    points: [
      "Ran exploratory data analysis on a medical inventory optimization project to find trends that improve efficiency.",
      "Cleaned, prepared, and visualized the data and presented findings to stakeholders.",
    ],
  },
  {
    role: "AI Applications & Market Research Analyst",
    org: "Lun R&D",
    dates: "May – Aug 2024",
    points: [
      "Built a recommendation system with collaborative and content-based filtering.",
      "Analyzed market trends and client pain points to shape tailored AI solutions.",
    ],
  },
  {
    role: "AI & ML Intern",
    org: "SHAI",
    dates: "Mar – Oct 2024",
    points: [
      "Developed ML models with Python, TensorFlow, and Scikit-learn.",
      "Presented model performance with Matplotlib, Seaborn, and Power BI.",
    ],
  },
  {
    role: "Data Analyst",
    org: "Beam Data",
    dates: "Feb – May 2024",
    points: [
      "Scraped product data from a watch retailer's website.",
      "Built interactive Power BI dashboards on pricing patterns and market trends.",
    ],
  },
  {
    role: "Freelance Programmer, Web & UI Designer",
    org: "Self-employed",
    dates: "Nov 2022 – 2025",
    points: [
      "Designed and built websites and custom software solutions from client requirements.",
      "Found and fixed bugs in client projects to improve functionality and performance.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered News Scraper",
    year: "2026",
    description:
      "Upload an Excel file of article links and get back a structured report. The app scrapes each page and uses an LLM to pull out the title, publish date, and main content.",
    tags: ["Generative AI", "LLMs", "Python", "Streamlit", "Pandas"],
    links: [],
  },
  {
    title: "InfinityCastle",
    year: "2025",
    description:
      "A scroll-driven, anime-inspired web experience built on real box-office data, with a custom scraping pipeline and embedded Power BI dashboards.",
    tags: ["Next.js", "GSAP", "Power BI", "Web scraping"],
    links: [
      { label: "Live site", href: "https://infinitycastle.vercel.app/" },
      { label: "Demo video", href: "https://youtu.be/BlMUOaVkj2g" },
    ],
  },
  {
    title: "Kaggle: Elite Training Programs",
    year: "2024",
    description:
      "Placed 13th out of thousands. I led data cleaning, EDA, and feature engineering for models that predict course completion and dropout.",
    tags: ["Machine learning", "Feature engineering"],
    links: [],
  },
  {
    title: "Diamond Price Prediction",
    year: "2024",
    description: "A deployed regression model that forecasts diamond prices, with Power BI visuals of the pricing drivers.",
    tags: ["Regression", "Power BI"],
    links: [],
  },
  {
    title: "Fraud, churn, and customer segments",
    year: "2023 – 2024",
    description:
      "Classification models for fraud and churn, plus RFM segmentation and cohort analysis on retail data.",
    tags: ["Classification", "RFM", "Clustering"],
    links: [],
  },
];

export const skills = [
  { group: "Generative AI", items: ["OpenAI", "Llama", "LLMs", "LangChain", "CrewAI", "Multi-agent systems", "RAG", "Prompt engineering", "LLMOps", "ElevenLabs", "Whisper"] },
  { group: "Machine learning", items: ["Python", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "NLP", "Computer vision", "Feature engineering"] },
  { group: "Data & MLOps", items: ["SQL", "Spark", "Databricks", "Snowflake", "BigQuery", "Docker", "CI/CD", "ETL", "Azure", "AWS", "Web scraping"] },
  { group: "Analytics", items: ["Power BI", "DAX", "Tableau", "Looker", "Excel", "Pandas", "EDA", "Data storytelling"] },
  { group: "Web design", items: ["UI design", "Web design", "Responsive design", "Motion design (GSAP)"] },
  { group: "Frontend", items: ["Next.js", "React", "JavaScript", "HTML", "CSS", "Tailwind"] },
  { group: "Backend", items: ["FastAPI", "REST APIs", "Python", "MongoDB", "Streamlit", "Git"] },
];

export const certifications = {
  featured: [
    { name: "Agentic AI Certified Foundations Associate", issuer: "Oracle", date: "Oct 2026", mark: "OR" },
    { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft", date: "Oct 2025", mark: "AZ" },
    { name: "TensorFlow Developer Certificate", issuer: "TensorFlow", date: "Feb 2024", mark: "TF" },
    { name: "Data Engineer Associate", issuer: "Databricks", date: "Jun 2024", mark: "DB" },
  ],
  more: [
    "LLM Practitioner, SDAIA",
    "Generative AI Foundation Nanodegree, Udacity",
    "AI Programming with Python Nanodegree, Udacity",
    "DeepLearning.AI TensorFlow Developer, Coursera",
    "IBM Data Science Professional Certificate",
    "IBM Applied Data Science Specialization",
    "Google Data Analytics Professional Certificate",
    "Data Analyst in Power BI, DataCamp",
    "LLMOps Concepts, DataCamp",
    "Prompt Engineering with the OpenAI API, DataCamp",
    "Excel for Data Analysis series, DataCamp",
  ],
};

export const education = [
  { title: "B.Sc. Computer Science", place: "", dates: "2021 – 2024", note: "GPA 3.85 / 4.0" },
  { title: "B.Sc. Chemistry", place: "Taif University", dates: "2014 – 2018", note: "GPA 3.79 / 4.0" },
  { title: "Women in STEAM, AI Track", place: "KAUST", dates: "2025 – 2026" },
  { title: "Data Engineering Bootcamp", place: "Saudi Digital Academy × WeCloudData", dates: "2024" },
  { title: "Machine Learning Bootcamp", place: "Saudi Digital Academy × Clarusway", dates: "2023" },
  { title: "Elevate Program, AI & BI", place: "Google Cloud & SDAIA", dates: "2023" },
];
