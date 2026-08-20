// src/components/Header.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Função para scroll suave
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
        {/*      ↑ MUDANÇA AQUI: px-4 sm:px-6 */}

        {/* Logo */}
        <div
          className="text-xl sm:text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors whitespace-nowrap"
          onClick={() => handleScroll("home")}
        >
          <span className="text-blue-400">&lt;</span>
          Dr Solo
          <span className="text-blue-400">/&gt;</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-white">
          <li>
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-blue-400 transition-colors text-base lg:text-lg"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-blue-400 transition-colors text-base lg:text-lg"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills")}
              className="hover:text-blue-400 transition-colors text-base lg:text-lg"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("certificates")}
              className="hover:text-blue-400 transition-colors text-base lg:text-lg"
            >
              Certificates
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className="hover:text-blue-400 transition-colors text-base lg:text-lg"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-400 transition-colors text-base lg:text-lg"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl hover:text-blue-400 transition-colors p-2"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-sm">
          <ul className="flex flex-col items-center gap-4 py-6 text-white text-lg">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="hover:text-blue-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skills")}
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("certificates")}
                className="hover:text-blue-400 transition-colors"
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
