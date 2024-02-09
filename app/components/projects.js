'use client';

import { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDotnet } from "react-icons/di";
import { SiCsharp, SiXaml } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// List of Icons

const iconComponents = {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaJava,
    FaNodeJs,
    IoLogoJavascript,
    DiDotnet,
    SiCsharp,
    TbBrandNextjs,
    SiXaml
  };

  // List of Projects

const projectList = [
  {
    projectName: "Project 1",
    imgSrc: "path/to/project1-img.jpg",
    gifSrc: "path/to/project1-gif.gif",
    description: "Description of Project 1 lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    githubLink: "https://github.com/project1",
    icons: ["FaCss3Alt", "FaGithub"] // Example icon names
  },
  {
    projectName: "Project 2",
    imgSrc: "path/to/project2-img.jpg",
    gifSrc: "path/to/project2-gif.gif",
    description: "Description of Project 2",
    githubLink: "https://github.com/project2",
    icons: ["FaGithub"] // Example icon names
  },
  // Add more projects as needed
];

const Project = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div className="max-w-3xl mx-auto p-8 mb-12 bg-white rounded-lg shadow-lg">
        <div className="flex items-center">
          <img
            src={isHovered ? project.gifSrc : project.imgSrc}
            alt={project.projectName}
            className="w-32 h-32 object-cover rounded-md mr-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.projectName}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex items-center mb-4">
              <FaGithub className="w-6 h-6 mr-2" />
              <a href={project.githubLink} className="text-blue-500 hover:underline">Github</a>
            </div>
            <div className="flex">
              {project.icons.map((iconName, index) => {
                const IconComponent = iconComponents[iconName];
                return IconComponent ? <IconComponent key={index} className="w-6 h-6 mr-2" /> : null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
};

const Projects = () => {
    return (
      <div className="flex flex-col items-center mt-12">
        {projectList.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    );
};

export default Projects;
