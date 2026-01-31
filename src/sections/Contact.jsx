import { Mail, Linkedin, Github, ExternalLink, Send, User, MessageSquare, Tag } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const contactLinks = [
    { name: 'Email', value: 'dulmikalupahana@gmail.com', icon: <Mail size={22} />, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=dulmikalupahana@gmail.com', iconColor: 'text-red-500' },
    { name: 'LinkedIn', value: 'linkedin.com/in/dulmi-kalupahana', icon: <Linkedin size={22} strokeWidth={2.5} />, link: 'https://www.linkedin.com/in/dulmi-kalupahana', iconColor: 'text-blue-500' },
    { name: 'GitHub', value: 'github.com/DulmiKalupahana', icon: <Github size={22} />, link: 'https://github.com/DulmiKalupahana', iconColor: 'text-gray-300' }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0B1120] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} transition={{ staggerChildren: 0.2 }}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Contact Info */}
            <motion.div variants={fadeInUp} className="mt-2">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect<span className="text-[#0077B6]">...</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">Open for Internships • Freelance • Collaborations.</p>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">Feel free to reach out!</p>
              </div>

              <div className="space-y-4 max-w-lg">
                {contactLinks.map((item) => (
                  <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all duration-300 group hover:translate-x-2 hover:border-[#0077B6]/50 hover:bg-[#0077B6]/5 backdrop-blur-sm">
                    <div className={`p-3.5 rounded-xl bg-white/5 ${item.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0077B6]/20 group-hover:text-[#0077B6]`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#0077B6] font-bold mb-1">{item.name}</p>
                      <p className="text-gray-200 font-medium text-sm md:text-base break-all">{item.value}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 pr-2 translate-x-2 group-hover:translate-x-0">
                      <ExternalLink size={18} className="text-[#0077B6]" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md relative overflow-hidden">
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 relative z-10">
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2 ml-1"><User size={14} className="text-[#0077B6]" /> Name</label>
                    <input type="text" name="name" required placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#0077B6]/50 focus:ring-1 focus:ring-[#0077B6]/50 transition-all"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2 ml-1"><Mail size={14} className="text-[#0077B6]" /> Email</label>
                    <input type="email" name="email" required placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#0077B6]/50 focus:ring-1 focus:ring-[#0077B6]/50 transition-all"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2 ml-1"><Tag size={14} className="text-[#0077B6]" /> Subject</label>
                  <input type="text" name="subject" required placeholder="Inquiry" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#0077B6]/50 focus:ring-1 focus:ring-[#0077B6]/50 transition-all"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2 ml-1"><MessageSquare size={14} className="text-[#0077B6]" /> Message</label>
                  <textarea name="message" required rows="4" placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#0077B6]/50 focus:ring-1 focus:ring-[#0077B6]/50 transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0077B6] hover:bg-[#005f91] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-[0.98]">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="border-t border-white/10 pt-10 mt-24 text-center">
            <p className="text-gray-400 text-sm md:text-base">© 2026 <span className="text-white font-semibold">Dulmi Kalupahana</span></p>
            <div className="flex items-center justify-center gap-6 mt-4">
              <a href="https://github.com/DulmiKalupahana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0077B6] transition-colors"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/dulmi-kalupahana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0077B6] transition-colors"><Linkedin size={18} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dulmikalupahana@gmail.com" className="text-gray-300 hover:text-[#0077B6] transition-colors"><Mail size={18} /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
