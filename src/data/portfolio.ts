export const portfolioData = {
  personal: {
    name: "RIZKY CRISTIAN S",
    title: "Informatics Engineering Graduate | Software Engineer | Web Developer",
    location: "BEKASI, JAWA BARAT",
    email: "rizkycristians492@gmail.com",
    bio: "Informatics Engineering graduate from Telkom University with a strong interest in Software Engineering, Web Development, and Information Technology. Skilled in developing web applications using Laravel, PHP, JavaScript, and MySQL, with knowledge of system analysis, database management, REST APIs, and Agile development. Passionate about building efficient digital solutions while continuously learning and adapting to new technologies.",
    image: "/profile.jpg"
  },
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rickychristians",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/ricchrstn",
      icon: "github"
    },
    {
      name: "Email",
      url: "mailto:rizkycristians492@gmail.com",
      icon: "mail"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rickychristians/",
      icon: "instagram"
    },
    {
      name: "Telegram",
      url: "https://t.me/rickychristians",
      icon: "send"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@rickychristians",
      icon: "music"
    }
  ],
  skills: {
    languages: [
      { name: "PHP", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "SQL", level: 85 },
      { name: "TypeScript", level: 75 }
    ],
    frameworks: [
      { name: "Laravel", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "React", level: 80 }
    ],
    database: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 70 }
    ],
    tools: [
      "Git & GitHub",
      "Postman",
      "Visual Studio Code",
      "Laragon",
      "Figma",
      "REST API",
      "Docker",
      "Linux"
    ]
  },
  experience: [
    {
      title: "Software Developer Intern",
      company: "Pengadilan Negeri Sukoharjo Kelas IA",
      period: "July 2024 – September 2024",
      description: "Developed a web-based Secretariat Office Supplies (ATK) Request Management System to streamline administrative processes.",
      responsibilities: [
        "Developed employee modules for submitting and tracking ATK requests.",
        "Built administrator modules for managing inventory and request data.",
        "Designed database structures and implemented CRUD functionalities.",
        "Performed system testing and bug fixing.",
        "Collaborated with supervisors to ensure the system met organizational requirements."
      ],
      technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "Network Engineering Intern",
      company: "PT Telekomunikasi Indonesia Tbk – Witel Jakarta Pusat",
      period: "January 2019 – March 2019",
      description: "Participated in telecommunication infrastructure installation and maintenance activities.",
      responsibilities: [
        "Assisted with Wi-Fi Access Point installation.",
        "Assisted in fiber optic cable installation.",
        "Learned network infrastructure and telecommunication systems.",
        "Applied workplace safety procedures.",
        "Worked collaboratively with field technicians."
      ],
      technologies: ["Network Infrastructure", "Wi-Fi", "Fiber Optic"]
    }
  ],
  projects: [
    {
      title: "HKBP Setia Mekar E-Inventory Management System",
      type: "Final Thesis Project",
      description: "A web-based inventory management system developed for HKBP Setia Mekar Church to improve inventory management efficiency and procurement decision-making.",
      highlights: [
        "Inventory Management",
        "Borrowing Management",
        "Maintenance Management",
        "Procurement Management",
        "Financial Management",
        "Audit Management",
        "Role-Based Authentication",
        "Decision Support System using TOPSIS"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Git"],
      image: "/projects/hkbp-inventory.jpg",
      liveLink: "",
      githubLink: ""
    },
    {
      title: "ATK Request Management System",
      type: "Internship Project",
      description: "Web-based system for managing office supplies requests at Pengadilan Negeri Sukoharjo.",
      highlights: [
        "Employee request submission",
        "Admin inventory management",
        "Request tracking",
        "Database management",
        "CRUD operations"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      image: "/projects/atk-system.jpg",
      liveLink: "",
      githubLink: ""
    }
  ]
};
