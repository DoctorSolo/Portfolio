import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import fundo from "./assets/Terra5.png";
import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/Header";
import Certificate from "./components/Certificate";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* Fundo fixo - ocupa a tela toda */}
      <div className="fixed inset-0 -z-10 bg-fixed bg-cover bg-center bg-[url('./assets/Terra5.png')]">
        {/* Overlay para escurecer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 bg-black/40"></div>
      </div>

      {/* Conteúdo - rola por cima */}
      <div className="relative z-10">
        <Header />
        <Home />
        <About />
        <Skills />
        <Certificate />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
