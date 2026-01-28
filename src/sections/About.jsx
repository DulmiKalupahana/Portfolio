import { Download, Code2, MonitorSmartphone, DatabaseZap } from "lucide-react";
import myCV from "../assets/CV.pdf";

function About() {
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

  return (
    <section id="about" className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me<span className="text-[#0077B6]">...</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Side: Description */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
              <p>
                I am a dedicated <span className="text-white font-medium">IT Undergraduate</span> specializing in
                <span className="text-white font-medium"> Software Engineering</span> at <span className="text-[#0077B6] font-semibold">SLIIT</span>.
                With a strong foundation in programming and problem solving, I have gained hands on experience in
                developing <span className="text-white">Full-stack Web applications</span> and <span className="text-white">Android mobile applications</span>.
              </p>
              <p>
                I am a quick learner and a collaborative team player who is passionate about mastering
                <span className="text-white"> modern software architecture and development trends</span>.
                My goal is to apply my technical skills to contribute to impactful real world software projects.
              </p>
            </div>

            <div className="mt-20">
              <a
                href={myCV}
                download="Dulmi_Kalupahana_CV.pdf"
                className="px-8 py-3 bg-[#0077B6] text-white font-semibold rounded-md hover:bg-[#005F92] transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-[#0077B6]/20"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </div>

          {/* Right Side: Code Card  */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="bg-[#111A2E] border border-white/10 rounded-2xl p-7 shadow-2xl relative z-10">
              <div className="font-mono text-sm md:text-[15px] space-y-2 leading-relaxed">
                <p>
                  <span className="text-[#C678DD]">const</span>
                  <span className="text-[#61AFEF] font-semibold ml-2">developer</span>
                  <span className="text-white ml-2">= {"{"}</span>
                </p>
                
                <p className="pl-6 text-white">
                  name: <span className="text-[#98C379]">'Dulmi Kalupahana'</span>,
                </p>
                
                <p className="pl-6 text-white">
                  role: <span className="text-[#98C379]">'Software Engineer'</span>,
                </p>
                
                <p className="pl-6 text-white">
                  passion: <span className="text-white">[</span>
                  <span className="text-[#98C379]">'Coding'</span>,
                  <span className="text-[#98C379]">'Problem Solving'</span>
                  <span className="text-white">]</span>,
                </p>
                
                <p className="pl-6 text-white">
                  status: <span className="text-[#98C379]">'Undergraduate'</span>
                </p>
                
                <p className="text-white">{"};"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-10 tracking-wide">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((item) => (
              <div key={item.category} className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-[#0077B6]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  {item.icon}
                  <h4 className="text-lg font-semibold text-white tracking-wide">{item.category}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 text-sm text-gray-300 bg-[#0B1120] border border-white/10 rounded-full hover:text-white hover:border-[#0077B6]/60 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;