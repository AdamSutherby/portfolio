'use client';

import { useState, useEffect } from 'react';
import { Link } from 'next/link';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDotnet } from "react-icons/di";
import { SiCsharp, SiXaml } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
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
    projectName: "Scheduling Application",
    imgSrc: "https://via.placeholder.com/1000",
    gifSrc: "https://via.placeholder.com/2000", // Placeholder for gif
    description: "A basic scheduler prototype developed using C# and Maui Blazor. This lightweight yet powerful tool simplifies scheduling tasks and appointments with ease. Seamlessly integrating Maui Blazor's capabilities, our prototype offers a user-friendly interface and efficient performance. Experience the convenience of managing your schedule effortlessly with our innovative solution.",
    githubLink: "https://github.com/AdamSutherby/Group13FinalProject",
  },
  {
    projectName: "ARIS Capstone Project",
    imgSrc: "/images/project2.png",
    gifSrc: "https://via.placeholder.com/2000",
    description: "Our in-house software digitalizes information from water samples and their chain of custody, simplifying the process of tracking and managing sample data. Designed for internal use, this solution enhances our efficiency in managing environmental data, ensuring accurate records and compliance with industry standards.",
    githubLink: "https://github.com/project2",
  },
  {
    projectName: "Portfolio Website",
    imgSrc: "/images/project3.png",
    gifSrc: "https://via.placeholder.com/2000",
    description: "Explore my software developer portfolio project built using React Native and Next.js, powered by Tailwind CSS for sleek styling. Experience seamless integration across mobile and web platforms, highlighting my proficiency in modern development tools. If you didn't notice, this is the project you're currently viewing!",
    githubLink: "https://github.com/AdamSutherby/portfolio",
  },
];

const Project = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imagePositionClass = index % 2 === 0 ? 'order-1' : 'order-2';
  const descriptionPositionClass = index % 2 === 0 ? 'order-2' : 'order-1';

  return (
    <div className='flex flex-col items-center mx-auto max-w-[75%] p-20 hide'>
        <h2 className='p-6 font-bold' style={{ fontSize: "calc(0.6em + 1vw)" }}>
          {project.projectName}
        </h2>
        <div className='flex flex-row w-full justify-center'>
          <div className={`w-50vw w-1/2 px-4 ${imagePositionClass}`}>
            <img src={isHovered ? project.imgSrc : project.imgSrc}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
                 style={{ maxWidth: "100%" }}
                 className='border-4 rounded-lg'
            />
          </div>
          <div className={`w-50vw w-1/2 px-4 ${descriptionPositionClass}`} style={{ fontSize: "calc(0.2em + 1vw)" }}>
            <p className='pb-4 text-slate-400'>
              {project.description}
            </p>
            <div>
              <a href={project.githubLink}>
              <div className='flex flex-row pb-4'>
              <FaGithub size={40}/>
              <div className='px-2'/>
              Github repo
              </div>
              </a>
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
    <div className="flex flex-col items-center mt-12 font-mono">
      {projectList.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;