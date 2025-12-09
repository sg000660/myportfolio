import { FaEnvelope, FaEnvelopeOpenText, FaLinkedin, FaMapPin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-[#070E1B] text-white">
      
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-2">
        Contact
      </h2>
      <div className="w-24 h-1 bg-teal-400 mx-auto mb-8"></div>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-14">
        If you would like to discuss a professional opportunity, collaboration, or require further information about my work,
        you may reach out through the channels below.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Column - Contact Details */}
        <div className="space-y-8">

          <div className="bg-[#0E1627] p-6 rounded-2xl border border-[#1E2A3D] flex items-center gap-4">
            <div className="text-teal-400 text-3xl bg-[#0F2B26] p-3 rounded-xl"><FaEnvelope /></div>
            <div>
              <h4 className="text-sm text-gray-400">Email</h4>
              <p className="text-lg">sg000660@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#0E1627] p-6 rounded-2xl border border-[#1E2A3D] flex items-center gap-4">
            <div className="text-teal-400 text-3xl bg-[#0F2B26] p-3 rounded-xl"><FaLinkedin /></div>
            <div>
              <h4 className="text-sm text-gray-400">LinkedIn</h4>
              <a
                href="https://linkedin.com/in/swati-gupta-23a045225"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:text-teal-400"
              >
                Swati_Gupta
              </a>
            </div>
          </div>

          <div className="bg-[#0E1627] p-6 rounded-2xl border border-[#1E2A3D] flex items-center gap-4">
            <div className="text-teal-400 text-3xl bg-[#0F2B26] p-3 rounded-xl"><FaMapPin /></div>
            <div>
              <h4 className="text-sm text-gray-400">Location</h4>
              <p className="text-lg">Mumbai, India</p>
            </div>
          </div>

        </div>

        {/* Right Column - Call to Action */}
        <div className="bg-[#0E1627] p-10 rounded-2xl border border-[#1E2A3D] flex flex-col items-center text-center">
          
          <div className="text-teal-400 text-5xl bg-[#0F2B26] p-6 rounded-full mb-6">
            <FaEnvelopeOpenText />
          </div>

          <h3 className="text-2xl font-semibold mb-3">Professional Inquiry</h3>
          <p className="text-gray-300 mb-8">
            For job opportunities, project discussions, or any formal communication, please contact me via email.
          </p>

          <a
  href="mailto:sg000660@gmail.com"
  onClick={(e) => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=sg000660@gmail.com", "_blank");
  }}
  className="px-8 py-3 bg-teal-500 text-black rounded-xl font-semibold hover:bg-teal-400 transition"
>
            Send Email
          </a>

        </div>
      </div>
    </section>
  );
}
