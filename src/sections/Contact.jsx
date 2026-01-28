import { Mail, Linkedin, Github, ExternalLink, Send } from "lucide-react";

function Contact() {
  const contactLinks = [
    {
      name: 'Email',
      value: 'dulmikalupahana@gmail.com',
      icon: <Mail size={22} />, 
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=dulmikalupahana@gmail.com',
      iconColor: 'text-red-500',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/dulmi-kalupahana',
      icon: <Linkedin size={22} strokeWidth={2.5} />, 
      link: 'https://www.linkedin.com/in/dulmi-kalupahana', 
      iconColor: 'text-blue-500',
    },
    {
      name: 'GitHub',
      value: 'github.com/DulmiKalupahana',
      icon: <Github size={22} />,
      link: 'https://github.com/DulmiKalupahana',
      iconColor: 'text-gray-300',
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Let's Connect<span className="text-[#0077B6]">...</span> {/* Blue Dot color */}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Open for Internships • Freelance • Collaborations
              </p>
            </div>

            <div className="space-y-4 max-w-lg">
              {contactLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/10 rounded-2xl 
                  transition-all duration-300 group hover:translate-x-2 hover:border-[#0077B6]/50 hover:bg-[#0077B6]/5 backdrop-blur-sm"
                >
                  <div className={`p-3.5 rounded-xl bg-white/5 ${item.iconColor} transition-all duration-300 
                  group-hover:scale-110 group-hover:bg-[#0077B6]/20 group-hover:text-[#0077B6]`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#0077B6] font-bold mb-1">{item.name}</p>
                    <p className="text-gray-200 font-medium text-sm md:text-base break-all">
                      {item.value}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 pr-2 translate-x-2 group-hover:translate-x-0">
                    <ExternalLink size={18} className="text-[#0077B6]" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Visual - Blue used here */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border border-[#0077B6]/10 flex items-center justify-center animate-[pulse_4s_infinite]">
                <div className="w-64 h-64 rounded-full border border-[#0077B6]/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-[#0077B6]/30 flex items-center justify-center">
                    <Send 
                      size={80} 
                      className="text-[#0077B6] -rotate-12 translate-x-1" 
                      strokeWidth={1.5} 
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#0077B6] rounded-full blur-[1px] animate-ping"></div>
            </div>
          </div>

        </div>

        {/* Footer - Blue used for accent */}
        <div className="border-t border-white/10 pt-10 mt-24 text-center">
          <p className="text-gray-500 text-[11px] tracking-[0.3em] uppercase font-medium">
            © 2024 Dulmi Kalupahana <span className="mx-2 text-white/20">|</span> 
            Crafted with <span className="text-[#0077B6]">React</span> & <span className="text-[#0077B6]">Tailwind</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;