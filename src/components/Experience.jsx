import { FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-teal-400">Experience</h2>
      <div className="w-36 h-1 bg-teal-500 mt-2 mb-10"></div>

      {/* Timeline Line */}
      <div className="relative border-l-2 border-teal-600/40 pl-10 space-y-12">
          <div className="w-3 h-3 bg-teal-500 rounded-full absolute -left-[0.45rem] top-8"></div>
                    <div className="w-3 h-3 bg-teal-500 rounded-full absolute -left-[0.45rem] top-80"></div>


        {/* Full-Time Job */}
        <div className="relative">
          {/* Dot */}

          <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl shadow">

            <h3 className="text-xl font-semibold text-white">Junior Software Developer</h3>
            <p className="text-teal-400 font-medium">ASCENTech</p>

            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <FaCalendarAlt /> Apr 2025 – Current
              <span className="ml-3 bg-teal-700/40 px-3 py-1 rounded text-teal-300 text-xs">Full-time</span>
            </div>

            <ul className="list-disc ml-6 mt-4 text-slate-300 text-sm leading-loose">
              <li>Developing and maintaining web applications using React.js and Node.js</li>
              <li>Collaborating with cross-functional teams to design and implement features</li>
              <li>Writing clean, maintainable code following best practices</li>
              <li>Participating in code reviews and team knowledge sharing</li>
            </ul>
          </div>
        </div>

        {/* Internship */}
        <div className="relative">
          {/* Dot */}

          <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-white">Software Developer Intern</h3>
            <p className="text-teal-400 font-medium">ASCENTech</p>

            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <FaCalendarAlt /> Nov 2024 – Mar 2025
              <span className="ml-3 bg-teal-700/40 px-3 py-1 rounded text-teal-300 text-xs">Internship</span>
            </div>

            <ul className="list-disc ml-6 mt-4 text-slate-300 text-sm leading-loose">
              <li>Assisted in developing backend services using Spring Boot and Java</li>
              <li>Gained hands-on experience with PostgreSQL</li>
              <li>Learned agile development methodologies & Git</li>
              <li>Contributed to testing and debugging applications</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
