// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Songlin Yang",
  initials:   "YSL",
  role:       "PhD",
  university: "Nanjing Normal University",
  email:      "slyang@njnu.edu.cn",
  bio:        "Exploring the frontiers of your research area, machine learning, and artificial intelligence. Building intelligent systems that advance scientific discovery.",
  photo:      "",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: "30+",  label: "Publications" },
    { value: "300+", label: "Citations" },
    { value: "2+",   label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/citations?user=mjJLnu0AAAAJ&hl=zh-CN",
    github:  "https://github.com/",
    twitter: "",          // leave empty to hide
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2025,
      title:    "Your Paper Title Here",
      authors:  "Your Name, Co-Author 1, Co-Author 2",
      venue:    "Conference / Journal Name 2025",
      links:    { pdf: "#", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2024,
      title:    "Another Paper Title",
      authors:  "Your Name, Co-Author 1",
      venue:    "Conference / Journal Name 2024",
      links:    { pdf: "#" },
      abstract: "",
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
    },
  ],

  news: [
    { date: "2025.01", badge: "New",   text: "Paper accepted at Conference 2025!" },
    { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "Your University" },
    { period: "2016–2020",    degree: "B.S. in Computer Science",  institution: "Your University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
