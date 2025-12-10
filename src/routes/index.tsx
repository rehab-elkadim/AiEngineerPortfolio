import { createFileRoute } from '@tanstack/react-router'
import Hero from "../components/Hero"
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Upwork from '@/components/Upwork'
import Loader from '@/components/Loader'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return(
    <>
    <Loader/>
    <Hero />
    <Navbar/>
    <Projects/>
    <Services/>
    <About/>
    <Upwork/>
    </>
    
  ) 
}
