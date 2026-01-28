import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#0B1120] pt-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1 flex flex-col items-start text-left">
          
          {/* HELLO, I’M */}
          <h2 className="text-gray-300 text-xl md:text-2xl lg:text-3xl font-normal tracking-[0.25em] mb-4 uppercase">
            HELLO, I’M
          </h2>

          {/* NAME - Dulmi*/}
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold text-white mb-24 leading-none md:pl-24 transition-all">
            Dulmi
          </h1>

          {/* BUTTONS*/}
          <div className="flex flex-wrap gap-5 justify-start mb-6">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-[#0077B6] text-white font-semibold rounded-md hover:bg-[#005F92] transition-all cursor-pointer shadow-lg"
            >
              View Projects
            </button>

            {/* Contact Me Button*/}
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border-2 border-[#0077B6] text-white font-semibold rounded-md hover:bg-[#0077B6] hover:text-white transition-all cursor-pointer shadow-lg">
              Contact Me
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4"> 
            <a
              href="https://github.com/DulmiKalupahana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077B6] transition-all text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dulmi-kalupahana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077B6] transition-all text-4xl"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>

        {/* RIGHT CONTENT - IMAGE */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 border-white/5 shadow-2xl">
            <img
              src={profile}
              alt="Dulmi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;