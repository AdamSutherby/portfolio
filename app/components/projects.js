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
    gifSrc: "https://via.placeholder.com/2000", // Placeholder for gif
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
  const imagePositionClass = index % 2 === 0 ? 'order-1' : 'order-2'
  const descriptionPositionClass = index % 2 === 0 ? 'order-2' : 'order-1'

  return (
    <div className='flex flex-col items-center mx-auto max-w-[75%] p-20 hide text-white'>
      <h2 className='p-6 font-bold' style={{ fontSize: "calc(0.6em + 1vw)" }}>
        {project.projectName}
      </h2>
      <div className='flex flex-row w-full justify-center'>
        <div className={`w-50vw w-1/2 px-4 ${imagePositionClass}`}>
          <img 
            src={isHovered ? project.imgSrc : project.imgSrc}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ maxWidth: "100%" }}
            className='border-4 rounded-lg'
            alt={project.projectName}
          />
        </div>
        <div className={`w-50vw w-1/2 px-4 ${descriptionPositionClass}`} style={{ fontSize: "calc(0.2em + 1vw)" }}>
          <p className='pb-4 text-slate-400'>
            {project.description}
          </p>
          <div className='flex flex-col gap-4'>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className='flex items-center'>
              <FaGithub size={40} />
              <span className='px-2'>Github repo</span>
            </Link>
            {project.projectLink && (
              <Link href={project.projectLink} target="_blank" rel="noopener noreferrer" className='flex items-center'>
                <FaExternalLinkAlt size={35} />
                <span className='px-2'>View Project</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  useEffect(() => {
    const testElement = document.querySelectorAll('.hide')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element is in view!')
          entry.target.classList.add('animate-fade-in')
        }
      })
    })

    testElement.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      testElement.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div className="flex flex-col items-center mt-12 font-mono">
      {projectList.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </div>
  )
}

export default Projects