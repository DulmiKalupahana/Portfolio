import { ExternalLink, Github, Layers } from "lucide-react";
import medicineImg from "../assets/medicine.png";
import studyImg from "../assets/study.png";
import shopImg from "../assets/petShop.png";
import habitImg from "../assets/habit.png";
import { motion } from "framer-motion";

function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      id: 1,
      title: "Smart Farm Platform",
      desc: "A MERN stack-based smart farming platform to monitor farm operations, manage crops, employees, and livestock data in real-time.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: null,
      github: "https://github.com/SavinduS/Smart-Farm-System.git",
      live: "#"
    },
    {
      id: 2,
      title: "Online Medicine Ordering System",
      desc: "A web platform designed to streamline pharmaceutical retail, allowing users to browse healthcare products and place secure orders efficiently.",
      tech: ["Java", "HTML", "Tailwind CSS", "JavaScript", "MySQL"],
      image: medicineImg,
      github: "https://github.com/DulmiKalupahana/Online-Medicine-Ordering-System.git",
      live: "#"
    },
    {
      id: 3,
      title: "Habit Tracker App",
      desc: "A personal productivity tool that helps users build and maintain healthy habits through goal setting, progress tracking, and daily reminders.",
      tech: ["Kotlin", "XML", "SQLite", "Android Studio"],
      image: habitImg,
      github: "https://github.com/DulmiKalupahana/HabitTracker.git",
      live: "#"
    },
    {
      id: 4,
      title: "Study Planner App",
      desc: "A mobile application designed to help students organize their academic life with task scheduling, reminders, and note management with a clean UI.",
      tech: ["Kotlin", "XML", "Android Studio", "UI/UX Design"],
      image: studyImg,
      github: "https://github.com/DulmiKalupahana/StudyPlanner-SmartStudy.git",
      live: "#"
    },
    {
      id: 5,
      title: "Pet Item Shop App",
      desc: "A visually appealing and user-friendly mobile app UI design for a Pet Item Shop.",
      tech: ["Figma", "UI/UX Design", "Mobile App Design"],
      image: shopImg,
      github: "#",
      live: "#"
    },
  ];

  return (
    <section id="projects" className="pt-4 pb-24 bg-[#0B1120] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} transition={{ staggerChildren: 0.2 }}>
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Projects<span className="text-[#0077B6]">...</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl w-[92%] mx-auto md:w-full md:mx-0">
                <div className="relative aspect-video bg-[#1e293b] flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Layers size={48} className="text-[#0077B6]/30 group-hover:text-[#0077B6] transition-colors duration-500" />
                      <span className="text-white/20 text-xs">No Preview</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-[#0B1120]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0077B6] rounded-full text-white hover:bg-[#005F92] transition-colors shadow-lg">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors shadow-lg">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0077B6] transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-[11px] font-medium text-gray-300 bg-white/[0.05] border border-white/10 rounded-full hover:border-[#0077B6]/60 transition-all">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0077B6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
