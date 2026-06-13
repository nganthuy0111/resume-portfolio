import Link from "next/link";
import {
  personalInfo,
  education,
  experience,
  languages,
} from "../../data/resume";
import skills from "../../data/skills";
import projects from "../../data/project";

export default function Resume() {
  return (
    <div className="container relative mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>

      <div className="mb-8 text-center">
        {/* Desktop: absolute top-right; Mobile: fixed bottom-right */}
        <a
          href="/NguyenThiThuyNgan_CV.pdf"
          download
          className="hidden md:inline-block absolute top-6 right-6 bg-amber-700 hover:bg-amber-800 text-white px-5 py-2 rounded-md transition shadow-lg"
        >
          Download Resume
        </a>

        <a
          href="/NguyenThiThuyNgan_CV.pdf"
          download
          className="md:hidden fixed bottom-6 right-4 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-full transition shadow-lg"
        >
          Download
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column: personal + skills */}
        <aside className="md:col-span-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">{personalInfo.name}</h2>
          <p className="text-orange-700 font-medium mb-4">
            {personalInfo.title}
          </p>

          <div className="space-y-2 mb-6">
            <p>
              <strong>Phone:</strong> {personalInfo.phone}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-600"
              >
                {personalInfo.email}
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                {personalInfo.github}
              </a>
            </p>
            <p>
              <strong>Location:</strong> {personalInfo.location}
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="mb-4">
            <p className="font-semibold">Frontend:</p>
            <p className="text-sm">{skills.frontend.join(", ")}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Backend:</p>
            <p className="text-sm">{skills.backend.join(", ")}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Databases:</p>
            <p className="text-sm">{skills.databases.join(", ")}</p>
          </div>
          <div>
            <p className="font-semibold">Tools:</p>
            <p className="text-sm">{skills.tools.join(", ")}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <ul className="text-sm space-y-3">
              {languages.map((l) => (
                <li key={l.name} className="">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{l.flag}</span>
                      <span className="font-medium">{l.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {l.level}
                    </span>
                  </div>

                  <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-amber-600 dark:bg-amber-500"
                      style={{ width: `${l.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right column: summary, experience, projects, education */}
        <main className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Software Engineering student with internship experience in
              frontend development using ReactJS, Next.js, TypeScript, and React
              Native. Experienced in building responsive user interfaces,
              integrating RESTful APIs, and collaborating within Agile teams.
              Familiar with backend development using ASP.NET Core and database
              management. Passionate about creating user-friendly applications
              and continuously improving frontend development skills.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Work Experience
            </h2>
            {experience.map((job, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <span className="text-sm text-gray-500">{job.date}</span>
                </div>
                <p className="font-medium text-orange-700 mt-1">{job.title}</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <p className="mt-2">
                  <strong>Technologies:</strong> {job.technologies}
                </p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Projects</h2>
            {projects.map((p, i) => (
              <div key={i} className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-sm text-gray-500">{p.date}</span>
                </div>
                <p className="font-medium text-orange-700 mt-1">{p.role}</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  {p.bullets.map((b, ii) => (
                    <li key={ii}>{b}</li>
                  ))}
                </ul>
                <p className="mt-2">
                  <strong>Technologies:</strong> {p.technologies.join(", ")}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
            {education.map((e, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-lg font-semibold">
                  {e.school} | {e.date}
                </h3>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm">
                  Major: {e.major} • GPA: {e.gpa}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {e.notes}
                </p>
              </div>
            ))}
          </section>
        </main>
      </div>

      {/* Contact call-to-action removed */}
    </div>
  );
}
