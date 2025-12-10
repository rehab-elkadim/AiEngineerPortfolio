import { Home, User, Briefcase, DollarSign } from "lucide-react"
import { useState, useEffect } from "react"
import type React from "react"

export default function Navbar() {
  const [active, setActive] = useState("hero")

  /* ---------------------- SCROLL SPY ---------------------- */
  useEffect(() => {
  const sections = ["hero", "projects", "about", "services", "upwork"]

  const observers = sections.map((id) => {
    const el = document.getElementById(id)
    if (!el) return null

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    )

    obs.observe(el)
    return obs
  })

  return () => observers.forEach((obs) => obs?.disconnect())
}, [])


  /* ---------------------- CLICK TO SCROLL ---------------------- */
  const scrollTo = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div
      className="
        fixed right-8 top-1/2 -translate-y-1/2
        bg-[#1b1b1b]/80 backdrop-blur-lg
        border border-white/10
        rounded-full
        p-3 flex flex-col gap-4 shadow-xl
        pointer-events-auto z-50
      "
    >

      <NavButton
        icon={<Home size={18} />}
        active={active === "hero"}
        onClick={() => scrollTo("hero")}
      />

      <NavButton
        icon={<Briefcase size={18} />}
        active={active === "projects"}
        onClick={() => scrollTo("projects")}
      />

     

      <NavButton
        icon={<DollarSign size={18} />}
        active={active === "services"}
        onClick={() => scrollTo("services")}
      />
       <NavButton
        icon={<User size={18} />}
        active={active === "about"}
        onClick={() => scrollTo("about")}
      />
      <NavButton
        icon={<img src="/upwork.png" className="w-4 h-4" />}
        active={active === "upwork"}
        onClick={() => scrollTo("upwork")}
      />
    </div>
  )
}
type NavButtonProps = {
  icon: React.ReactNode
  active: boolean
  onClick: () => void
}
function NavButton({ icon, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-10 h-10 flex items-center justify-center
        rounded-full border border-white/10 transition
        ${active
          ? "bg-green-500/20 text-green-400 border-green-400/40"
          : "bg-white/5 text-gray-300 hover:bg-white/10"}
      `}
    >
      {icon}
    </button>
  )
}
