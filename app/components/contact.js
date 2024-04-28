import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log({ name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="mt-24 px-4 lg:px-0">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact Me</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-white text-lg mb-2"></label>
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
          <label htmlFor="email" className="block text-white text-lg mb-2"></label>
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
          <label htmlFor="message" className="block text-white text-lg mb-2"></label>
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
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 mb-12">Send Message</button>
        </div>
      </form>
      <div>
          <ul className="flex flex-row justify-center items-center flex-grow mb-2">
            <li className="px-10">
              <a href="https://www.linkedin.com/in/adam-sutherby-86774ab9/" className="inline-block transition-transform transform-gpu hover:scale-110">
                <FaLinkedin size={60}/>
              </a>
            </li>
            <li className="px-10">
              <a href="https://github.com/AdamSutherby" className="inline-block transition-transform transform-gpu hover:scale-110">
                <FaGithub size={60}/>
              </a>
            </li>
            <li className="px-10">
              <a href="mailto:adamsutherby@gmail.com" className="inline-block transition-transform transform-gpu hover:scale-110">
                <MdEmail size={60}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Contact;
