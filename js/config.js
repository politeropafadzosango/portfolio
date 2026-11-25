/* =========================================================
   PORTFOLIO DETAILS — edit this file to update the website.
   Leave a value as "" (empty) and its button stays disabled.
   ========================================================= */
window.PORTFOLIO = {
  name: "Polite Ropafadzo Sango",
  shortName: "Polite Sango",
  title: "Computer Science Student | Aspiring Software Engineer | Web Developer | Data Science Enthusiast",
  location: "Zimbabwe",

  // ---- Contact details (fill these in) ----
  email: "ropafadzosangop@gmail.com",          // e.g. "polite@example.com"
  phone: "+263 78 523 4512",          // e.g. "+263 77 000 0000"
  github: "https://github.com/politeropafadzosango",
  linkedin: "",       // e.g. "https://www.linkedin.com/in/username"
  cv: "",             // e.g. "assets/Polite-Sango-CV.pdf"

  // ---- Profile photo (put the image in the assets folder) ----
  photo: "assets/profile.png",

  skills: [
    { group: "Programming Languages", level: "Familiar with", icon: "code",
      items: ["Java", "Python", "JavaScript", "PHP"] },
    { group: "Web Development", level: "Practising", icon: "globe",
      items: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"] },
    { group: "Database Management", level: "Learning and practising", icon: "database",
      items: ["MySQL", "PostgreSQL", "SQLite"] },
    { group: "Tools and Platforms", level: "Learning and practising", icon: "tool",
      items: ["Visual Studio Code", "Git", "GitHub", "XAMPP", "Netlify"] },
    { group: "Technical Interests", level: "Exploring", icon: "spark",
      items: ["API Development", "Software Testing", "Database Design", "UI/UX Design", "Data Analysis"] }
  ],

  projects: [
    {
      name: "BUSE PCM Student Portal",
      description: "A student portal for Adventist students at Bindura University, giving one central place for announcements, activities, events, resources and other organisational services. Currently being tested.",
      tech: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Supabase"],
      status: "In Development",
      live: "https://buse-pcm.netlify.app",
      repo: "https://github.com/politeropafadzosango/buse-pcm-portal-showcase",
      image: "assets/projects/pcm-portal.png"
    },
    {
      name: "Personal Portfolio Website",
      description: "This website — a professional portfolio showing my technical skills, projects, experience and career development.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "In Development",
      live: "https://politeropafadzosango.github.io/portfolio/",
      repo: "https://github.com/politeropafadzosango/portfolio",
      image: "assets/projects/portfolio.png"
    }
  ],

  // ---- Details still to be added (leave "" to show "To be added") ----
  attachmentDates: "",
  studyStartYear: "",
  expectedGraduation: "",
  coursework: [],       // e.g. ["Data Structures", "Database Systems"]
  achievements: [],     // e.g. ["Dean's List 2025"]
  certifications: []    // e.g. [{ name: "...", issuer: "...", year: "2026", link: "" }]
};
