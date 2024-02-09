import Intro from './components/intro'
import NavBar from './components/navBar.js'
import Proficiency from './components/proficiency.js'
import About from './components/about.js'
import Projects from './components/projects.js'

export default function Page() {
  return (
    <div className='bg-slate-950 h-screen w-screen relative'>
      <NavBar />
      <div className="h-12 w-full absolute top-0 z-10 bg-gradient-to-b from-slate-950 to-transparent"></div>
      <div className="overflow-auto max-h-screen">
        <Intro />
        <About />
        <Proficiency />
        <Projects />
      </div>
      <div className="h-20 w-full absolute bottom-0 z-10">
        <div className="h-full w-full bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>
    </div>
  )
}
