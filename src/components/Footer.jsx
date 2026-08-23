// src/components/Footer.jsx - Versão Minimalista
import { FaGithub, FaLinkedin, FaDiscord, FaItchIo } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Direitos Reservados */}
          <div className="text-white/30 text-sm">
            © {currentYear}{" "}
            <span className="text-white/60">Miguel Eduardo</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="flex sm:inline items-center gap-1">
              Made with lots of coffee
            </span>
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/DoctorSolo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/migueledu303/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-blue-400 transition-colors hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://bsky.app/profile/doctorsolo.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-blue-400 transition-colors hover:scale-110"
            >
              <SiBluesky size={20} />
            </a>
            <a
              href="https://discord.com/users/534808726570270731/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-blue-400 transition-colors hover:scale-110"
            >
              <FaDiscord size={20} />
            </a>
            <a
              href="https://dr-solo.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-blue-400 transition-colors hover:scale-110"
            >
              <FaItchIo size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
