// src/components/About.jsx
import ProfilePhoto from "../assets/profile.jpeg"; // Importe sua foto
import { FaGithub, FaLinkedin, FaDiscord, FaItchIo } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/Animations";

function About() {
  return (
    <motion.section
      {...fadeInUp}
      id="about"
      className="relative py-16 sm:py-20 md:py-32 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-blue-400 to-purple-400 mx-auto mb-8 md:mb-12 rounded-full" />

        {/* Container principal - grid com foto e texto */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20">
          {/* Lado esquerdo - Foto */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Moldura/animação */}
              {/* <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" /> */}
              <img
                src={ProfilePhoto}
                alt="Minha foto"
                className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Lado direito - Informações */}
          <div className="space-y-4 sm:space-y-6 text-white">
            {/* Nome estilizado */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
                <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Miguel Eduardo
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-blue-300 mt-2 text-center md:text-left">
                Full Stack Developer
              </p>
            </div>

            {/* Descrição */}
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg text-center md:text-left space-y-4">
              <p>
                Hello traveler, what an honor to have you here! You might be
                wondering who I am. Well, I'm just a programmer passionate about
                solving problems, navigating through code to learn and build
                meaningful solutions.
              </p>
              <br />
              <p>
                My technical toolkit includes <strong>ASP.NET Core</strong>,{" "}
                <strong>Python</strong>,<strong>TypeScript</strong>,{" "}
                <strong>React</strong>, and <strong>Tailwind CSS</strong>. I
                thrive in dynamic environments, constantly seeking to write
                clean, maintainable code.
              </p>
            </div>

            {/* Links Sociais - CORRIGIDO */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4">
              <a
                href="https://github.com/DoctorSolo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="GitHub"
              >
                <FaGithub
                  size={20}
                  className="sm:text-2xl text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/migueledu303/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={20}
                  className="sm:text-2xl text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://bsky.app/profile/doctorsolo.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Bluesky"
              >
                <SiBluesky
                  size={20}
                  className="sm:text-2xl text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://discord.com/users/534808726570270731/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Discord"
              >
                <FaDiscord
                  size={20}
                  className="sm:text-2xl text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://dr-solo.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Itch.io"
              >
                <FaItchIo
                  size={20}
                  className="sm:text-2xl text-white hover:text-blue-400 transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
