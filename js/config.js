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
  linkedin: "https://www.linkedin.com/in/politeropafadzosango/",
  cv: "assets/Polite-Sango-CV.pdf",

  // ---- Profile photo (put the image in the assets folder) ----
  photo: "assets/profile.png",

  skills: [
    { group: "Programming Languages", level: "Familiar with", icon: "code",
      items: ["Java", "Python", "JavaScript", "PHP", "C++"] },
    { group: "Web Development", level: "Practising", icon: "globe",
      items: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"] },
    { group: "Database Management", level: "Learning and practising", icon: "database",
      items: ["MySQL", "PostgreSQL", "SQLite"] },
    { group: "Tools and Platforms", level: "Learning and practising", icon: "tool",
      items: ["Visual Studio Code", "Git", "GitHub", "GitHub Pages", "Netlify", "Supabase", "XAMPP"] },
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
  attachmentDates: "September 2026 – August 2027 (in progress)",
  studyStartYear: "August 2024",
  expectedGraduation: "End of 2028",
  coursework: [
    "Software Engineering",
    "Database Concepts",
    "Data Structures and Algorithms",
    "Object-Oriented Programming I & II",
    "Operating System Concepts",
    "Computer Architecture",
    "Systems Analysis and Design",
    "Mobile Application Development",
    "Data Communications and Networking",
    "Discrete Mathematics",
    "Applied Statistics",
    "Research Methodology"
  ],
  achievements: [],     // e.g. ["Dean's List 2025"] — the card is hidden while this is empty
  certifications: []    // e.g. [{ name: "...", issuer: "...", year: "2026", link: "" }]
};
