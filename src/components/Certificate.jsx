// src/components/Certificates.jsx - Com ícones variados
import { FaCertificate, FaAward, FaGraduationCap } from "react-icons/fa";

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
      icon: <FaAward className="text-green-400" />,
    },
  ];

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
              <div>
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-sm">{cert.issuer}</p>
              </div>
              <div className="ml-auto text-white/30 text-sm">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
