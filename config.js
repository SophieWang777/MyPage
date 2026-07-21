// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Wang Yan",
  initials:   "Sophie Wang",
  role:       "Undergraduate",
  university: "University of Electronic Science and Technology of China",
  email:      "sophieeew777@gmail.com",
  bio: "<p>I am a third-year undergraduate in Communication Engineering. (Glasgow × UESTC) .</p><p>My research interests lie at the intersection of machine learning and acoustic sensing. I'm particularly interested in AI for health, where lightweight sensing and on-device learning can extend care to people and places that clinical infrastructure does not easily reach.</p>",
  photo:      "assets/profile.JPG",   // optional: path to your photo, e.g. "assets/photo.jpg"

/* 
stats: [
    { value: "10+",  label: "Publications" },
    { value: "200+", label: "Citations" },
    { value: "5+",   label: "Projects" },
  ], 
*/

  links: {
    scholar: "https://scholar.google.com/",
    github:  "https://github.com/",
    twitter: "",          // leave empty to hide
    cv:      "assets/cv.pdf",
  },


  /* projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
    },
  ], */

  news: [
    { date: "2026.07", badge: "News",  text: "Selected as GTA (Glasgow Teaching Assistant) for 2026 fall Introductory Programming (UESTC1005)" },
    { date: "2026.04",    badge: "News",  text: "Selected as iSURE Intern, Center for Research Computing, University of Notre Dame" },
    { date: "2025.09", badge: "News",  text: "Selected as GTA (Glasgow Teaching Assistant) for 2025 fall Introductory Programming (UESTC1005)" },
    { date: "2025.06",    badge: "Award", text: "Excellence Award for Short-Term Academic Exchange, Glasgow College, UESTC" },
    { date: "2024.10",    badge: "Award", text: "Outstanding Student Scholarship, Glasgow College, UESTC" },
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
        institution: "CRC, url:"https://crc.nd.edu/", University of Notre Dame",
        link: "https://voice4pimd.org/",
        people: [
          { label: "Faculty Advisor: Prof. Jarek Nabrzyski", url: "https://aegis.nd.edu/our-team/jaroslaw-nabrzyski/" },
          { label: "Mentor: Evan Brinckman", url: "https://data-ai-computing.nd.edu/research/deployment-operations-modeling-and-engineering-dome/dome-people/" },
        ],
      },
  ],
  
  teaching: [
    { period: "2025.09–2026.01", role: "Glasgow Teaching Assistant (GTA), Introductory Programming (UESTC1005)", institution: "Glasgow College, UESTC" },
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
 
  
  
  

  
