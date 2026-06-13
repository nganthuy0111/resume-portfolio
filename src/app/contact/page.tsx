import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
        Have a question or want to work together? Fill out the form below or
        reach out via email.
      </p>

      <ContactForm />

      <div className="mt-12 text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-2">Or email me at:</p>
        <a
          href="mailto:nttngan0111@gmail.com"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          nttngan0111@gmail.com
        </a>

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
