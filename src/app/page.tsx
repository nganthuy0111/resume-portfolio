import Image from "next/image";
import Link from "next/link";
import skills from "../data/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <section className="bg-white/80 dark:bg-gray-900/60 backdrop-blur rounded-2xl shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              Hi, I'm <span className="text-amber-700">Thuy Ngan</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Frontend Developer — building responsive, accessible, and
              performant web apps with React, Next.js and TypeScript.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/projects"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-5 py-2 rounded-md font-medium shadow"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-amber-700 text-amber-700 hover:bg-amber-50 px-5 py-2 rounded-md font-medium"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                Top skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.slice(0, 6).map((s) => (
                  <span
                    key={s}
                    className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full ring-4 ring-amber-200 dark:ring-amber-700 overflow-hidden mb-4">
              <Image
                src="/images/avt.jpg"
                alt="Thuy Ngan"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center">
              <h4 className="font-semibold">NGUYEN THI THUY NGAN</h4>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([group, list]) => (
              <div
                key={group}
                className="bg-white/80 dark:bg-gray-900/60 p-4 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-lg capitalize mb-3">
                  {group.replace(/([A-Z])/g, " $1")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(list as string[]).map((s) => (
                    <span
                      key={s}
                      className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
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
  );
}
