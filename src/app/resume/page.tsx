import Link from 'next/link';

// You can replace this with data from your data files
const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    date: "2018 - 2022",
    description: "Graduated with honors. Focused on web development and software engineering."
  }
];

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Company Name",
    date: "2022 - Present",
    description: "Developed and maintained responsive web applications using React and Next.js. Collaborated with design team to implement UI/UX improvements."
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "Internship Company",
    date: "2021 - 2022",
    description: "Assisted in developing frontend components using HTML, CSS, and JavaScript. Learned industry best practices for web development."
  }
];

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>
      
      <div className="mb-8 text-center">
        <a 
          href="/NguyenThiThuyNgan_CV.pdf" 
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition inline-block"
        >
          Download Resume PDF
        </a>
      </div>
      
      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
        {educationData.map((item) => (
          <div key={item.id} className="mb-6">
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">{item.school}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">{item.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </section>
      
      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Experience</h2>
        {experienceData.map((item) => (
          <div key={item.id} className="mb-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">{item.company}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">{item.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </section>
      
      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'Responsive Design', 'UI/UX', 'RESTful APIs'].map((skill) => (
            <div 
              key={skill} 
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
        <Link 
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition inline-block"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}