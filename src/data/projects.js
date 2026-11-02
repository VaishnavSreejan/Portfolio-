export const projects = [
  {
    id: "sql-migrator",
    title: "SQL Migrator – Backend ETL System",
    shortTitle: "SQL Migrator",
    category: "Backend Development | Database Engineering",
    type: "Production ETL & Database Migration",
    prominence: "primary", // visual prominence
    association: "Dinesh IT Systems",
    associationType: "Industry / Internship Project",
    summary: "Worked on SQL Migrator, a backend ETL system for SQL-to-SQL database migration. Developed the migration module and contributed to testing, supporting database migration, CSV/Excel import and export, and migration report generation.",
    description: "SQL Migrator is a robust backend ETL (Extract, Transform, Load) platform engineered to streamline seamless database migrations between diverse SQL engines. Vaishnav developed the core migration module and testing suites, ensuring full data type compatibility, relational constraint preservation, and validation across MySQL and PostgreSQL. The system integrates automated file ingestion (CSV/Excel), error auditing, and secure tokenized authentication.",
    keyFeatures: [
      "SQL-to-SQL database migration between MySQL and PostgreSQL",
      "Bulk CSV and Excel data import with schema mapping",
      "Structured CSV and Excel data export utilities",
      "Automated database migration reports and audit logs",
      "Rigorous data validation & schema constraint checks",
      "REST API integration for programmatic migration triggers",
      "JWT-based authentication and secure role-based access control",
      "Comprehensive test suites written with pytest"
    ],
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "Pandas",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "JWT",
      "pytest"
    ],
    architectureHighlights: [
      {
        step: "01. Extraction & Parsing",
        detail: "Extracts table schemas, data types, indexes, and primary/foreign keys directly from source databases or flat CSV/Excel files."
      },
      {
        step: "02. Transformation & Mapping",
        detail: "Normalizes dialetical SQL differences using SQLAlchemy and Pandas vectorization to ensure compatible cross-database typing."
      },
      {
        step: "03. Validation & Loading",
        detail: "Performs checksums, row-count verifications, and batch inserts into the target database within atomic transactions."
      },
      {
        step: "04. Reporting & Audit",
        detail: "Generates exportable migration logs detailing execution duration, affected records, warnings, and error diagnostics."
      }
    ],
    status: "Completed & Verified",
    repoUrl: null, // Only show if user provides a public repo link; otherwise will show clean status badge
    demoUrl: null,
    imageType: "sql-migrator-diagram"
  },
  {
    id: "kino-movie-system",
    title: "KINO – Big Data Movie Recommendation System",
    shortTitle: "KINO",
    category: "Big Data | Data Science | Web Development",
    type: "Distributed Recommendation Engine",
    prominence: "primary", // visual prominence
    association: "St. Thomas College of Engineering & Technology",
    associationType: "Academic Engineering Project",
    summary: "KINO is a Big Data project designed to make movie discovery easier and more enjoyable. The platform features a highlighted movie, movie details, and a mood-based search interface that helps users discover movies based on how they feel.",
    description: "KINO harnesses the computational power of Apache PySpark and distributed columnar storage in Apache HBase to solve the problem of content discovery overload. By mapping emotional states and keywords to cinematic attributes, users can discover targeted movies aligned with their real-time mood. The platform connects a modern web client with high-speed FastAPI endpoints, aggregating enriched metadata from the TMDb API.",
    keyFeatures: [
      "Featured highlighted movie showcase with dynamic trailer/poster views",
      "Innovative mood-based movie discovery engine correlating sentiment with film attributes",
      "Real-time trending movies and box-office highlights",
      "Comprehensive genre browsing and deep catalog search",
      "Rich movie details including cast, director, runtime, ratings, and synopsis",
      "Algorithmic similar movie recommendations using distributed processing",
      "Fast, responsive user-friendly interface optimized across all screen sizes"
    ],
    technologies: [
      "Python",
      "Apache PySpark",
      "Apache HBase",
      "FastAPI",
      "TMDb API",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    architectureHighlights: [
      {
        step: "01. Data Ingestion & Storage",
        detail: "High-volume movie catalogs and user interaction vectors stored efficiently in Apache HBase columnar schemas."
      },
      {
        step: "02. Distributed Processing",
        detail: "Apache PySpark jobs execute distributed similarity calculations, rating normalizations, and clustering."
      },
      {
        step: "03. Mood-Based Search Engine",
        detail: "Maps input feelings (e.g. relaxed, adventurous, contemplative) to genre distributions and narrative tones."
      },
      {
        step: "04. Asynchronous Delivery",
        detail: "FastAPI endpoints serve sub-second queries with cached responses and TMDb live metadata hydration."
      }
    ],
    status: "Completed & Documented",
    repoUrl: null,
    demoUrl: null,
    imageType: "kino-diagram"
  },
  {
    id: "pipeline-hazards-ripes",
    title: "Pipeline Hazards – Processor Simulation Using Ripes",
    shortTitle: "Pipeline Hazards",
    category: "Computer Architecture | Assembly Language",
    type: "Systems & Architecture Research",
    prominence: "secondary", // academic architectural study
    association: "St. Thomas College of Engineering & Technology",
    associationType: "Academic Systems Project",
    summary: "Analyzed pipeline hazards and their impact on processor performance using Ripes. Implemented a five-stage instruction pipeline (IF, ID, EX, MEM, WB) without forwarding to observe instruction flow and hazard behavior. Studied data, structural, and control hazards and explored mitigation techniques such as stalling, forwarding, and pipeline flushing.",
    description: "An in-depth investigation into microprocessor instruction pipelining using the Ripes visual simulation tool. By executing custom RISC-V assembly routines across a 5-stage pipeline without data forwarding, instruction flow bottlenecks, register stalls, and branch penalties were quantitatively evaluated. The project explored hardware mitigation strategies including pipeline interlocks, register forwarding paths, and speculative branch flushing.",
    keyFeatures: [
      "Detailed cycle-by-cycle simulation of a 5-stage RISC-V instruction pipeline",
      "Execution flow observation across IF, ID, EX, MEM, and WB stages",
      "Quantitative study of Read-After-Write (RAW) data hazards",
      "Structural resource conflict evaluation in shared memory and registers",
      "Control hazard analysis during branch and jump condition evaluations",
      "Implementation of pipeline stalling (bubbles) to preserve data integrity",
      "Analysis of data forwarding hardware bypasses and pipeline flushing mechanisms"
    ],
    technologies: [
      "Ripes Simulator",
      "Assembly Language (RISC-V)",
      "Computer Organization & Architecture"
    ],
    keyConcepts: [
      "Five-stage instruction pipeline (IF, ID, EX, MEM, WB)",
      "Instruction execution flow & clock cycle analysis",
      "Data hazards (Read-After-Write dependencies)",
      "Structural hazards (Hardware resource contention)",
      "Control hazards (Branch prediction & penalties)",
      "Stalling and forwarding mitigation",
      "Pipeline flushing on branch mispredictions"
    ],
    status: "Academic Research & Analysis",
    repoUrl: null,
    demoUrl: null,
    imageType: "ripes-diagram"
  }
];

