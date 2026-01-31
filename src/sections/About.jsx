import { useState, useEffect } from "react";
import { Download, Code2, MonitorSmartphone, DatabaseZap } from "lucide-react";
import myCV from "../assets/CV.pdf";
import { motion } from "framer-motion";

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <Code2 size={22} className="text-[#0077B6]" />,
      skills: ['Java', 'Python', 'C++', 'JavaScript', 'C', 'PHP', 'Kotlin']
    },
    {
      category: 'Web & Mobile Dev',
      icon: <MonitorSmartphone size={22} className="text-[#0077B6]" />,
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Kotlin', 'Android Studio']
    },
    {
      category: 'Databases & Tools',
      icon: <DatabaseZap size={22} className="text-[#0077B6]" />,
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma', 'VS Code', 'Eclipse']
    }
  ];

  // --- Typewriter Logic (About Me Card) ---
  const [charCount, setCharCount] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const totalChars = 200; 

  useEffect(() => {
    if (startTyping) {
      let i = 0;
      const interval = setInterval(() => {
        setCharCount(i);
        i++;
        if (i > totalChars) clearInterval(interval);
      }, 15);
      return () => clearInterval(interval);
    }
  }, [startTyping]);

  const type = (text, startIdx) => {
    const endIdx = charCount - startIdx;
    if (endIdx <= 0) return "";
    return text.substring(0, endIdx);
  };

  const Cursor = ({ currentStart, text }) => {
    const isActive = charCount >= currentStart && charCount < currentStart + text.length;
    if (!isActive) return null;
    return (
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
        className="inline-block w-[2px] h-4 bg-[#0077B6] ml-0.5 align-middle"
      />
    );
  };

  // --- Clean Skills Animations ---
  const skillTagVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0B1120] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} transition={{ staggerChildren: 0.2 }}>
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About Me<span className="text-[#0077B6]">...</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            <motion.div variants={fadeInUp} className="lg:col-span-7 flex flex-col space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
              <p>
                I am a dedicated <span className="text-white font-medium">IT Undergraduate</span> specializing in
                <span className="text-white font-medium"> Software Engineering</span> at <span className="text-[#0077B6] font-semibold">SLIIT</span>.
                With a strong foundation in programming and problem solving. I have gained hands on experience in
                developing <span className="text-white">Full stack Web applications</span> and <span className="text-white">Android mobile applications</span>.
              </p>
              <p>
                I am a quick learner and a collaborative team player who is passionate about mastering
                <span className="text-white"> modern software architecture and development trends</span>.
                My goal is to apply my technical skills to contribute to impactful real world software projects.
              </p>

              <div className="pt-10 md:pt-16">
                <a href={myCV} download="CV.pdf"
                  className="px-8 py-3.5 w-fit text-base bg-[#0077B6] text-white font-semibold rounded-lg hover:bg-[#005F92] transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg">
                  Download Resume <Download size={18} />
                </a>
              </div>
            </motion.div>

            {/* Code Card */}
            <motion.div variants={fadeInUp} onViewportEnter={() => setStartTyping(true)} onViewportLeave={() => { setStartTyping(false); setCharCount(0); }} className="lg:col-span-5 relative mt-12 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none px-2">
              <div className="bg-[#111A2E] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative z-10 flex flex-col justify-start overflow-hidden">
                <div className="font-mono text-[16px] sm:text-base md:text-[16px] space-y-2 sm:space-y-3 leading-relaxed text-left relative z-20">
                  <p>
                    <span className="text-[#C678DD]">{type("const", 0)}</span>
                    <span className="text-[#61AFEF] font-semibold ml-2">{type("developer", 6)}</span>
                    <span className="text-white ml-2">{type("= {", 16)}<Cursor currentStart={16} text="= {" /></span>
                  </p>
                  
                  <p className="pl-5 sm:pl-8 text-white whitespace-nowrap">
                    {type("name:", 22)} <span className="text-[#98C379]">{type("'Dulmi Kalupahana',", 28)}<Cursor currentStart={28} text="'Dulmi Kalupahana'," /></span>
                  </p>
                  
                  <p className="pl-5 sm:pl-8 text-white whitespace-nowrap">
                    {type("role:", 60)} <span className="text-[#98C379]">{type("'Software Engineer',", 66)}<Cursor currentStart={66} text="'Software Engineer'," /></span>
                  </p>
                  
                  <p className="pl-5 sm:pl-8 text-white whitespace-nowrap">
                    {type("passion:", 95)} <span className="text-white">{type("[", 104)}</span>
                    <span className="text-[#98C379]">{type("'Coding',", 105)}</span>
                    <span className="text-[#98C379] ml-1">{type("'Problem Solving'", 115)}<Cursor currentStart={115} text="'Problem Solving'" /></span>
                    <span className="text-white">{type("],", 140)}</span>
                  </p>
                  
                  <p className="pl-5 sm:pl-8 text-white whitespace-nowrap">
                    {type("status:", 145)} <span className="text-[#98C379]">{type("'Undergraduate'", 153)}<Cursor currentStart={153} text="'Undergraduate'" /></span>
                  </p>
                  
                  <p className="text-white">{type("};", 175)}<Cursor currentStart={175} text="};" /></p>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0077B6]/20 to-purple-500/10 rounded-2xl blur opacity-20 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* --- Refined Technical Skills --- */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-3xl font-bold text-white mb-10 tracking-wide">
            Technical Skills
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((item, catIndex) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.05] hover:border-[#0077B6]/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#0077B6]/10 rounded-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white tracking-wide">{item.category}</h4>
                </div>

                {/* Individual Skill Tags */}
                <motion.div
                  className="flex flex-wrap gap-2.5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.04 } }
                  }}>
                  {item.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillTagVariants}
                      whileHover={{
                        y: -3,
                        backgroundColor: "rgba(0, 119, 182, 0.15)",
                        borderColor: "rgba(0, 119, 182, 0.5)",
                        color: "#fff"
                      }}
                      className="px-3.5 py-1.5 text-[13px] text-gray-400 bg-[#111A2E]/50 border border-white/5 rounded-md cursor-default transition-all duration-300">
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;