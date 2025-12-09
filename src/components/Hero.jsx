import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* ---------- LEFT SIDE (Centered) ---------- */}
        <div className="flex flex-col items-center md:items-center text-center">
          
          {/* Glowing Profile Image */}
          <div className="relative w-64 h-64 mb-6">
  <div className="absolute inset-0 rounded-full bg-teal-400 blur-2xl opacity-0"></div>
  <img
    src="/Assets/profile.jpg"
    className="w-64 h-64 rounded-full border-4 border-teal-400 shadow-xl object-cover"
  />
</div>


          {/* <p className="text-teal-300 text-lg mb-1">Hello, I'm</p> */}

          <h1 className="text-5xl font-bold text-white text-center leading-tight">
            Swati <span className="text-teal-400">Gupta</span>
          </h1>

          <p className="text-2xl text-slate-300 mt-3">Software Developer</p>
        </div>

        {/* ---------- RIGHT SIDE (Centered & Clean Margins) ---------- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <p className="mt-4 max-w-md text-slate-400 text-lg leading-relaxed">
            Passionate about building elegant solutions with modern technologies.
            And crafting digital experiences that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-8">
            <a
              href="/Assets/Resume.pdf"
              download
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-full text-white font-medium shadow-lg transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-teal-400 text-teal-300 rounded-full hover:bg-teal-400 hover:text-black transition font-medium"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 mt-10 text-slate-300 text-2xl">
            <a href="mailto:sg000660@gmail.com" className="hover:text-teal-400">
              <FaEnvelope />
            </a>
            <a href="https://github.com/sg000660" className="hover:text-teal-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/swati-gupta-23a045225" className="hover:text-teal-400">
              <FaLinkedin />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
