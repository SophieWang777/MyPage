// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Wang Yan",
  initials:   "Sophie Wang",
  role:       "Undergraduate",
  university: "University of Electronic Science and Technology of China",
  email:      "sophieeew777@gmail.com",
  bio: "<p>I am a third-year undergraduate in Communication Engineering. (Glasgow × UESTC) .</p><p>My research interests lie at the intersection of machine learning and acoustic sensing. I'm particularly interested in AI for health, where lightweight sensing and on-device learning can extend care to people and places that clinical infrastructure does not easily reach.</p>",
  photo:      "assets/profile.JPG",

  links: {
    scholar: "https://scholar.google.com/",
    github:  "https://github.com/SophieWang777",
    twitter: "",
    cv:      "assets/cv.pdf",
  },

  news: [
    { date: "2026.07", badge: "News",  text: "Presented my poster at the 2026 Summer Undergraduate Research Symposium, University of Notre Dame", sidelink: { url: "assets/poster_Sophie.pdf", label: "View Poster" } },
    { date: "2026.07", badge: "News",  text: "Selected as GTA (Glasgow Teaching Assistant), 2026 fall Introductory Programming (UESTC1005)" },
    { date: "2026.04", badge: "News",  text: "Selected as iSURE Intern, Center for Research Computing, University of Notre Dame" },
    { date: "2025.09", badge: "News",  text: "Selected as GTA (Glasgow Teaching Assistant), 2025 fall Introductory Programming (UESTC1005)" },
    { date: "2025.06", badge: "Award", text: "Excellence Award for Short-Term Academic Exchange, Glasgow College, UESTC" },
    { date: "2024.10", badge: "Award", text: "Outstanding Student Scholarship, Glasgow College, UESTC" },
  ],

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

  internships: [
      {
        period: "2026.07–present",
        role: "Undergraduate Researcher, Voice4PIMD",
        institution: "<a href=\"https://crc.nd.edu/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"exp-link\">CRC</a>, University of Notre Dame",
        link: "https://voice4pimd.org/",
        sidelink: { url: "https://sophiewang777.github.io/Voice4PIMD/", label: "View Details" },
        people: [
          { label: "Faculty Advisor: Prof. Jarek Nabrzyski", url: "https://aegis.nd.edu/our-team/jaroslaw-nabrzyski/" },
          { label: "Mentor: Evan Brinckman", url: "https://data-ai-computing.nd.edu/research/deployment-operations-modeling-and-engineering-dome/dome-people/" },
        ],
      },
  ],

  teaching: [
    { period: "2025.09–2026.01", role: "UESTC1005 | Introductory Programming", institution: "Glasgow College, UESTC" },
  ],

  education: [
    { period: "2023.09–present", degree: "B.S. in Communication Engineering", institution: "Glasgow College, University of Glasgow | UESTC" },
    { period: "2025.02",         degree: "Study Exchange",                    institution: "Department of Computer Science and Technology, Cambridge University" },
  ],

  services: [
    { period: "2023.09–2025.06", role: "Secretariat Minister",          institution: "Student Association Union, UESTC" },
    { period: "2025.05.20",      role: "Event Service Volunteer",       institution: "2025 Meet Melbourne in China, Chengdu Stop (University of Melbourne)" },
    { period: "2023.09–2024.06", role: "External Relations Department", institution: "Student Union, Glasgow College" },
  ],

};
