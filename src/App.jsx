import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white relative selection:bg-blue-500 selection:text-white overflow-x-hidden">
    
      {/*  Content  */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}