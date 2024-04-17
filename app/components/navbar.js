import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Navbar() {
  return (
    <nav className="bg-slate-950 p-3 fixed top-0 w-full z-30 font font-mono font-extrabold text-lg text-shadow-outline border-b border-slate-800">
      <div className="flex container mx-auto flex-row justify-between items-center">
        <div className="flex-none">
          <h1>Adam Sutherby</h1>
        </div>
        <ul className="flex flex-row justify-center items-center flex-grow">
          <li className="px-4">About</li>
          <li className="px-4">|</li>
          <li className="px-4">Projects</li>
          <li className="px-4">|</li>
          <li className="px-4">Contact</li>
        </ul>
      <div>
        <ul className="flex flex-row justify-center items-center flex-grow">
          <li className="px-4">
            <a href="https://www.linkedin.com/in/adam-sutherby-86774ab9/">
              <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="px-4">
            <a href="https://github.com/AdamSutherby">
              <FaGithub size={30}/>
            </a>
          </li>
          <li className="px-4">
            <a href="mailto:adamsutherby@gmail.com">
              <MdEmail size={30}/>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
