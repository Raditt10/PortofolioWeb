const navlinks = [
  {
    id: 1,
    text: "Home",
    link: "#home"
  },
  { 
    id: 2,
    text: "About Me",
    link: "#about"
  },
  {
    id: 3,
    text: "Tech Stack",
    link: "#techstack"
  },
  {
    id: 4,
    text: "Gallery",
    link: "#gallery"
  },
  {
    id: 5,
    text: "Educations",
    link: "#educations"
  },
  {
    id: 6,
    text: "Featured Projects",
    link: "#projects"
  },
  {
    id: 7,
    text: "GitHub",
    link: "#github"
  },
  {
    id: 8,
    text: "Achievements",
    link: "#achievements"
  },
  {
    id: 9,
    text: "Contact Me",
    link: "#contact"
  },
  
]

const GITHUB_USERNAME = "Raditt10";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

const techstack = [
  {
    id: 1,
    src: "Frame-1.png"
  },

  {
    id: 2,
    src: "Frame-2.png"
  },

  {
    id: 3,
    src: "Frame-3.png"
  },

  {
    id: 4,
    src: "Frame-4.png"
  },

  {
    id: 5,
    src: "Frame-5.png"
  },

  {
    id: 6,
    src: "Frame-6.png"
  },

  {
    id: 7,
    src: "Frame-7.png"
  },

  {
    id: 8,
    src: "Frame-8.png"
  },

  {
    id: 9,
    src: "Frame-9.png"
  },
  

  {
    id: 10,
    src: "Frame-10.png"
  },

  {
    id: 11,
    src: "Frame-11.png"
  },

  {
    id: 12,
    src: "Frame-12.png"
  },

  {
    id: 13,
    src: "Frame-13.png"
  },

  {
    id: 14,
    src: "Frame-14.png"
  },

  {
    id: 15,
    src: "Frame-15.png"
  },

  {
    id: 16,
    src: "Frame-16.png"
  },

  {
    id: 17,
    src: "Frame-17.png"
  },

  {
    id: 18,
    src: "Frame-18.png"
  },

  {
    id: 19,
    src: "Frame.png"
  },

  {
    id: 20,
    src: "Vector.png"
  },
]

const projectsData = [
  {
    id: 1,
    gambar: "kultilas.png",
    judul: "Kultilas",
    parag: "Kultilas is a web-based application designed to facilitate the management of student extracurricular activities in schools.",
    tech: ["Laravel","Alpine.js", "MySQL", "Tailwind", "Vite"],
    linkDemo : "#",
    linkCode : "https://github.com/Raditt10/Kultilas"
  },



  {
    id: 3,
    gambar: "irmaverse.png",
    judul: "IrmaVerse",
    parag: "Official Website of IRMA Extracurricular Activities at SMKN 13 Bandung. ",
    tech: ["Next.js", "Tailwind", "Prisma", "Supabase", "Gemini API", "TypeScript"],
    linkDemo: "https://irmaverse.13syntax.web.id/",
    linkCode: "https://github.com/Raditt10/IRMA-Verse",
    isComingSoon: false
  },
  {
    id: 4,
    gambar: "hoshiday.png",
    judul: "HoshiDay.io",
    parag: "Application designed to track fictional character birthdays, featuring real-time countdowns, a dynamic roster, and QR code sharing capabilities. ",
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    linkDemo: "https://hoshi-day-io.vercel.app/",
    linkCode: "https://github.com/Raditt10/hoshiDay.io",
    isComingSoon: true
  },  
  {
    id: 5,
    gambar: "bendeharaku.png",
    judul: "BendeharaKu",
    parag: "Web application for recording, monitoring, and managing class finances in a transparent, and easy-to-use manner for the treasurer of class XI RPL 1. ",
    tech: ["PHP Native", "MySQL", "CSS"],
    linkDemo: "#",
    linkCode: "https://github.com/Raditt10/bendeharaKu",
  },
  {
    id: 6,
    gambar: "foru.png",
    judul: "For U",
    parag: "Interactive digital gift web app built with React, Vite, TS, Node.js + MongoDB. Features animated UI and real-time Discord notifications. ",
    tech: ["React", "Node.js", "MongoDB", "Express", "Vite", "TypeScript", "Confetti", "Discord API"],
    linkDemo: "#",
    linkCode: "https://github.com/Raditt10/forU",
  },
  {
    id: 7,
    gambar: "coming-soon.png",
    judul: "Jalan Sehat",
    parag: "Coming soon",
    isComingSoon: true
  }
]

const dataCerti = [ 
  {
    id: 1,
    gambar: "sertif_olim_informatika.webp",
    judul : "1st Place - Indonesian Science Olympiad (ISO) Informatika Subject"
  },
  {
    id: 2,
    gambar: "sertif_jhic.webp",
    judul : "Semi finalist - Competition and Bootcamp JHIC"
  },
  {
    id: 3,
    gambar: "sertif_sic.webp",
    judul : "Participation - Bootcamp digital marketing Samsung Indonesia Tech Institute"
  },
  {
    id: 4,
    gambar: "sertif_dicoding.webp",
    judul : "Participation Bootcamp Basic AI - Dicoding"
  },
  {
    id: 5,
    gambar: "sertif-aws1.webp",
    judul : "Official Practice Question Set: AWS Certified Solutions Architect - Associate"
  },
  {
    id: 6,
    gambar: "sertif-aws2.webp",
    judul : "Official Practice Question Set: AWS Certified AI Practitioner"
  },
  {
    id: 7,
    gambar: "sertif-aws3.webp",
    judul : "Fundamentals of Machine Learning and Artificial Intelligence (Bahasa Indonesia)"
  },
  {
    id: 8,
    gambar: "sertif-aws4.webp",
    judul : "Fundamentals of Machine Learning and Artificial Intelligence (Bahasa Indonesia)"
  },
  {
    id: 9,
    gambar: "sertif-aws5.webp",
    judul : "AWS Cloud Practitioner Essentials (Bahasa Indonesia)"
  },
  {
    id: 10,
    gambar: "sertif-aws6.webp",
    judul : "Job Roles in the Cloud (Bahasa Indonesia)"
  },
  {
    id: 11,
    gambar: "sertif-aws7.jpg",
    judul : "AWS Technical Essentials (Instruktur Indonesia)"
  },
  {
    id: 12,
    gambar: "sertif_ed.webp",
    judul : "Awarded as an accomplishment of TOEIC Excellence Program"
  },
  {
    id: 13,
    gambar: "sertif_itsoft_lkskota.webp",
    judul : "Winner in The Competition IT SOFTWARE SOLUTION FOR BUSINESS - LKS Kota Bandung 2026"
  },
  {
    id: 14,
    gambar: "sertif-itsoft_lks_prov.webp",
    judul : "Winner in The Competition IT SOFTWARE SOLUTION FOR BUSINESS - LKS Provinsi Jawa Barat 2026"
  },
  {
    id: 15,
    gambar: "sertif_bootcamp_ai_polri.webp",
    judul : "Participation in Bootcamp Basic AI - POLRES JAWA BARAT"
  },
]
export { navlinks, techstack, projectsData, dataCerti, GITHUB_USERNAME, GITHUB_PROFILE_URL }

