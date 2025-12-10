import { useEffect, useRef } from "react"
import type { JSX } from "react"

export default function Projects() {
  const projects = [
    {
      title: "Website Data Harvester",
      hook: "Imagine turning any website into clean, ready-to-use leads — instantly.",
      offer: (
        <>
          Extract names, emails, phones, and addresses with{" "}
          <span className="text-green-400 font-semibold">97% accuracy</span>.
          Fully automated. Sends data directly into Excel or your CRM.
        </>
      ),
      video: "/7.mp4",
      link: "https://github.com/Ammar-Maamoun/Let-there-be-mind/blob/main/Scraping-template.py",
    },

    {
      title: "Stock Prediction Model (LSTM)",
      hook: "What if your trading insights came from a model that never gets tired?",
      offer: (
        <>
          A deep-learning LSTM forecasting engine with{" "}
          <span className="text-green-400 font-semibold">0.95+ accuracy</span>.
          Tracks patterns humans miss — delivering stronger, cleaner analysis.
        </>
      ),
      video: "/trading1.mp4",
      link: "https://github.com/Ammar-Maamoun/Let-there-be-mind/blob/Yahoo-stock-prediction/README.md",
    },

    {
      title: "Emotion Detection System",
      hook: "Know how your customers feel — without asking them.",
      offer: (
        <>
          An AI engine that reads voice, text, or images and identifies emotions with{" "}
          <span className="text-green-400 font-semibold">75% accuracy</span>.
          Perfect for call centers, chatbots, UX and telehealth.
        </>
      ),
      video: "/emotions1.mp4",
      link: "https://github.com/Ammar-Maamoun/CodeAlpha/blob/main/Emotions%20Speech%20recognition%20project.py",
    },

    {
      title: "Automated Trading Bot",
      hook: "What would happen if your trades executed themselves — perfectly every time?",
      offer: (
        <>
          Ultra-fast bot with{" "}
          <span className="text-green-400 font-semibold">under 100ms</span> latency
          and up to{" "}
          <span className="text-green-400 font-semibold">20% monthly ROI</span>.
          Built for Binance / MT4 / MT5.
        </>
      ),
      video: "/trading.mp4",
      link: "https://github.com/Ammar-Maamoun/Trading_bot/blob/main/trade_bot_crypto_ibkr.py",
    },

    {
      title: "Bank Client Conversion Predictor",
      hook: "What if you knew which client would convert before you even called?",
      offer: (
        <>
          Predict conversion likelihood with{" "}
          <span className="text-green-400 font-semibold">89.74% accuracy</span>.
          Reduce waste. Target smarter. Scale faster.
        </>
      ),
      video: "/90.mp4",
      link: "https://github.com/Ammar-Maamoun/Let-there-be-mind/tree/Bank-marketing",
    },
  ]

  return (
    <section className="py-24 bg-[#0f0f0f] text-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-[future] mb-16">
          My <span className="text-green-400">Projects</span>
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------ Project Card ------------------ */

type Project = {
  title: string
  hook: string
  offer: JSX.Element
  video: string
  link: string
}

function ProjectCard({ title, hook, offer, video, link }: Project) {
  const videoRef = useRef<any>(null)

  // ▶️ Auto-play when visible
  useEffect(() => {
    const element = videoRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) element.play()
          else {
            element.pause()
            element.currentTime = 0
          }
        })
      },
      { threshold: 0.6 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center">

      {/* VIDEO CARD */}
      <a
        href={link}
        target="_blank"
        className="w-full md:w-[48%] rounded-[2rem] overflow-hidden cursor-pointer"
      >
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause()
            e.currentTarget.currentTime = 0
          }}
        />
      </a>

      {/* TEXT SIDE */}
      <div className="md:w-[45%] space-y-5">
        
        <p className="text-2xl md:text-3xl font-[future] text-white leading-snug">
          {hook}
        </p>

        <h3 className="text-3xl font-[future] text-green-400">{title}</h3>

        <p className="text-gray-300 leading-relaxed text-lg">{offer}</p>

        <a
          href={link}
          target="_blank"
          className="text-gray-400 underline underline-offset-4 hover:text-white transition text-sm"
        >
          View Project →
        </a>
      </div>
    </div>
  )
}
