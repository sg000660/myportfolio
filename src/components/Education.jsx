import { FaGraduationCap } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Education() {
  const items = [
    {
      degree: "Master of Computer Application",
    college: "Sardar Patel Institute of Technology, University of Mumbai",
      desc: "Advanced studies in computer applications, software engineering, and system design.",
     duration: "Aug 2023 – Jun 2025",
    score: "8.98 / 10",
    },
    {
     degree: "Bachelor in Science (Computer Science)",
    college: "Sonopant Dandekar Sikhshan Mandali, University of Mumbai",
      desc: "Strong foundation in programming, databases, and web development fundamentals.",
       duration: "Jul 2020 – Jun 2023",
    score: "9.38 / 10",
    },
  ];

  return (
    <section id="education" className="px-6 py-20 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-teal-400">Education</h2>
      <div className="h-1 w-36 bg-teal-500 mt-2 mb-10 rounded-full"></div>

      <div className="space-y-10">
        {items.map((edu) => (
          <div
            key={edu.degree}
            className="relative bg-[#0b111a] border border-white/5 rounded-xl p-8 flex justify-between items-start hover:border-teal-400/40 transition shadow-lg"
          >
            {/* Left green glow border */}
            <div className="absolute left-0 top-0 h-full w-1 bg-teal-500 rounded-l-xl"></div>

            {/* Left section */}
            <div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-900/40 rounded-lg text-teal-400">
                  <FaGraduationCap size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              </div>

              <p className="text-slate-300 mt-3">{edu.college}</p>
              <p className="text-slate-400 mt-2 text-sm">{edu.desc}</p>
            </div>

            {/* Right section */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center text-slate-300 gap-2">
                <FaRegCalendarAlt className="text-teal-300" />
                <span>{edu.duration}</span>
              </div>

              <div className="px-5 py-2 bg-teal-900/40 text-teal-300 border border-teal-700 rounded-full font-semibold">
                {edu.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
