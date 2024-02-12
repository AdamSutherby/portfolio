'use client';

import { useState, useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDotnet } from "react-icons/di";
import { SiCsharp, SiXaml } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { PiVideoFill } from "react-icons/pi";
import './styles.css';


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
    imgSrc: "https://via.placeholder.com/1000",
    gifSrc: "https://via.placeholder.com/2000",
    description: "Description of Project 1 lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    githubLink: "https://github.com/project1",
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    icons: ["FaCss3Alt", "FaGithub"]
  },
  {
    projectName: "Project 2",
    imgSrc: "https://via.placeholder.com/1000",
    gifSrc: "https://via.placeholder.com/2000",
    description: "Description of Project 2",
    githubLink: "https://github.com/project2",
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    icons: ["FaGithub"]
  },
];

const Project = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imagePositionClass = index % 2 === 0 ? 'order-1' : 'order-2';
  const descriptionPositionClass = index % 2 === 0 ? 'order-2' : 'order-1';

  return (
    <div className='flex flex-col items-center mx-auto max-w-[75%] p-20 hide'>
        <h2 className='p-6' style={{ fontSize: "calc(0.6em + 1vw)" }}>
          {project.projectName}
        </h2>
        <div className='flex flex-row w-full justify-center'>
          <div className={`w-50vw w-1/2 px-4 ${imagePositionClass}`}>
            <img src={isHovered ? project.gifSrc : project.imgSrc}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
                 style={{ maxWidth: "100%" }}
            />
          </div>
          <div className={`w-50vw w-1/2 px-4 ${descriptionPositionClass}`} style={{ fontSize: "calc(0.2em + 1vw)" }}>
            <p className='pb-4'>
              {project.description}
            </p>
            <div className='flex flex-row'>
              <FaGithub size={40}/>
              <div className='px-2'/>
              {project.githubLink}
            </div>
            <div className='flex flex-row'>
              <PiVideoFill size={40}/>
              <div className='px-2'/>
              {project.videoLink}
              </div>
          </div>
        </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    const testElement = document.querySelectorAll('.hide');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element is in view!');
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    testElement.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      testElement.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-12">
      {projectList.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;