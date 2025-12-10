import Typewriter from "./Typewriter"
import { useState } from "react"

export default function Hero() {
  const [startTyping, setStartTyping] = useState(false)

  return (
    <div className="relative w-full h-screen overflow-hidden" id="hero">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        onPlay={() => setStartTyping(true)}
      >
        <source src="/5.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center text */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="font-UrbancatRg text-white text-7xl font-bold text-center leading-none">
          {startTyping && (
            <Typewriter 
              words={[
                "You're Doing Too Many Things!",
                "Spending Hours Collecting Data,",
                "Replying To Clients,",
                "Calculating Predictions,",
                "Or Repeating Tedious Tasks!",
                "Let AI Do That For You!"
              ]}
            />
          )}
        </h1>
      </div>
    </div>
  )
}
