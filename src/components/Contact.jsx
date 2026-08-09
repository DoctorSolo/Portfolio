// src/components/Contact.jsx
import { useState, useRef } from "react";
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ⚠️ SUBSTITUA COM SEUS DADOS ⚠️
  const SERVICE_ID = "service_6qzdx74"; // Seu Service ID
  const TEMPLATE_ID = "template_4c50o3j"; // Seu Template ID
  const PUBLIC_KEY = "p59mCJJmPv1eotNpT"; // Sua Public Key

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY,
      );

      console.log("SUCCESS!", result.text);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (error) {
      console.error("FAILED...", error);

      // Mensagens de erro mais descritivas
      if (error.text?.includes("Forbidden")) {
        setErrorMessage("Erro de autenticação. Verifique sua Public Key.");
      } else if (error.text?.includes("not found")) {
        setErrorMessage(
          "Erro de configuração. Verifique Service ID e Template ID.",
        );
      } else if (error.text?.includes("network")) {
        setErrorMessage("Erro de rede. Verifique sua conexão com a internet.");
      } else {
        setErrorMessage("Erro ao enviar mensagem. Tente novamente.");
      }

      alert(`Erro: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          <span className="text-blue-400">Contact</span> Me
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-purple-400 mx-auto mb-4 rounded-full"></div>
        {/* <p className="text-center text-white/50 mb-12 max-w-2xl mx-auto">
          Tem alguma pergunta ou quer trabalhar comigo? Fique à vontade para me
          enviar uma mensagem!
        </p> */}

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {isSent ? (
            <div className="text-center py-8">
              <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">
                Message Sent!
              </h3>
              <p className="text-white/50">
                I will be in touch soon. Thank you!
              </p>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  <FaUser className="inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  <FaEnvelope className="inline mr-2" />
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              {/* Mensagem de erro */}
              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-400/20 rounded-lg text-red-400 text-sm flex items-center gap-2">
                  <FaExclamationCircle />
                  {errorMessage}
                </div>
              )}

              {/* Botão */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
