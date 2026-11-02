export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages used for backend logic, algorithmic problem solving, and data scripting.",
    icon: "Code2",
    accent: "from-blue-500/20 to-cyan-500/10",
    borderAccent: "group-hover:border-blue-500/50",
    skills: [
      { name: "Python", tag: "Primary Language", note: "Object-oriented, scripting & backend development" },
      { name: "SQL", tag: "Data Querying", note: "Complex queries, joins, indexing & relational schemas" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Building resilient microservices, REST APIs, and structured data access layers.",
    icon: "Server",
    accent: "from-indigo-500/20 to-blue-500/10",
    borderAccent: "group-hover:border-indigo-500/50",
    skills: [
      { name: "Flask", tag: "Microframework", note: "Lightweight API development & backend services" },
      { name: "FastAPI", tag: "Modern Async", note: "High-performance asynchronous endpoints" },
      { name: "REST APIs", tag: "Architecture", note: "RESTful principles, serialization, HTTP methods" },
      { name: "SQLAlchemy", tag: "ORM", note: "Object-relational mapping, database transactions" },
      { name: "JWT Authentication", tag: "Security", note: "Token-based user session & endpoint protection" }
    ]
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    description: "Extracting insights, statistical preprocessing, and dynamic business intelligence dashboards.",
    icon: "BarChart3",
    accent: "from-violet-500/20 to-purple-500/10",
    borderAccent: "group-hover:border-violet-500/50",
    skills: [
      { name: "Pandas", tag: "Data Wrangling", note: "Dataframe manipulation & tabular extraction" },
      { name: "NumPy", tag: "Computation", note: "Vectorized arrays & numerical operations" },
      { name: "Scikit-learn", tag: "Machine Learning", note: "Predictive modeling, classification, regression" },
      { name: "Data Analysis", tag: "Exploration", note: "Statistical evaluation & pattern identification" },
      { name: "Data Preprocessing", tag: "ETL / Cleaning", note: "Missing value imputation, encoding & normalization" },
      { name: "Data Visualization", tag: "Insights", note: "Exploratory plotting and statistical charts" },
      { name: "Power BI", tag: "BI Dashboards", note: "Interactive visual reports & dashboard creation" }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    description: "Designing, migrating, and querying relational and NoSQL storage systems.",
    icon: "Database",
    accent: "from-cyan-500/20 to-teal-500/10",
    borderAccent: "group-hover:border-cyan-500/50",
    skills: [
      { name: "MySQL", tag: "Relational", note: "Relational modeling, procedures & optimization" },
      { name: "PostgreSQL", tag: "Enterprise RDBMS", note: "Advanced schemas, indexing & integrity constraints" },
      { name: "SQLite", tag: "Embedded", note: "Lightweight, file-based relational store" },
      { name: "Apache HBase", tag: "NoSQL Columnar", note: "Distributed, scalable Big Data storage" }
    ]
  },
  {
    id: "big-data",
    title: "Big Data Technologies",
    description: "Distributed computational frameworks for handling high-volume datasets.",
    icon: "Cpu",
    accent: "from-emerald-500/20 to-teal-500/10",
    borderAccent: "group-hover:border-emerald-500/50",
    skills: [
      { name: "Apache PySpark", tag: "Distributed Engine", note: "Distributed dataframe processing & transformation" },
      { name: "Big Data Processing", tag: "Architecture", note: "Batch computation, pipeline scaling & data ingestion" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Frontend foundations for user interfaces and interactive web experiences.",
    icon: "Layout",
    accent: "from-amber-500/20 to-orange-500/10",
    borderAccent: "group-hover:border-amber-500/50",
    skills: [
      { name: "HTML", tag: "Structure", note: "Semantic layout markup & accessibility" },
      { name: "CSS", tag: "Styling", note: "Responsive design, Flexbox, Grid & UI themes" },
      { name: "JavaScript", tag: "Client Scripting", note: "DOM manipulation, asynchronous events & fetch APIs" }
    ]
  },
  {
    id: "dev-tools",
    title: "Developer Tools",
    description: "Workflow tooling, version control, and low-level computer architecture simulators.",
    icon: "Wrench",
    accent: "from-slate-500/20 to-zinc-500/10",
    borderAccent: "group-hover:border-slate-400/50",
    skills: [
      { name: "Git", tag: "Version Control", note: "Branching, committing, staging & version history" },
      { name: "GitHub", tag: "Collaboration", note: "Remote code repositories & code review" },
      { name: "VS Code", tag: "IDE", note: "Integrated environment, debugging & extensions" },
      { name: "Ripes", tag: "Architecture Tool", note: "RISC-V pipeline visualization & assembly analysis" }
    ]
  }
];

