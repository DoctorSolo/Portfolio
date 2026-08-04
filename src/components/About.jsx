// src/components/About.jsx
import ProfilePhoto from "../assets/profile.jpeg"; // Importe sua foto
import { FaGithub, FaLinkedin, FaDiscord, FaItchIo } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

function About() {
  return (
    <section id="about" className="relative py-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          About <span className="text-blue-400">Me</span>
        </h2> */}

        {/* Container principal - grid com foto e texto */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
          {/* Lado esquerdo - Foto */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Moldura/animação */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={ProfilePhoto}
                alt="Minha foto"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Lado direito - Informações */}
          <div className="space-y-6 text-white">
            {/* Nome estilizado */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Miguel Eduardo
                </span>
              </h3>
              <p className="text-xl text-blue-300 mt-2">Full Stack Developer</p>
            </div>

            {/* Descrição */}
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Hello traveler, what an honor to have you here! You might be
              wondering who I am. Well, I’m just a programmer passionate about
              solving problems. I travel across the vast world of the internet
              to learn new things and grow. And you?
            </p>

            {/* <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              🚀 Atualmente focado em desenvolvimento web e mobile, adoro
              transformar ideias em produtos funcionais e bem projetados.
            </p> */}

            {/* Links Sociais */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/DoctorSolo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="GitHub"
              >
                <FaGithub
                  size={28}
                  className="text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/migueledu303/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={28}
                  className="text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://x.com/DrSolo303"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Twitter"
              >
                <RiTwitterXFill
                  size={28}
                  className="text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://bsky.app/profile/doctorsolo.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Bluesky"
              >
                <SiBluesky
                  size={28}
                  className="text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://discord.com/users/534808726570270731/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Discord"
              >
                <FaDiscord
                  size={28}
                  className="text-white hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://dr-solo.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-500/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Itch.io"
              >
                <FaItchIo
                  size={28}
                  className="text-white hover:text-blue-400 transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
