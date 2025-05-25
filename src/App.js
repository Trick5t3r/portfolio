import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange"; // nouvel import


gsap.registerPlugin(ScrollTrigger);

function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black">
      <motion.div
        className="h-full bg-[#FFD700]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    gsap.utils.toArray(".fade-in-section").forEach(section => {
      gsap.fromTo(section, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });
    });
  }, []);

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="bg-white text-black font-sans overscroll-none">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white p-4 shadow-[0_4px_6px_rgba(0,0,0,0.15)]">
          <ul className="flex justify-end space-x-6">
            {['Home', 'About Me', 'Projects'].map((item, i) => (
              <li key={i} className="relative group">
                <NavLink 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`} 
                  className={({ isActive }) => 
                    `hover:text-gray-300 transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-white'}`
                  }
                >
                  {item}
                </NavLink>
                <motion.div
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </li>
            ))}
          </ul>
          <ProgressBar />
        </nav>

        <main className="pt-14 min-h-screen overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </main>

        <ScrollToTop />

        <footer className="bg-black text-white text-center py-10 mt-10">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            For questions, collaborations or feedback — feel free to reach out.
          </p>
          <a
            href="https://github.com/Trick5t3r/portfolio/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            Contact me on GitHub
          </a>
        </footer>

      </div>
    </Router>
  );
}
