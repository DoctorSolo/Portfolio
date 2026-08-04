// src/components/Certificates.jsx
import { FaCertificate, FaAward, FaGraduationCap } from "react-icons/fa";
import { useEffect } from "react";

function Certificates() {
  const certificates = [
    {
      name: "Programação Python do Zero ao Avançado + Projetos Reais",
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
      name: "Lógica de Programação",
      issuer: "SENAI",
      date: "2021",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "Finanças Pessoais",
      issuer: "SENAI",
      date: "2021",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "Emprendedorismo",
      issuer: "SENAI",
      date: "2021",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "Robótica Educacional",
      issuer: "Microlins",
      date: "2022",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      name: "CODECON DIGITAL - 2023",
      issuer: "Codecon",
      date: "2023",
      icon: <FaAward className="text-green-400" />,
    },
    {
      name: "DevFest Triângulo",
      issuer: "DevFest",
      date: "2025",
      icon: <FaAward className="text-green-400" />,
    },
    {
      name: "The 2025 NASA International Space Apps Challenge",
      issuer: "NASA",
      date: "2025",
      icon: <FaAward className="text-green-400" />,
    },
    {
      name: "Big Data em Apoio à Tomada de Decisão",
      issuer: "ENAP",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Estatística: medidas de posição e dispersão",
      issuer: "Aprenda Mais",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Banco de Dados 1: fundamentos",
      issuer: "Aprenda Mais",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Automação de Sistemas",
      issuer: "Aprenda Mais",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Criatividade - Princípios e Técnicas",
      issuer: "FM2S",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Criando Infra na Nuvem",
      issuer: "RECODE",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Fundamentos da Lei Geral de Proteção de Dados (LGPD)",
      issuer: "ENAP",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Análise de Dados em Linguagem R",
      issuer: "ENAP",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Química",
      issuer: "ENAP",
      date: "2023",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Digitação",
      issuer: "Microlins",
      date: "2018",
      icon: <FaCertificate className="text-yellow-400" />,
    },
    {
      name: "Informática",
      issuer: "Microlins",
      date: "2018",
      icon: <FaCertificate className="text-yellow-400" />,
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
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-12 rounded-full"></div>

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
