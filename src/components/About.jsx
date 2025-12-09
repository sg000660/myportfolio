import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-teal-400">About <span className="text-white">Me</span></h2>
      <div className="w-28 h-1 bg-teal-500 mt-2 mb-6"></div>

      <p className="text-slate-300 leading-relaxed max-w-4xl">
        A motivated and enthusiastic individual seeking a challenging role in a reputed organization that 
        provides opportunities to learn and grow while contributing to organizational success. Eager to 
        leverage my technical skills in Java, SQL, JavaScript, and React.js to develop innovative solutions 
        and collaborate with dynamic teams.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        
        {/* Clean Code */}
        <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl text-slate-200">
          <div className="w-12 h-12 flex items-center justify-center bg-teal-900/40 rounded-lg mb-4 text-teal-400">
            <FaCode size={22} />
          </div>
          <h3 className="text-lg font-semibold">Clean Code</h3>
          <p className="text-sm text-slate-400 mt-2">
            Writing maintainable, scalable, and well-documented code that follows best practices.
          </p>
        </div>

        {/* Problem Solver */}
        <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl text-slate-200">
          <div className="w-12 h-12 flex items-center justify-center bg-teal-900/40 rounded-lg mb-4 text-teal-400">
            <FaLightbulb size={22} />
          </div>
          <h3 className="text-lg font-semibold">Problem Solver</h3>
          <p className="text-sm text-slate-400 mt-2">
            Analytical thinker who enjoys solving complex problems with innovative approaches.
          </p>
        </div>

        {/* Team Player */}
        <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl text-slate-200">
          <div className="w-12 h-12 flex items-center justify-center bg-teal-900/40 rounded-lg mb-4 text-teal-400">
            <FaUsers size={22} />
          </div>
          <h3 className="text-lg font-semibold">Team Player</h3>
          <p className="text-sm text-slate-400 mt-2">
            Strong collaboration skills with experience in agile environments and cross-functional teams.
          </p>
        </div>

      </div>
    </section>
  );
}
