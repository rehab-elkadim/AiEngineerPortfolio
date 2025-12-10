import { createFileRoute } from '@tanstack/react-router'
import Hero from "../components/Hero"
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Upwork from '@/components/Upwork'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return(
    <>
    <Hero />
    <Navbar/>
    <Projects/>
    <Services/>
    <About/>
    <Upwork/>
    </>
    
  ) 
}
