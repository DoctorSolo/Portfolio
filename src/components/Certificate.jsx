// src/components/Certificates.jsx
import { FaCertificate, FaAward, FaGraduationCap } from "react-icons/fa";
import { useEffect } from "react";

function Certificates() {
  const certificates = [
    // Most Important
    {
      name: "Python Programming from Zero to Advanced + Real Projects",
      issuer: "Udemy",
      date: "2024",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "XP Inc. - Full Stack Developer",
      issuer: "Dio",
      date: "2024",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "Programming Logic",
      issuer: "SENAI",
      date: "2021",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "Personal Finance",
      issuer: "SENAI",
      date: "2021",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "Entrepreneurship",
      issuer: "SENAI",
      date: "2021",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "Educational Robotics",
      issuer: "Microlins",
      date: "2022",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    // Medium important
    {
      name: "CODECON DIGITAL - 2023",
      issuer: "Codecon",
      date: "2023",
      icon: <FaAward className="text-yellow-400" />,
    },
    {
      name: "DevFest Triângulo",
      issuer: "DevFest",
      date: "2025",
      icon: <FaAward className="text-yellow-400" />,
    },
    {
      name: "The 2025 NASA International Space Apps Challenge",
      issuer: "NASA",
      date: "2025",
      icon: <FaAward className="text-yellow-400" />,
    },
    // Important
    {
      name: "Big Data in Support of Decision Making",
      issuer: "ENAP",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Statistics: Measures of Position and Dispersion",
      issuer: "Aprenda Mais",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Database 1: Fundamentals",
      issuer: "Aprenda Mais",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Systems Automation",
      issuer: "Aprenda Mais",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Creativity - Principles and Techniques",
      issuer: "FM2S",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Building Cloud Infrastructure",
      issuer: "RECODE",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Fundamentals of the General Data Protection Law (LGPD)",
      issuer: "ENAP",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Data Analysis with R Language",
      issuer: "ENAP",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Chemistry",
      issuer: "ENAP",
      date: "2023",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Typing Skills",
      issuer: "Microlins",
      date: "2018",
      icon: <FaCertificate className="text-green-400" />,
    },
    {
      name: "Computer Fundamentals",
      issuer: "Microlins",
      date: "2018",
      icon: <FaCertificate className="text-green-400" />,
    },
  ];

  // 🔥 Dispara evento quando o componente monta para contar certificados
  useEffect(() => {
    // Dispara um evento personalizado para o Home saber que os certificados foram carregados
    window.dispatchEvent(
      new CustomEvent("certificatesLoaded", {
        detail: { count: certificates.length },
      }),
    );
  }, []);

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Certificates & Achievements
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-purple-400 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-2xl">{cert.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm lg:text-base">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-sm">{cert.issuer}</p>
              </div>
              <div className="ml-auto text-white/30 text-sm whitespace-nowrap">
                {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
