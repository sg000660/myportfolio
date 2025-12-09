export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050b12]/60 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-semibold text-teal-400 tracking-wide">SG</h1>

        <div className="hidden md:flex gap-10 text-sm text-gray-300">
          <a href="#about" className="hover:text-teal-300">About</a>
          <a href="#education" className="hover:text-teal-300">Education</a>
          <a href="#experience" className="hover:text-teal-300">Experience</a>
          <a href="#projects" className="hover:text-teal-300">Projects</a>
          <a href="#skills" className="hover:text-teal-300">Skills</a>
          <a href="#contact" className="hover:text-teal-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}
