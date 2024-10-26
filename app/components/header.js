'use client'

import { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Header({ scrollToAbout, scrollToProjects, scrollToContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (action) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-950 p-3 fixed top-0 w-full z-30 font-mono font-extrabold text-lg text-shadow-outline border-b border-slate-800 text-white">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row justify-between items-center">
          <div className="flex-none">
            <h1>Adam Sutherby</h1>
          </div>
          <ul className="flex flex-row justify-center items-center flex-grow">
            <li className="px-4 hover:scale-110 cursor-pointer" onClick={() => handleNavClick(scrollToAbout)}>About</li>
            <li className="px-4 text-slate-600">|</li>
            <li className="px-4 hover:scale-110 cursor-pointer" onClick={() => handleNavClick(scrollToProjects)}>Projects</li>
            <li className="px-4 text-slate-600">|</li>
            <li className="px-4 hover:scale-110 cursor-pointer" onClick={() => handleNavClick(scrollToContact)}>Contact</li>
          </ul>
          <div>
            <ul className="flex flex-row justify-center items-center">
              <li className="px-4">
                <a href="https://www.linkedin.com/in/adam-sutherby-86774ab9/" 
                   className="inline-block transition-transform hover:scale-110"
                   target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30}/>
                </a>
              </li>
              <li className="px-4">
                <a href="https://github.com/AdamSutherby" 
                   className="inline-block transition-transform hover:scale-110"
                   target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30}/>
                </a>
              </li>
              <li className="px-4">
                <a href="mailto:adamsutherby@gmail.com" 
                   className="inline-block transition-transform hover:scale-110">
                  <MdEmail size={30}/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center">
          <h1>Adam Sutherby</h1>
          <button 
            onClick={toggleMenu}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-slate-950 border-b border-slate-800 mt-3">
            <div className="flex flex-col p-4 space-y-4">
              <ul className="flex flex-col space-y-4 items-center">
                <li className="w-full text-center py-2 hover:bg-slate-800 rounded-lg cursor-pointer"
                    onClick={() => handleNavClick(scrollToAbout)}>
                  About
                </li>
                <li className="w-full text-center py-2 hover:bg-slate-800 rounded-lg cursor-pointer"
                    onClick={() => handleNavClick(scrollToProjects)}>
                  Projects
                </li>
                <li className="w-full text-center py-2 hover:bg-slate-800 rounded-lg cursor-pointer"
                    onClick={() => handleNavClick(scrollToContact)}>
                  Contact
                </li>
              </ul>
              <div className="border-t border-slate-800 pt-4">
                <ul className="flex flex-row justify-center items-center space-x-8">
                  <li>
                    <a href="https://www.linkedin.com/in/adam-sutherby-86774ab9/" 
                       className="inline-block transition-transform hover:scale-110"
                       target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={24}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/AdamSutherby" 
                       className="inline-block transition-transform hover:scale-110"
                       target="_blank" rel="noopener noreferrer">
                      <FaGithub size={24}/>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:adamsutherby@gmail.com" 
                       className="inline-block transition-transform hover:scale-110">
                      <MdEmail size={24}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}