import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navLinks = ["About", "Projects", "Contact"];

  const scrollTo = (id) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 300);
  };

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "contact"];
    const observerOptions = { root: null, rootMargin: "-30% 0px -60% 0px", threshold: 0 };

    const observerCallback = (entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 ${open ? "bg-[#0B1120]" : "bg-[#0B1120]/80 backdrop-blur-md"} border-b border-white/5`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 h-full flex items-center justify-between">
        <h1 onClick={() => scrollTo("hero")} className="text-2xl font-bold text-white cursor-pointer z-50">
          Dulmi<span className="text-[#0077B6]">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 lg:gap-12 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((item) => (
            <li key={item} onClick={() => scrollTo(item.toLowerCase())} className={`cursor-pointer transition-colors duration-300 hover:text-[#0077B6] ${activeSection === item.toLowerCase() ? "text-[#0077B6]" : "text-gray-300"}`}>
              {item}
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white z-50 p-2" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>

        <div className={`fixed inset-0 bg-[#0B1120] flex flex-col items-center justify-center transition-transform duration-500 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col gap-8 text-center text-xl font-semibold uppercase tracking-[0.2em]">
            {navLinks.map((item) => (
              <li key={item} onClick={() => scrollTo(item.toLowerCase())} className={`cursor-pointer transition-colors ${activeSection === item.toLowerCase() ? "text-[#0077B6]" : "text-gray-300"}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
