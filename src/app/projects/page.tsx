import Image from 'next/image';

// You can replace this with data from your data files
const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform built with Next.js, Tailwind CSS, and a headless CMS. Includes user authentication, product catalog, shopping cart, and checkout functionality.",
    image: "/images/flipmart.webp",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "Sanity CMS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-1"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS. Features a clean design, dark mode, and smooth animations.",
    image: "/images/portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-2"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality, user authentication, and real-time updates. Built with React, Firebase, and Tailwind CSS.",
    image: "/images/task.webp",
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-3"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecast information for any location. Uses the OpenWeather API and features a responsive design.",
    image: "/weather.png",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-4"
  }
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
                <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
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