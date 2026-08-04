// src/components/Home.jsx
import {
  FaArrowDown,
  FaGithub,
  FaProjectDiagram,
  FaCertificate,
  FaCoffee,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useGitHubStats } from "../hooks/useGitHubStats";

function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Puxa os dados do GitHub
  const { commits, repos, stars, followers, loading, error } =
    useGitHubStats("DoctorSolo");

  // Estado para o número de certificados
  const [certificatesCount, setCertificatesCount] = useState(0);

  // 🔥 Escuta o evento de certificados carregados
  useEffect(() => {
    const handleCertificatesLoaded = (event) => {
      setCertificatesCount(event.detail.count);
    };

    window.addEventListener("certificatesLoaded", handleCertificatesLoaded);

    // Verifica se já existe a seção de certificados
    const checkCertificates = () => {
      const certSection = document.getElementById("certificates");
      if (certSection) {
        const items = certSection.querySelectorAll(".group");
        setCertificatesCount(items.length);
      }
    };

    // Tenta contar imediatamente
    setTimeout(checkCertificates, 100);

    return () => {
      window.removeEventListener(
        "certificatesLoaded",
        handleCertificatesLoaded,
      );
    };
  }, []);

  // Stats dinâmicos
  const stats = [
    {
      icon: <FaGithub className="text-blue-400" />,
      value: loading ? "..." : `${commits}+`,
      label: "Commits",
      description: "No GitHub",
    },
    {
      icon: <FaProjectDiagram className="text-purple-400" />,
      value: loading ? "..." : repos,
      label: "Repositórios",
      description: "Públicos",
    },
    {
      icon: <FaCertificate className="text-green-400" />,
      value: certificatesCount || "...",
      label: "Certificados",
      description: "E contando...",
    },
    {
      icon: <FaCoffee className="text-yellow-400" />,
      value: "∞",
      label: "Cafés",
      description: "O combustível do código",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="text-center text-white w-full max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="font-bold leading-none mb-2">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-[clamp(3rem,15vw,8rem)]">
            Dr. Solo
          </span>
        </h1>

        {/* Linha separadora */}
        <div className="w-32 sm:w-48 md:w-64 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
          <span className="text-blue-400">⚡</span> Full Stack Developer{" "}
          <span className="text-blue-400">⚡</span>
        </p>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
                <div className="text-[10px] text-white/30">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão */}
        <button
          onClick={scrollToAbout}
          className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-white/30 hover:border-blue-400 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group"
        >
          <span className="flex items-center gap-2 text-sm sm:text-base">
            Explore
            <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Home;
