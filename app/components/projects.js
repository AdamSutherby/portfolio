'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { DiDotnet } from "react-icons/di"
import { SiCsharp, SiXaml } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

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
}

// List of Projects
const projectList = [
  {
    projectName: "Echoes of Wisdom 100% Helper",
    imgSrc: "/images/project1.png",
    gifSrc: "https://via.placeholder.com/2000",
    description: "This web app is a comprehensive 100% completion tool designed to enhance the user experience for The Legend of Zelda: Echoes of Wisdom. It includes a dynamic checklist for tracking both quests and collectible Echoes, giving players a clear path to full game completion. Additionally, it features an in-depth Smoothie Recipe Calculator that assists players in crafting in-game smoothies. By accounting for each player's available ingredients, the calculator suggests recipes that help users check off all recipes in the game, maximizing resource efficiency and guiding users towards their 100% completion goal",
    githubLink: "https://github.com/AdamSutherby/EowHelper",
    projectLink: "https://eow-hundo-helper.vercel.app",
  },
  {
    projectName: "ARIS Capstone Project",
    imgSrc: "/images/project2.png",
    gifSrc: "https://via.placeholder.com/2000",
    description: "Our in-house software digitalizes information from water samples and their chain of custody, simplifying the process of tracking and managing sample data. Designed for internal use, this solution enhances our efficiency in managing environmental data, ensuring accurate records and compliance with industry standards. The Github link below is a placeholder as the project is under strict NDA.",
    githubLink: "https://en.wikipedia.org/wiki/Non-disclosure_agreement",
  },
  {
    projectName: "Portfolio Website",
    imgSrc: "/images/project3.png",
    gifSrc: "https://via.placeholder.com/2000",
    description: "Explore my software developer portfolio project built using React Native and Next.js, powered by Tailwind CSS for sleek styling. Experience seamless integration across mobile and web platforms, highlighting my proficiency in modern development tools. If you didn't notice, this is the project you're currently viewing!",
    githubLink: "https://github.com/AdamSutherby/portfolio",
    projectLink: "https://adamsutherby.vercel.app",
  },
]

const Project = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    const element = document.getElementById(`project-${index}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [index])

  return (
    <div 
      id={`project-${index}`}
      className={`flex flex-col items-center mx-auto w-full max-w-7xl p-4 md:p-8 lg:p-16 xl:p-20 text-white transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-8'>
        {project.projectName}
      </h2>
      <div className='flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-6 md:gap-12 lg:gap-16'>
        <div className='w-full md:w-3/5 lg:w-2/3 relative overflow-hidden rounded-lg aspect-video'>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 z-10"></div>
          <img 
            src={isHovered ? project.gifSrc : project.imgSrc}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='w-full h-full object-cover transition-opacity duration-300'
            alt={project.projectName}
          />
        </div>
        <div className='w-full md:w-2/5 lg:w-1/3 flex flex-col justify-between'>
          <p className='text-sm md:text-base lg:text-lg xl:text-xl text-slate-400 mb-6'>
            {project.description}
          </p>
          <div className='flex flex-col gap-4'>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                  className='flex items-center text-sm md:text-base lg:text-lg hover:text-blue-400 transition-colors duration-300'>
              <FaGithub size={24} className="mr-2" />
              <span>Github repo</span>
            </Link>
            {project.projectLink && (
              <Link href={project.projectLink} target="_blank" rel="noopener noreferrer" 
                    className='flex items-center text-sm md:text-base lg:text-lg hover:text-blue-400 transition-colors duration-300'>
                <FaExternalLinkAlt size={20} className="mr-2" />
                <span>View Project</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-6 font-mono space-y-16 md:space-y-24 lg:space-y-32 w-full">
      {projectList.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </div>
  )
}

export default Projects