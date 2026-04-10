import CosmosBackground from './components/shared/CosmosBackground'
import CursorGlow from './components/shared/CursorGlow'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import About from './components/hero/About'
import SkillsGalaxy from './components/skills/SkillsGalaxy'
import Projects from './components/projects/Projects'
import Timeline from './components/timeline/Timeline'
import Hackathons from './components/hackathons/Hackathons'
import OpenSource from './components/opensource/OpenSource'
import Contact from './components/contact/Contact'
import Footer from './components/shared/Footer'

export default function App() {
  return (
    <>
      <CosmosBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsGalaxy />
        <Projects />
        <Timeline />
        <Hackathons />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
