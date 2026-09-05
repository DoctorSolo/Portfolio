// src/components/Projects.jsx - Versão com destaque
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/Animations";

function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description:
        "Welcome to my portfolio repository! I've been planning to make this for a long time, and I've finally created my first portfolio. Built with React, TailwindCSS, and JavaScript.",
      tech: ["React", "Node.js", "Vite", "Tailwind CSS", "GraphQL"],
      github: "https://github.com/DoctorSolo/Portfolio",
      demo: "https://miguel-eduardo.vercel.app/",
      featured: true,
    },
    {
      title: "Ezdin",
      description:
        "Frontend for the ezDin application, a gamified personal finance web app. Developed in JavaScript using the React framework and an integrated API, the program features an interactive and intuitive layout designed to make learning dynamic.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Python"],
      github: "https://github.com/DoctorSolo/ezdin-frontend",
      demo: "https://ezdin-frontend.vercel.app/login",
      featured: true,
    },
    {
      title: "Geocode Aplication with Google Cloud",
      description:
        "This project show some descriptions about a geographic coordinates. It's one of my first ones python projects. The base is in tkinter and I used Google Cloud API to map and Gemini.",
      tech: [
        "Python",
        "CustomTkinter",
        "Google Cloud",
        "Google Maps API",
        "Gemini API",
        "Ollama",
      ],
      github: "https://github.com/DoctorSolo/Geocode-Aplication-Google-Cloud",
      demo: "https://github.com/DoctorSolo/Geocode-Aplication-Google-Cloud",
      featured: true,
    },
    {
      title: "Geocode Aplication",
      description:
        "The localization project functions like a geographic search engine. The goal is for the user to search based on coordinates, with the system returning information about the location.",
      tech: ["Python", "CustomTkinter", "Geopy", "Folium"],
      github: "https://github.com/DoctorSolo/Geocode-Aplication",
      demo: "https://github.com/DoctorSolo/Geocode-Aplication",
      featured: false,
    },
    {
      title: "Mission Critical: Securing the Cargo",
      description:
        "Critical Mission was my first game, it's not much but it lives in my heart.",
      tech: ["GML", "GameMaker Studio"],
      github: "https://dr-solo.itch.io/misso-critica-protegendo-a-carga",
      demo: "https://dr-solo.itch.io/misso-critica-protegendo-a-carga",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          <span className="text-blue-400">Featured </span> Projects
        </motion.h2>
        <motion.div
          {...fadeInUp}
          className="w-24 h-1 bg-linear-to-r from-blue-400 to-purple-400 mx-auto mb-12 rounded-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              {...fadeInUp}
              key={index}
              className={`group p-6 bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                project.featured
                  ? "border-blue-400/50 hover:shadow-blue-500/20 bg-blue-500/5"
                  : "border-white/10 hover:border-blue-400/30 hover:shadow-blue-500/10"
              }`}
            >
              {project.featured && (
                <div className="flex items-center gap-1.5 text-yellow-400 text-xs mb-3">
                  <FaStar size={14} />
                  <span>Emphasis</span>
                </div>
              )}

              <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-white/5 rounded-full text-white/60 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-blue-400 transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
