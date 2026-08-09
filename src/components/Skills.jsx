// src/components/Skills.jsx
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaItchIo,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiFlask,
  SiRedis,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiGraphql,
  SiFirebase,
  SiDotnet,
  SiCachyos,
  SiBlender,
  SiGodotengine,
  SiArchlinux,
  SiDebian,
  SiC,
  SiCplusplus,
  SiRust,
  SiMariadb,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { VscAzure, VscVscodeInsiders } from "react-icons/vsc";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

function Skills() {
  const skills = [
    // ------------------ TOOLS -----------------------------//
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    { name: "VS Code", icon: <VscVscodeInsiders />, color: "text-blue-400" },

    // ------------------ FRAMEWORKS ------------------------//
    { name: ".NET", icon: <SiDotnet />, color: "text-green-500" },
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },

    // ------------------ LANGUAGE --------------------------//
    { name: "C#", icon: <TbBrandCSharp />, color: "text-blue-400" },
    { name: "Python", icon: <FaPython />, color: "text-blue-400" },
    { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "C", icon: <SiC />, color: "text-blue-500" },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-500" },
    { name: "Rust", icon: <SiRust />, color: "text-black" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },

    // ------------------ DATA BASE -------------------------//
    { name: "MySQL", icon: <GrMysql />, color: "text-blue-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
    { name: "Maria DB", icon: <SiMariadb />, color: "text-amber-800" },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },

    // ------------------ CLOUD -----------------------------//
    { name: "Azure", icon: <VscAzure />, color: "text-blue-400" },
    { name: "AWS", icon: <FaAws />, color: "text-orange-400" },

    // ------------------ OTHERS ----------------------------//
    { name: "CachyOS", icon: <SiCachyos />, color: "text-blue-400" },
    { name: "Arch Linux", icon: <SiArchlinux />, color: "text-blue-400" },
    { name: "Debian", icon: <SiDebian />, color: "text-red-500" },
    { name: "Linux", icon: <FaLinux />, color: "text-yellow-300" },
    { name: "Blender", icon: <SiBlender />, color: "text-orange-400" },
    { name: "Godot Engine", icon: <SiGodotengine />, color: "text-blue-600" },
    { name: "Itch.io", icon: <FaItchIo />, color: "text-red-400" },
    {
      name: "Excel",
      icon: <PiMicrosoftExcelLogoFill />,
      color: "text-green-800",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-purple-400 mx-auto mb-12 rounded-full" />

        {/* Grid de ícones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
            >
              <span
                className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </span>
              <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
