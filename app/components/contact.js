import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xnqewqqa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('Form data submitted successfully!');
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle submission error
        console.error('Failed to submit form data.');
        setSubmissionError('Failed to submit form data. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      setSubmissionError('An unexpected error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="mt-24 px-4 lg:px-0">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact Me</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-white text-lg mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full py-3 px-4 bg-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-white text-lg mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full py-3 px-4 bg-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-white text-lg mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full py-3 px-4 bg-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 mb-12">
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </button>
          {submissionError && <p className="text-red-500">{submissionError}</p>}
        </div>
      </form>
      <div>
      <ul className="flex flex-row justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <li>
          <a
            href="https://www.linkedin.com/in/adam-sutherby-86774ab9/"
            className="inline-block text-white transition-transform transform-gpu hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AdamSutherby"
            className="inline-block text-white transition-transform transform-gpu hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
          </a>
        </li>
        <li>
          <a
            href="mailto:adamsutherby@gmail.com"
            className="inline-block text-white transition-transform transform-gpu hover:scale-110"
            aria-label="Email"
          >
            <MdEmail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Contact;
