'use client';

import { useRef } from 'react';
import Intro from './components/intro'
import Header from './components/header.js'
import Proficiency from './components/proficiency.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
import SpreadsheetLayout from './components/spreadsheet-layout.js'

export default function Page() {
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <div className='bg-slate-950 h-screen w-screen relative'>
      <Header
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <div className="h-12 w-full absolute top-0 z-10 bg-gradient-to-b from-slate-950 to-transparent"></div>
      <div className="overflow-auto max-h-screen">
        <Intro />
        <div ref={aboutRef as React.RefObject<HTMLDivElement>}><About /></div>
        <Proficiency />
        <div ref={projectsRef as React.RefObject<HTMLDivElement>}><Projects /></div>
        <SpreadsheetLayout />
        <div ref={contactRef as React.RefObject<HTMLDivElement>}><Contact /></div>
      </div>
    </div>
  )
}