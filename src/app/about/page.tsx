import Image from "next/image";
import { personalInfo, education, experience } from "../../data/resume";
import skills from "../../data/skills";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <aside className="md:col-span-1 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 ring-4 ring-amber-200 dark:ring-amber-700">
              <Image
                src="/images/avt.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold">{personalInfo.name}</h2>
            <p className="text-amber-700 font-medium mb-3">
              {personalInfo.title}
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>{personalInfo.location}</p>
              <p className="mt-2">
                Phone:{" "}
                <a href={`tel:${personalInfo.phone}`} className="text-blue-600">
                  {personalInfo.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600"
                >
                  GitHub
                </a>
              </p>
            </div>
          </aside>

          <div className="md:col-span-2">
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">
                Professional Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Software Engineering student with internship experience in
                frontend development using ReactJS, Next.js, TypeScript, and
                React Native. Experienced in building responsive user
                interfaces, integrating RESTful APIs, and collaborating within
                Agile teams. Familiar with backend development using ASP.NET
                Core and database management. Passionate about creating
                user-friendly applications and continuously improving frontend
                development skills.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Work Experience</h3>
              {experience.map((job, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">
                      {job.title} — {job.company}
                    </h4>
                    <span className="text-sm text-gray-500">{job.date}</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Education</h3>
              {education.map((e, i) => (
                <div key={i} className="mb-2">
                  <h4 className="font-semibold">
                    {e.school} — {e.degree}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {e.date} • Major: {e.major} • GPA: {e.gpa}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    {e.notes}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(skills).map(([group, list]) => (
                  <div
                    key={group}
                    className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <h4 className="font-medium mb-2 capitalize">
                      {group.replace(/([A-Z])/g, " $1")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(list as string[]).map((s) => (
                        <span
                          key={s}
                          className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
