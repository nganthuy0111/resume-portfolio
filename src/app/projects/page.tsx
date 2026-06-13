import Image from "next/image";

// You can replace this with data from your data files
const projectsData = [
  {
    id: 1,
    title: "Modern Ritual Offering Service Platform (Capstone Project)",
    description:
      "Developed an online platform for ritual offering services and ceremonial product management. Built backend services using ASP.NET Core and SQL Server. Implemented product approval workflows for administrative staff. Integrated Gemini AI for content moderation and AI-powered customer support chatbot.",
    image: "/images/mam-cung-day-thang-be-gai-10.jpg",
    technologies: [
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework Core",
      "JWT Authentication",
      "Gemini AI",
    ],
    demoUrl: "https://mamcung.shop",
    githubUrl:
      "https://github.com/nganthuy0111/SEP490_Modern_ritual_offering_platform_api",
  },
  {
    id: 2,
    title: "Second-hand EV & Battery Trading Platform",
    description:
      "Developed mobile application interfaces for trading used electric vehicles and batteries. Implemented transaction workflows and optimized user experience across mobile devices.",
    image: "/images/ev-car.webp",
    technologies: [
      "React Native",
      "Mobile UI",
      "APIs",
      "Transaction Workflows",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/gwang08/Mobile_Evmarket",
  },
  {
    id: 3,
    title: "HIV Treatment and Medical Services System",
    description:
      "Developed frontend modules for patient check-in and medication dispensing workflows. Integrated APIs and implemented validation logic for healthcare operations.",
    image: "/images/hiv.jpeg",
    technologies: ["React", "Validation", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com/nganthuy0111/SDN302_MedicalTreatment",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded transition"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
