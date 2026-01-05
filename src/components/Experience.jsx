import { FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-teal-400">Experience</h2>
      <div className="w-36 h-1 bg-teal-500 mt-2 mb-10"></div>

      {/* Timeline Line */}
      <div className="relative border-l-2 border-teal-600/40 pl-10 space-y-12">
          <div className="w-3 h-3 bg-teal-500 rounded-full absolute -left-[0.45rem] top-8"></div>
                    <div className="w-3 h-3 bg-teal-500 rounded-full absolute -left-[0.45rem] top-100"></div>


        {/* Full-Time Job */}
        <div className="relative">
          {/* Dot */}

          <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl shadow">
    <div className="flex flex-row gap-2 items-center">
            <h3 className="text-xl font-semibold text-white">Junior Software Developer</h3>
            <p className="text-teal-400 font-medium">| ASCENTech</p></div>

            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <FaCalendarAlt /> Apr 2025 – Current
              <span className="ml-3 bg-teal-700/40 px-3 py-1 rounded text-teal-300 text-xs">Full-time</span>
            </div>

            <ul className="list-disc ml-6 mt-4 text-slate-300 text-md leading-loose">
                <li>Developing and maintaining scalable full-stack web applications using React.js (Vite) and Node.js</li>
      <li>Designing and implementing RESTful APIs for enterprise-level applications</li>
      <li>Integrating Oracle Database using stored procedures with complex IN/OUT parameter handling</li>
      <li>Implementing CRUD operations using mode-driven backend logic</li>
      <li>Ensuring robust error handling, validation, and backend data integrity</li>
      <li>Collaborating with cross-functional teams following clean code and best practices</li>
            </ul>
          </div>
        </div>

        {/* Internship */}
        <div className="relative">
          {/* Dot */}

          <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl shadow">
                <div className="flex flex-row gap-2 items-center">

            <h3 className="text-xl font-semibold text-white">Software Developer Intern</h3>
            <p className="text-teal-400 font-medium">| ASCENTech</p> </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <FaCalendarAlt /> Nov 2024 – Mar 2025
              <span className="ml-3 bg-teal-700/40 px-3 py-1 rounded text-teal-300 text-xs">Internship</span>
            </div>

           <ul className="list-disc ml-6 mt-4 text-slate-300 text-md leading-relaxed space-y-2">
 <li>
    Contributed to the development of backend services using <span className="text-teal-300">Node</span> for enterprise-level applications.
  </li>
  <li>
    Designed and managed relational data using <span className="text-teal-300">PostgreSQL</span>, ensuring data integrity and performance.
  </li>
  <li>
    Implemented REST APIs and integrated them with frontend components for seamless data flow.
  </li>
  <li>
    Actively participated in debugging, testing, and code reviews to improve code quality.
  </li>
  <li>
    Gained hands-on experience with <span className="text-teal-300">SVN</span>, agile workflows, and real-world software development practices.
  </li>
</ul>

          </div>
        </div>

      </div>
    </section>
  );
}
