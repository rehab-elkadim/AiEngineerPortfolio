
import { useEffect, useRef } from "react"
export default function Services() {
  return (
    <section className="w-full py-24 bg-[#0f0f0f] text-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-5xl font-[future] mb-12">
          My <span className="text-green-400">Packages</span>
        </h2>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BASIC PACKAGE */}
          <PricingCard
  title="BASIC"
  price="$79"
  features={[
    "One focused AI solution (prediction, classification, chatbot, or small automation)",
    "Model trained and optimized for your specific use-case",
    "Lightweight UI or API endpoint included",
    "Dataset preprocessing + evaluation",
    "Delivery: 3–5 business days",
    "Support for bug fixes (3 months)",
    "Best for: quick tools, prototypes, MVP features"
  ]}
/>


          {/* STANDARD PACKAGE */}
          <PricingCard
  title="STANDARD"
  price="$129"
  features={[
    "Full AI system (prediction engine, automation pipeline, intelligent chatbot, or data harvester)",
    "Advanced model tuning for higher accuracy & performance",
    "Backend integration (Node / Python) + database support",
    "Interactive dashboard or frontend interface included",
    "Dataset cleaning, validation, & reporting",
    "Delivery: 5–9 business days",
    "Support (6 months)",
    "Best for: teams building a ready-to-use AI solution"
  ]}
/>


          {/* PREMIUM PACKAGE */}
          <PricingCard
  title="PREMIUM"
  price="$189"
  features={[
    "Fully custom AI system designed from scratch for your business",
    "Combine multiple capabilities (prediction + automation + chatbot + scraping)",
    "Full-stack integration (React + Node/Python + databases + APIs)",
    "Deployment, hosting setup, and technical documentation",
    "Continuous model monitoring & fine-tuning",
    "Priority delivery: 3–7 days depending on scope",
    "Support (12 months)",
    "Best for: scaling teams, enterprise workflows, and long-term automation"
  ]}
/>

        </div>
      </div>
    </section>
  )
}

/* ------------------ Card Component ------------------ */
type PricingProps = {
  title: string
  price: string
  features: string[]
}

function PricingCard({ title, price, features }: PricingProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.classList.add("animate")
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="card-coin h-full">
      <div
        ref={cardRef}
        className="
          card-inner h-full flex flex-col
          bg-[#121212] border border-white/10 rounded-3xl 
          p-8 justify-between shadow-lg
          min-h-[500px]
        "
      >
        <div>
          <div className="flex justify-between text-gray-300 text-sm mb-2">
            <span className="font-semibold">{title}</span>

          </div>

          <h3 className="text-green-400 text-5xl font-semibold mb-1">
            {price}
            <span className="text-white text-lg ml-1 font-normal">/ hour</span>
          </h3>

          <hr className="border-white/10 my-4" />

          <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
            {features.map((item: string, i:number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          className="
            mt-6 w-full py-3 rounded-full 
            bg-green-400 text-black font-semibold
            hover:bg-green-500 transition
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
