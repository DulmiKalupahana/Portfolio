import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fullText = "HELLO, I’M";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#0B1120] pt-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ staggerChildren: 0.2 }}
          className="order-2 md:order-1 flex flex-col items-start text-left"
        >
          {/* HELLO, I'M */}
          <motion.h2
            variants={fadeInUp}
            className="text-gray-300 text-xl md:text-2xl lg:text-3xl font-normal tracking-[0.25em] mb-4 uppercase min-h-[1.5em]"
          >
            {displayedText}
          </motion.h2>

          {/* DULMI - Aligned 'D' under 'L' of HELLO on mobile */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 1, ease: "easeOut" }
              }
            }}
            // pl-14 added for mobile to push 'D' under 'L'
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold text-white mb-10 md:mb-24 leading-tight md:leading-none pl-14 sm:pl-20 md:pl-24 transition-all"
          >
            Dulmi
          </motion.h1>

          {/* BUTTONS - Same line on mobile */}
          <motion.div variants={fadeInUp} className="flex flex-row gap-3 sm:gap-5 justify-start mb-6 w-full max-w-sm sm:max-w-none">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-1 sm:flex-none px-4 sm:px-8 py-3 bg-[#0077B6] text-white text-[13px] sm:text-base font-semibold rounded-md hover:bg-[#005F92] transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-1 sm:flex-none px-4 sm:px-8 py-3 border-2 border-[#0077B6] text-white text-[13px] sm:text-base font-semibold rounded-md hover:bg-[#0077B6] hover:text-white transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Contact Me
            </button>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div variants={fadeInUp} className="flex gap-4">
            <a href="https://github.com/DulmiKalupahana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B6] transition-all text-4xl hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dulmi-kalupahana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B6] transition-all text-4xl hover:-translate-y-1">
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT (PHOTO) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 border-white/5 shadow-2xl relative z-10 mt-10 md:mt-0">
            <motion.img whileHover={{ scale: 1.05 }} src={profile} alt="Dulmi" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;