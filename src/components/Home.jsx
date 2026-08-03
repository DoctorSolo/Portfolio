// src/components/Home.jsx - Versão minimalista
import { FaArrowDown } from "react-icons/fa";

function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center text-white">
        {/* Main Title */}
        <h1 className="font-bold leading-none mb-2">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-[15vw] md:text-[12vw] lg:text-[20vw]">
            Dr. Solo
          </span>
        </h1>

        {/* Linha separadora */}
        <div className="w-150 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>

        {/* Subtítulo com ícone */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          <span className="text-blue-400">⚡</span> Full Stack Developer{" "}
          <span className="text-blue-400">⚡</span>
        </p>

        {/* Botão */}
        <button
          onClick={scrollToAbout}
          className="mt-30 px-10 py-4 border-2 border-white/30 hover:border-blue-400 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group"
        >
          <span className="flex items-center gap-2">
            Explore
            <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Home;
