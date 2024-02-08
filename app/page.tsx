import Intro from './components/intro'
import NavBar from './components/navBar.js'

export default function Page() {
  return (
    <div className='bg-violet-950 h-screen w-screen fixed top-0 left-0'>
      <NavBar />
      <Intro />
    </div>
  )
}