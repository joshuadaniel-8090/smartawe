// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/react.svg"; // Make sure you have the logo at this path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setActive(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = ["home", "about", "services", "past", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Past Work", id: "past" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D0D0D]/95 shadow-md" : "bg-[#0D0D0D]/70"
      } backdrop-blur-lg`}
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        <div className="cursor-pointer" onClick={() => scrollTo("home")}>
          <img src={logo} alt="SmartAwe Logo" className="h-8 w-auto" />
        </div>

        <div
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className="hidden md:flex space-x-6 text-sm md:text-base text-gray-300">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer hover:text-green-400 ${
                active === link.id ? "text-green-400" : ""
              }`}
              onClick={() => scrollTo(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-1/2 z-40 bg-[#0D0D0D]/95 backdrop-blur-xl shadow-lg flex flex-col items-start px-6 py-12 space-y-6 text-lg text-gray-100 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`text-left font-medium tracking-wide transition hover:text-green-400 ${
                  active === link.id ? "text-green-400" : ""
                }`}
                onClick={() => scrollTo(link.id)}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
