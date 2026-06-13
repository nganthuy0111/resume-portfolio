export const personalInfo = {
  name: 'NGUYEN THI THUY NGAN',
  title: 'Frontend Developer',
  phone: '0906834024',
  email: 'nttngan0111@gmail.com',
  github: 'https://github.com/nganthuy0111',
  location: 'Phường Long Bình, TP HCM'
};

export const education = [
  {
    school: 'FPT University',
    date: '2022 - 2026',
    degree: 'Bachelor of Information Technology',
    major: 'Software Engineering',
    gpa: '3.1 / 4.0',
    notes: 'Capstone Project: Modern Ritual Offering Service Platform'
  }
];

export const experience = [
  {
    company: 'FPT Software',
    date: '01/2025 - 04/2025',
    title: 'Frontend Developer Intern',
    bullets: [
      'Participated in frontend development for an employee attendance and payroll management system.',
      'Integrated RESTful APIs and implemented business logic for user-facing modules.',
      'Worked with ReactJS, TypeScript, TailwindCSS, Axios, and Git in an Agile environment.'
    ],
    technologies: 'ReactJS, TypeScript, TailwindCSS, Axios, REST API, Git'
  },
  {
    company: 'Revoland',
    date: '06/2025 - 12/2025',
    title: 'Frontend Developer Intern',
    bullets: [
      'Developed real estate web interfaces using Next.js with a focus on user experience and performance optimization.',
      'Implemented SEO-friendly dynamic slug generation for property pages.',
      'Developed property management features for agencies and real estate companies.',
      'Fixed UI issues and improved frontend stability and maintainability.'
    ],
    technologies: 'Next.js, React, TypeScript, REST API, Git, TailwindCSS'
  }
];

export default { personalInfo, education, experience };
