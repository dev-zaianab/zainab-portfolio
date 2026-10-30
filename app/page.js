
"use client";

import { useState } from "react";

const skills = [
  { name: "HTML", type: "Frontend" },
  { name: "CSS", type: "Frontend" },
  { name: "React", type: "Library" },
  { name: "Next.js", type: "Framework" },
  { name: "Tailwind CSS", type: "Styling" },
  { name: "Bootstrap", type: "Styling" },
  { name: "Git", type: "Tools" },
  { name: "SQL", type: "Database" },
];

const projects = [
  {
    number: "01",
    name: "LaundryHub",
    category: "MARKETPLACE PLATFORM",
    status: "In Development",
    description:
      "A multi-shop laundry marketplace designed to connect customers with laundry businesses through a unified digital platform.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/laundryhub.png",
    imageAlt: "LaundryHub homepage screenshot",
  },
  {
    number: "02",
    name: "React Task Manager",
    category: "PRODUCTIVITY APP",
    status: "Personal Project",
    description:
      "A task management application where users can add tasks, mark them as complete, and delete tasks.",
    technologies: ["React", "CSS"],
    image: "/projects/task-manager.jpeg",
    imageAlt: "React Task Manager screenshot",
  },
  {
    number: "03",
    name: "Login Page UI",
    category: "USER INTERFACE",
    status: "Frontend Project",
    description:
      "A clean login interface featuring email and password fields, a forgot-password link, and social login options.",
    technologies: ["HTML", "CSS"],
    image: "/projects/login-page.jpeg",
    imageAlt: "Login page screenshot",
  },
  {
  number: "04",
  name: "Personal Portfolio",
  category: "PERSONAL WEBSITE",
  status: "Completed",
  description:
    "A personal portfolio website showcasing my skills, projects, education, and frontend development journey.",
  technologies: ["Next.js", "React", "Tailwind CSS"],
  image: "/projects/portfolio.png",
  imageAlt: "Personal portfolio homepage screenshot",
},
  
];
const ArrowIcon = ({ diagonal = false }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {diagonal ? (
      <path d="M7 17 17 7M7 7h10v10" />
    ) : (
      <path d="M5 12h14m-7-7 7 7-7 7" />
    )}
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="site-header">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
          aria-label="Main navigation"
        >
          <a href="#home" className="brand" onClick={closeMenu}>
            ZI<span>.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-contact hidden md:inline-flex">
            Let's talk <ArrowIcon diagonal />
          </a>

          <button
            type="button"
            className="menu-toggle md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span>{menuOpen ? "✕" : "☰"}</span>
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu md:hidden">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="mobile-link"
                onClick={closeMenu}
              >
                {label}
                <ArrowIcon diagonal />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="hero-section mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28"
      >
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="mb-4 mt-8 text-sm font-medium tracking-widest text-[#a6b4aa]">
            HI, I'M ZAINAB ILYAS
          </p>

          <h1 className="hero-title">
            Building digital
            <br />
            experiences that
            <br />
            <span>feel right.</span>
          </h1>

          <p className="hero-description">
            A BS IT student and frontend developer passionate about creating
            clean, responsive and user-friendly web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              Explore my work <ArrowIcon />
            </a>

            <a href="#contact" className="secondary-button">
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <span>BS IT · 7th Semester</span>
            <span className="meta-separator" />
            <span>Frontend Development</span>
          </div>
        </div>

        {/* Decorative developer card */}
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="developer-card">
            <div className="card-topbar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="text-xs text-[#8e9a91]">developer.js</span>
            </div>

            <div className="code-content">
              <p className="code-muted">{"// A little about me"}</p>
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-green">developer</span> = {"{"}
              </p>
              <p className="code-indent">
                name: <span className="code-yellow">"Zainab Ilyas"</span>,
              </p>
              <p className="code-indent">
                role: <span className="code-yellow">"Frontend Dev"</span>,
              </p>
              <p className="code-indent">
                learning: <span className="code-yellow">"Every day"</span>,
              </p>
              <p className="code-indent">
                building: <span className="code-yellow">"Web experiences"</span>
              </p>
              <p>{"};"}</p>
              <p className="code-cursor">
                <span />
              </p>
            </div>

            <div className="card-footer">
              <span className="status-dot" />
              Always learning, always building
            </div>
          </div>

          <div className="floating-tag tag-top">
            <span className="tag-icon">{"</>"}</span>
            <span>
              <strong>Frontend</strong>
              <small>Developer</small>
            </span>
          </div>

          <div className="floating-tag tag-bottom">
            <span className="tag-sparkle">✳</span>
            <span>
              <strong>Creative thinking</strong>
              <small>Practical learning</small>
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-wrap">
        <div className="section-heading">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>
            Curious by nature.
            <br />
            <span>Developer by choice.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-intro">
            <p>
              I'm Zainab, a seventh-semester Information Technology student
              with a strong interest in frontend development and modern web
              technologies.
            </p>
            <p>
              I enjoy turning ideas into responsive interfaces and improving
              my skills through hands-on projects. I'm currently developing
              LaundryHub and working on a Task Manager application.
            </p>
            <p>
              My goal is to grow as a developer, collaborate with talented
              people, and contribute to meaningful digital products.
            </p>
          </div>

          <div className="about-facts">
            <div className="fact-card">
              <span className="fact-number">07</span>
              <span className="fact-title">Current semester</span>
              <span className="fact-note">BS Information Technology</span>
            </div>

            <div className="fact-card">
              <span className="fact-number">08</span>
              <span className="fact-title">Listed technologies</span>
              <span className="fact-note">Frontend, tools & SQL</span>
            </div>

            <div className="fact-card fact-card-wide">
              <span className="fact-title">Currently focused on</span>
              <span className="fact-note">
                Building projects, learning new concepts and preparing for
                professional opportunities.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-wrap skills-section">
        <div className="section-heading">
          <p className="section-label">02 / MY TOOLKIT</p>
          <h2>
            Skills I bring
            <br />
            <span>to the table.</span>
          </h2>
          <p className="section-subtitle">
            Technologies I'm learning and using to build for the web.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card-top">
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowIcon diagonal />
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.type}</p>
            </div>
          ))}
        </div>

        <div className="learning-note">
          <span className="note-mark">✳</span>
          <p>
            <strong>Also learning:</strong> Backend fundamentals and SQL to
            understand how complete web applications work.
          </p>
        </div>
      </section>

      {/* Projects */}
      {/* Projects */}
<section id="projects" className="section-wrap">
  <div className="projects-heading">
    <div className="section-heading">
      <p className="section-label">03 / SELECTED WORK</p>

      <h2>
        Ideas into
        <br />
        <span>real projects.</span>
      </h2>
    </div>

    <p className="projects-intro">
      A look at the projects I'm building to develop my skills and solve
      practical problems.
    </p>
  </div>

  <div className="projects-grid">
    {projects.map((project) => (
      <article className="project-card" key={project.number}>

        {/* Project Screenshot */}
        <div
          className={`project-art ${project.style || ""}`}
          style={{
            position: "relative",
            height: "280px",
            overflow: "hidden",
            padding: 0,
            background: "#eef2ef",
          }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />

          <div
            className="project-art-top"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1,
            }}
          >
            <span>{project.category}</span>
            <span>{project.number}</span>
          </div>
        </div>

        {/* Project Details */}
        <div className="project-details">
          <div className="project-title-row">
            <h3>{project.name}</h3>
            <span className="project-status">
              {project.status}
            </span>
          </div>

          <p>{project.description}</p>

          <div className="technology-list">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

      </article>
    ))}
  </div>

  <p className="projects-footnote">
    A collection of my frontend development projects and practical work.
  </p>
</section>

               

      {/* Education */}
      <section id="education" className="section-wrap education-section">
        <div className="section-heading">
          <p className="section-label">04 / EDUCATION</p>
          <h2>
            Learning is
            <br />
            <span>part of the process.</span>
          </h2>
        </div>

        <div className="education-card">
          <div className="education-icon">ED.</div>
          <div className="education-copy">
            <p className="section-label">CURRENTLY STUDYING</p>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>7th Semester</p>
            <span>
              Building a foundation in information technology while developing
              practical web development skills.
            </span>
          </div>
          <div className="education-badge">In Progress</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-wrap contact-section">
        <div className="contact-card">
          <p className="section-label">05 / GET IN TOUCH</p>
          <h2>
            Let's build
            <br />
            something <span>meaningful.</span>
          </h2>
          <p className="contact-description">
            I'm interested in internship opportunities, entry-level roles and
            freelance projects. Have an idea or opportunity? Let's connect.
          </p>

          <a
            className="primary-button contact-button"
            href="mailto:zainabmilyas02@gmail.com?subject=Portfolio%20Inquiry"
          >
            Email me <ArrowIcon diagonal />
          </a>

          <p className="contact-email">zainabmilyas02@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <a href="#home" className="brand">
          ZI<span>.</span>
        </a>
        <p>Designed and built by Zainab Ilyas.</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}
