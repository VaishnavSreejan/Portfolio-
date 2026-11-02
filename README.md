# Vaishnav Sreejan - Professional Portfolio Website

A premium, modern personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Engineered specifically to showcase Vaishnav's background as a B.Tech Computer Science and Engineering (Data Science) student, technical skills, production ETL and Big Data systems, internships, certifications, professional memberships, and language proficiencies.

---

## 🌟 Key Features

- **Dark Navy & Black Aesthetic**: Tailored with `#070A12` and `#0B0F19` backdrops, glowing blue (`#3b82f6`) and violet (`#8b5cf6`) accents, subtle glassmorphism, and developer grid motifs.
- **Hero Showcase**: Prominent branding, real-time developer snippet, profile photo card, quick contact triggers, and instant resume download.
- **Dedicated Project Architecture Showcase**:
  - **SQL Migrator**: Backend ETL system with interactive pipeline schematic (MySQL to PostgreSQL, CSV/Excel I/O, JWT security, audit reports).
  - **KINO Movie Recommendation System**: Big Data distributed engine with PySpark, Apache HBase, and FastAPI mood search.
  - **Pipeline Hazards Analysis**: 5-stage RISC-V microprocessor architecture simulation using Ripes.
  - Interactive **Project Modals** providing deep technical and architectural breakdowns.
- **Experience Timeline**: Vertical timeline detailing internships at **Dinesh IT Systems** and **Neovent Innovations** with verified skill tags and credential triggers.
- **Modern Certificate Gallery**: High-fidelity interactive plaques for IBM Generative AI, DASHNOVA Power BI, and internship credentials.
- **Professional Memberships & Activities**: Dedicated showcase of student membership in the **Indian Society for Technical Education (ISTE)**.
- **Transparent Skill Disciplines**: Clean categorization across Programming, Backend, Data Science, Databases, Big Data, Web Dev, and Tools without inflated proficiency percentages.
- **Functional Contact Form & Workflow**: Pre-configured with immediate client mailto support and plug-and-play webhook support for Formspree / Web3Forms.
- **Printable / Downloadable Resume Viewer**: Interactive modal with print-to-PDF formatting and direct PDF download.
- **Strict Compliance**: No generic templates, no Lorem Ipsum, no invented certificates or achievements.

---

## 🚀 Quick Start (Running Locally)

### 1. Prerequisites
Ensure **Node.js** (v18 or higher) and **npm** are installed.

```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
This produces an optimized production bundle inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── vite.svg                           # Custom <VS/> brand favicon
│   ├── Vaishnav_Sreejan_Resume.pdf        # Downloadable resume document
│   └── certificates/                      # (Optional) Place scanned certificate images here
├── src/
│   ├── data/
│   │   ├── personalInfo.js                # Bio, titles, contact info, education
│   │   ├── skills.js                      # Categorized technical proficiencies
│   │   ├── projects.js                    # SQL Migrator, KINO, Ripes study
│   │   ├── experience.js                  # Dinesh IT Systems & Neovent internships
│   │   ├── certifications.js              # IBM, DASHNOVA, Dinesh, Neovent credentials
│   │   ├── memberships.js                 # Indian Society for Technical Education (ISTE)
│   │   └── languages.js                   # Malayalam, English, Hindi proficiencies
│   ├── components/
│   │   ├── Navbar.jsx                     # Sticky navigation with mobile drawer
│   │   ├── Hero.jsx                       # Impressive hero section with developer terminal
│   │   ├── About.jsx                      # Bio, education, and career objectives
│   │   ├── Skills.jsx                     # Filterable skills grid
│   │   ├── Projects.jsx                   # Featured project showcase
│   │   ├── ProjectIllustrations.jsx       # Custom SVG vector diagrams for each project
│   │   ├── ProjectModal.jsx               # Deep-dive interactive project drawer
│   │   ├── Experience.jsx                 # Vertical timeline
│   │   ├── Certifications.jsx             # Certificate gallery
│   │   ├── CertificateModal.jsx           # Certificate verification modal
│   │   ├── Memberships.jsx                # ISTE organization card
│   │   ├── Languages.jsx                  # Clean language cards
│   │   ├── Contact.jsx                    # Contact form with email workflow
│   │   ├── ResumeModal.jsx                # Interactive resume viewer & printable sheet
│   │   └── Footer.jsx                     # Footer with links and copyright
│   ├── App.jsx                            # Root application component
│   ├── main.jsx                           # React DOM mount point
│   └── index.css                          # Tailwind CSS and glassmorphism styling
├── index.html                             # SEO metadata & Google Fonts
├── tailwind.config.js                     # Color palettes & animations
├── vite.config.js                         # Vite build configuration
├── vercel.json                            # Vercel deployment configuration
├── netlify.toml                           # Netlify deployment configuration
└── package.json                           # Dependencies & scripts
```

---

## 🛠️ Customization & Updating Content

All content is cleanly decoupled in `src/data/`:

| What to Update | File Path |
| :--- | :--- |
| **Personal Bio, Links, Title** | `src/data/personalInfo.js` |
| **Skills & Tools** | `src/data/skills.js` |
| **Projects & Links** | `src/data/projects.js` |
| **Internships** | `src/data/experience.js` |
| **Certificates** | `src/data/certifications.js` |
| **ISTE Membership** | `src/data/memberships.js` |
| **Languages** | `src/data/languages.js` |

### Replacing Placeholders With Real Images:
1. **Profile Photo**: Place your photo inside `public/profile.jpg` and update `src/components/Hero.jsx` image source.
2. **Scanned Certificates**: Drop your scanned PDF or JPG into `public/certificates/` and update the `image` field in `src/data/certifications.js`.

---

## ✉️ Contact Form Setup

Out of the box, the contact form opens the visitor's default email client pre-populated with your email address (`vaishnavsreejan1@gmail.com`), subject, and body.

To enable direct backend submission without opening an email client:
1. Register a free form endpoint on [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Create a `.env` file in the root folder:
   ```env
   VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
   ```
3. Restart or rebuild the project. Submissions will now be delivered straight to your inbox!

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your code to your GitHub repository: `https://github.com/VaishnavSreejan/portfolio`.
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. (The included `vercel.json` ensures full SPA routing and high-performance asset caching).

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Select your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**. (The included `netlify.toml` handles redirects and headers).

---

## 📄 License
Designed and Developed by **Vaishnav Sreejan**. All rights reserved.

