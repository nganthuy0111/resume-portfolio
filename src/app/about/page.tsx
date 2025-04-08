import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  // Services offered
  const services = [
    {
      title: "Web Development",
      description: "Creation of modern, responsive websites and web applications using the latest technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Design of intuitive and engaging user interfaces that provide excellent user experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Responsive Design",
      description: "Creation of websites that work seamlessly across all devices, from smartphones to desktops.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "SEO Optimization",
      description: "Optimizing websites to improve search engine rankings and increase organic traffic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  // Tool & technologies
  const techSkills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git", level: 80 },
    { name: "Figma", level: 75 },
    { name: "Responsive Design", level: 90 },
    { name: "Testing", level: 70 },
    { name: "GraphQL", level: 65 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r animated-bg text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg mb-6 opacity-90">
                Hi, I'm Thuy Ngan, a passionate web developer with expertise in creating modern, 
                user-friendly websites and applications. I specialize in frontend development 
                with React and Next.js, and have a strong foundation in UI/UX design principles.
              </p>
              <p className="text-lg mb-8 opacity-90">
                I'm dedicated to crafting efficient, scalable, and maintainable code that 
                delivers exceptional user experiences. I love solving complex problems and 
                continuously learning new technologies to stay at the cutting edge of web development.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/avt.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12 text-center mx-auto">My Journey</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">How It Started</h3>
              <p className="text-[var(--text-light)] mb-6">
                My journey in web development began during university when I created my first 
                website using HTML and CSS. Fascinated by the power of creating something that 
                people could interact with online, I delved deeper into JavaScript and modern 
                frameworks.
              </p>
              <p className="text-[var(--text-light)] mb-6">
                After graduating with a degree in Computer Science, I joined a startup where 
                I had the opportunity to work on diverse projects that expanded my skill set 
                and strengthened my problem-solving abilities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Where I Am Now</h3>
              <p className="text-[var(--text-light)] mb-6">
                Currently, I work as a Frontend Developer at FPT Software, where I build 
                responsive web applications using modern technologies like React, Next.js, and 
                Tailwind CSS. I've had the privilege of working on projects that impact thousands 
                of users daily.
              </p>
              <p className="text-[var(--text-light)] mb-6">
                Outside of my day job, I enjoy contributing to open-source projects and sharing 
                my knowledge through blog posts and mentoring junior developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12 text-center mx-auto">Services I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card p-8 text-center hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-[var(--primary)] mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[var(--text-light)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12 text-center mx-auto">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {techSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[var(--text-light)] text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12 text-center mx-auto">Why Work With Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="text-4xl font-bold text-[var(--accent)] mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">Quality-Focused</h3>
              <p className="text-[var(--text-light)]">
                I prioritize writing clean, maintainable code that follows best practices and 
                delivers exceptional user experiences. I believe in doing things right the first time.
              </p>
            </div>
            <div className="card p-8">
              <div className="text-4xl font-bold text-[var(--accent)] mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">Problem Solver</h3>
              <p className="text-[var(--text-light)]">
                I enjoy tackling complex challenges and finding elegant solutions. I approach 
                each project with analytical thinking and creative problem-solving.
              </p>
            </div>
            <div className="card p-8">
              <div className="text-4xl font-bold text-[var(--accent)] mb-6">03</div>
              <h3 className="text-xl font-bold mb-4">Continuous Learner</h3>
              <p className="text-[var(--text-light)]">
                The tech world evolves rapidly, and I'm committed to staying updated with the 
                latest tools and technologies. I constantly expand my skills to deliver modern solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-lg text-[var(--text-light)] mb-10 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities. 
            If you're looking for a dedicated developer to bring your ideas to life, let's connect!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <Link href="/projects" className="btn-outline">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}