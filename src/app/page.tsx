import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Thuy Ngan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            FrontEnd Developer & Designer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I create engaging web experiences with modern technologies.
            I'm passionate about building accessible, user-friendly websites
            and applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-md transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
            <Image
              src="/avt.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      
      {/* Featured Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'CSS', 'HTML', 'Tailwind CSS'].map((skill) => (
            <div 
              key={skill} 
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/about"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Learn more about my skills and experience →
          </Link>
        </div>
      </section>
      
    
    </div>
  );
}