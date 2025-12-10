export default function About() {
  return (
    <section className="w-full py-24 bg-[#0f0f0f] text-white" id="about">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* IMAGE + GEOMETRIC ACCENT */}
        <div className="relative w-[260px] md:w-[320px]">
          
          {/* GREEN GEOMETRIC SHAPE */}
          <div className="
            absolute -left-6 -top-6 
            w-40 h-40 
            bg-green-400/20 
            rounded-3xl 
            blur-[3px]
            rotate-12
          "></div>

          {/* AMMAR IMAGE */}
          <img
            src="/Ammar.jpg" 
            alt="Ammar Maamoun"
            className="
              relative z-10 
              w-full rounded-3xl 
              shadow-[0_0_30px_rgba(0,255,120,0.1)]
              object-cover
            "
          />

         
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-[future] leading-tight">
            Hi, I'm <span className="text-green-400">Ammar</span>
          </h2>

          <h3 className="text-2xl text-gray-300 font-[UrbancatSt]">
            AI Engineer & Automation Developer
          </h3>

          <p className="text-gray-300 leading-relaxed text-lg">
            I build <span className="text-green-400 font-semibold">AI systems</span> that automate work,
            predict outcomes, and unlock deep business insights.  
            My work blends <span className="text-green-400 font-semibold">machine learning</span>,  
            <span className="text-green-400 font-semibold">data intelligence</span>, and smart automation to help
            companies scale faster, make sharper decisions, and operate efficiently.
            I focus on creating solutions that feel <span className="text-green-400 font-semibold">human,
            intuitive, and high-impact</span>.
          </p>

        </div>
      </div>
    </section>
  );
}
