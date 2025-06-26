// App.js
import React, { useState, useRef } from "react";
import Resume from "./Components/Resume";
import Sidebar from "./Components/Sidebar";
import html2pdf from "html2pdf.js";

export default function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [font, setFont] = useState("font-serif");
  const [resumeBgColor, setResumeBgColor] = useState("bg-white");

  const [resumeData, setResumeData] = useState({
    name: "Manasa D S",
    contact: "manasads939@gmail.com | GitHub: manasads1105 | LinkedIn: linkedin.com/in/manasads",
    objective: "I am a passionate and dedicated Computer Science student aiming to contribute meaningfully to innovative technology projects. With a strong foundation in programming languages like Python, Java, and JavaScript, I seek to apply my technical and problem-solving skills in a professional environment.",
    skills: [
      "Python", "Java", "C++", "JavaScript",
      "React", "Node.js", "Express.js", "MongoDB",
      "MySQL", "HTML", "CSS", "Tailwind CSS", "Git & GitHub",
      "REST APIs", "Agile Development", "Responsive Design"
    ],
    achievements: [
      "Winner - National Hackathon at PES University 2024",
      "Top 5 Finalist - CodeSprint Challenge 2023",
      "Published blog on React optimization - Dev.to",
      "Best Web App Award - University Tech Fest 2023"
    ],
    interests: [
      "Singing and sketching in free time",
      "Writing technical blogs and tutorials",
      "Participating in hackathons and coding events",
      "Exploring new web technologies and UI trends",
      "Community building and mentoring juniors"
    ],
    strengths: [
      "Strong problem-solving mindset",
      "Excellent communication and leadership skills",
      "Quick adaptability to new tech stacks",
      "Time management and multi-tasking",
      "Team collaboration and Agile participation"
    ],
    education: [
      "B.Tech in Computer Science & Engineering, PES University, Bangalore (2021-2025)",
      "PU in PCMB, Smt. Allum Sumangalamma Memorial PU College, Chikkaballapur (2019-2021)",
      "SSLC, SFS Public School, Chikkaballapur (2018-2019)"
    ],
    projects: [
      "Smart Fire, Smoke & Gas Detector – Built an IoT safety system using Arduino, MQ sensors, and GSM module for alerting.",
      "Portfolio Website – Developed a responsive personal site using React and Tailwind, deployed on GitHub Pages.",
      "Student Management System – Full-stack CRUD app with login/auth features using MERN stack.",
      "Chat App – Real-time messaging app using Socket.IO, React, and Node.js.",
      "Blog Platform – Markdown-based blogging system with SEO, built using Next.js.",
      "E-commerce App – React + Firebase powered shopping site with cart, login, checkout.",
      "Weather Forecast App – Consumes OpenWeather API to show 7-day forecast; responsive UI with Tailwind CSS.",
"E-commerce Admin Dashboard – Built a data-driven dashboard with React, Chart.js, and Firebase Auth for managing products, orders, and user stats.",
"QR Attendance System – Python-Flask app using OpenCV and QR scanning to track classroom attendance with CSV export and facial verification.",
"Task Tracker – Simple productivity tracker using React Hooks and localStorage to persist daily goals, deadlines, and progress tracking."

    ],
    experience: [
      "Frontend Intern at CodSoft (Jan 2024 – Apr 2024): Developed modular React components, collaborated in Agile sprints.",
      "Web Developer Intern at TechVerse (May 2023 – Aug 2023): Created responsive UI, integrated REST APIs with Axios.",
      "Open Source Contributor (GSSoC 2023): Contributed to frontend issues and documentation for open-source web projects.",
      "Freelance Developer (2022 – 2023): Delivered custom client websites using WordPress and React.",
"Technical Content Writer at DevMedium – Published technical blogs on React performance tuning, Git workflows, and frontend architecture.",
"UI/UX Designer (Freelance) – Created user-friendly wireframes and Figma prototypes for startup MVPs; implemented pixel-perfect layouts with Tailwind.",
"Open Source Collaborator – Reviewed pull requests and implemented new features for a React chart library used by 3,000+ developers.",
"Full Stack Developer Intern at InnoVerse – Developed REST APIs with Node.js and Express, and integrated them with React frontend in an event management app."

    ]
  });

  const resumeRef = useRef(null);

  const handleChange = (key, value) => {
    setResumeData((prev) => ({ ...prev, [key]: value }));
  };

  const handleDownload = () => {
    const element = document.getElementById("resume");
    html2pdf()
      .set({
        margin: 0.5,
        filename: "resume.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  const handleSave = () => {
    const element = document.getElementById("resume");
    html2pdf()
      .set({
        margin: 0.5,
        filename: "resume_saved.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save()
      .then(() => {
        alert("Resume saved as PDF (resume_saved.pdf)!");
      });
  };

  const handleAIEnhance = (section, index = null) => {
    const enhancements = {
      education: [
        "Bachelor of Technology in Computer Science and Engineering with a CGPA of 8.7/10, focusing on Data Structures, Algorithms, and Web Technologies.",
        "Completed online courses in Full Stack Development, Cloud Computing, and System Design.",
        "Awarded 'Best Student Developer' for consistent project performance and contribution to university innovation hub."
      ],
      projects: [
        "Smart Fire, Smoke & Gas Detector – Developed an IoT alert system with Arduino, GSM, and buzzer modules to ensure industrial safety.",
        "Portfolio Website – Designed a modern developer portfolio using React, Tailwind, Framer Motion animations, and deployed it on GitHub Pages.",
        "Student Management System – Created a full-stack MERN app with JWT auth, role-based dashboards, and integrated MongoDB Atlas."
        
      ],
      experience: [
        "Frontend Intern at CodSoft – Delivered accessible UI components in React, enhanced code quality by integrating ESLint and Prettier.",
        "TechVerse Internship – Reduced load time by 40% by optimizing API responses and lazy-loading React components.",
        "Freelance Projects – Delivered 5+ client projects using WordPress and React with custom features and SEO optimization."
      ],
      skills: [
        "Languages: Python, Java, JavaScript, C++",
        "Frameworks: React.js, Node.js, Express.js, Next.js",
        "Databases: MongoDB, MySQL, Firebase Firestore"
      ],
      interests: [
        "Building products that solve real-world problems",
        "Participating in developer communities like GSSoC",
        "Mentoring students and writing tech blogs"
      ],
      achievements: [
        "National Hackathon 2024 Winner – Built AI-powered resume scoring app.",
        "CodeSprint 2023 Finalist – Among top 5 out of 12,000+ participants.",
        "Web Development Gold Medalist – PES University Tech Fest"
      ],
      strengths: [
        "Problem-solving and algorithmic design thinking",
        "Leadership during sprint cycles and project demos",
        "Collaboration in Agile teams using Jira and Git",
        "Quick adaptation to new frameworks and workflows"
      ]
    };

    const updated = { ...resumeData };

    if (section === "all") {
      Object.keys(enhancements).forEach((key) => {
        updated[key] = enhancements[key];
      });
    } else if (index !== null && enhancements[section]) {
      const sectionCopy = [...resumeData[section]];
      if (enhancements[section][index]) {
        sectionCopy[index] = enhancements[section][index];
        updated[section] = sectionCopy;
      }
    }

    setResumeData(updated);
    alert(`AI enhanced "${section}" ${index !== null ? `entry #${index + 1}` : ""}!`);
  };

  const handleColorChange = () => {
    const colors = ["bg-white", "bg-gray-500", "bg-blue-900", "bg-yellow-900"];
    const currentIndex = colors.indexOf(resumeBgColor);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    setResumeBgColor(nextColor);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-purple-800 text-white shrink-0">
        <Sidebar
          resumeData={resumeData}
          onFontChange={setFont}
          onEdit={() => setIsEditing(true)}
          onPreview={() => setIsEditing(false)}
          onDownload={handleDownload}
          onSave={handleSave}
          onAIEnhance={handleAIEnhance}
          onColorChange={handleColorChange}
          isEditing={isEditing}
          font={font}
          shareContent={`${resumeData.name}'s Resume: ${resumeData.contact}`}
        />
      </div>

      <main className="flex-grow overflow-y-auto p-4" ref={resumeRef}>
        <Resume
          data={resumeData}
          onChange={handleChange}
          isEditing={isEditing}
          fontClass={font}
          bgColor={resumeBgColor}
        />
      </main>
    </div>
  );
}
