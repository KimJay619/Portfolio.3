import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="parent">
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      {/* Header */}
      
      <header className="px-6 py-10 border-b border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Motal, Kim Jay S.
            </h1>
            <p className="text-gray-400 mt-2 text-lg">Frontend Developer</p>
          </div>

          <img
            src="src\assets\26f15627-5a32-4570-a665-f57ddb3fcdf1.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>
      </header>

      {/* Main */}
      <main className="grid grid-cols-1 md:grid-cols-4">
        {/* Left Content */}
        <div className="md:col-span-3 p-6 space-y-12">
          {/* About */}
          <section className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I am a student of University of Baguio and am motivated to learn and earn experience to properly take on my responsibilities 
              and be productive. Even though I am quite inexperienced in becoming a developer,
              I am confident that I will be able to learn and show my skills in no time. 

            </p>
          </section>

          {/* Skills */}
          <section className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "MongoDb","JavaScript", "HTML", "CSS", "PHP", "Laravel", "Phpmyadmin"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
              Education
            </h2>
            <p className="text-gray-300">
              <span className="font-bold text-blue-500">Tertiary</span> | UNIVERSITY OF BAGUIO SIT (BSCS) <br />
              JULY 2021 –<br />
              <span className="font-bold text-blue-500">Secondary</span> | MIL-AN NATIONAL SENIOR HIGH SCHOOL (GAS)<br />
              JANUARY 2019 – MARCH 2021<br />
              <span className="font-bold text-blue-500">Secondary</span> | MIL-AN NATIONAL HIGH SCHOOL<br />
              JANUARY 2015 – MARCH 2019<br />
              <span className="font-bold text-blue-500">Elementary</span> | LOAKAN ELEMENTARY SCHOOL<br />
              JANUARY 2010 – MARCH 2015<br />

            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="bg-gray-850 p-6 space-y-10 border-l border-gray-700">
          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-gray-400">Email: kim.jay.s.motal@gmail.com</p>
            <p className="text-gray-400">Phone: 0948-704-1124</p>
          </section>

          {/* Platforms */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Platforms</h2>
            <ul className="space-y-2">
              {[
                { name: "GitHub", url: "https://github.com/KimJay619" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/kim-jay-motal-09436528a/" },
                { name: "Facebook", url: "https://www.facebook.com/jay.motal.3/" },
              ].map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </main>
    </div>
    </div>
  );
};

export default Portfolio;