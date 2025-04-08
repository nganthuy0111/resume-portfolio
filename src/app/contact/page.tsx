import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
        Have a question or want to work together? Fill out the form below or reach out via email.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Write your message here"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-2">Or email me at:</p>
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
nttngan0111@gmail.com        </a>

        <div className="mt-4">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
