import { FaCode, FaHeart, FaTools } from "react-icons/fa";


export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 max-w-6xl mx-auto">
       <h2 className="text-4xl font-bold text-teal-400">Skills</h2>
      <div className="w-36 h-1 bg-teal-500 mt-2 mb-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Coding Languages */}
        <div className="bg-[#0E1627] p-8 rounded-2xl shadow-lg border border-[#1E2A3D]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#0F2B26] rounded-xl text-teal-400 text-xl"><FaCode /> </div>
            <h3 className="text-xl font-semibold">Coding Languages</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Java", "SQL", "JavaScript", "React.js", "Node.js", "HTML", "CSS"].map(item => (
              <span
                key={item}
                className="px-4 py-2 bg-[#101B2D] rounded-full text-sm border border-[#1E2A3D]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-[#0E1627] p-8 rounded-2xl shadow-lg border border-[#1E2A3D]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#0F2B26] rounded-xl text-teal-400 text-xl"><FaTools /></div>
            <h3 className="text-xl font-semibold">Tools & Technologies</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "VS Code",
              "GitHub",
              "Postman",
              "PostgreSQL",
              "Oracle DB",
              "Spring Boot",
              "Git"
            ].map(item => (
              <span
                key={item}
                className="px-4 py-2 bg-[#101B2D] rounded-full text-sm border border-[#1E2A3D]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-[#0E1627] p-8 rounded-2xl shadow-lg border border-[#1E2A3D]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#0F2B26] rounded-xl text-teal-400 text-xl"><FaHeart /></div>
            <h3 className="text-xl font-semibold">Soft Skills</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Communication",
              "Time Management",
              "Adaptability"
            ].map(item => (
              <span
                key={item}
                className="px-4 py-2 bg-[#101B2D] rounded-full text-sm border border-[#1E2A3D]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
