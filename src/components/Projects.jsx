import { FaFolder, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Hall Booking Application",
    desc: "Developed a full-stack booking management application using Spring Boot, React, and PostgreSQL. The backend handles API requests, while the React frontend provides a user-friendly interface for creating, editing, and managing bookings.",
    tech: ["Spring Boot", "React.js", "PostgreSQL", "Java"],
    link: "https://github.com/sg000660/Hall_booking_system"
  },
  {
    title: "Exam Portal System",
    desc: "The Exam Portal System, using Java, HTML, CSS, and JavaScript, includes modules for user login, course selection, exam questions, results viewing, admin account management, user profiles, contact details, and logout functionality, ensuring efficient online exam management.",
    tech: ["Java", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/sg000660/mini_project_java"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-teal-400">Projects</h2>
      <div className="w-36 h-1 bg-teal-500 mt-2 mb-10"></div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl shadow">

            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-teal-900/40 rounded-lg flex items-center justify-center text-teal-400">
                <FaFolder size={22} />
              </div>

              <a href={p.link} className="text-slate-400 hover:text-white">
                <FaGithub size={22} />
              </a>
            </div>

            <h3 className="text-xl font-semibold text-white mt-4">{p.title}</h3>
            <p className="text-slate-300 text-sm mt-2">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs bg-slate-800 rounded-md text-slate-300">
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
