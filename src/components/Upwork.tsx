import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Upwork() {
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; msg: string }>({
    type: "",
    msg: "",
  })

  // --- Validation ---
  const validate = (email: string, phone: string, message: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) return "Please enter a valid email."
    if (phone && phone.replace(/\D/g, "").length < 7)
      return "Phone number must be at least 7 digits."
    if (message.trim().length < 10)
      return "Message must be at least 10 characters."

    return null
  }

  // --- Send Email ---
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("✓ Form submitted")

    const form = e.currentTarget // store form before async

    setLoading(true)
    setStatus({ type: "", msg: "" })

    const formData = new FormData(form)
    const email = String(formData.get("email"))
    const phone = String(formData.get("phone"))
    const message = String(formData.get("message"))

    console.log("Form values:", { email, phone, message })

    const validationError = validate(email, phone, message)
    if (validationError) {
      console.log("❌ Validation error:", validationError)
      setLoading(false)
      setStatus({ type: "error", msg: validationError })
      return
    }

    console.log("✓ Validation passed, sending to EmailJS...")

    try {
      const res = await emailjs.send(
        "service_xptm3te",
        "template_5sy82mr",
        { user_email: email, user_phone: phone, user_message: message },
        "mCHJjaK_FAhwAO6D-"
      )

      console.log("✓ EmailJS success:", res)

      setStatus({
        type: "success",
        msg: "Message sent successfully! I’ll contact you shortly.",
      })

      form.reset() // works now
    } catch (err) {
      console.error("❌ EmailJS error:", err)
      setStatus({ type: "error", msg: "Something went wrong. Try again!" })
    } finally {
      setLoading(false)
    }
  }

  // ---------------------------- UI ----------------------------------
  return (
    <section className="w-full py-24 bg-[#0f0f0f] text-white" id="upwork">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">

        <h2 className="text-4xl md:text-5xl font-[future] leading-tight">
          Need a <span className="text-green-400">custom AI solution</span>?  
          Or prefer a trusted platform for both sides?
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          You can work with me through 
          <span className="text-green-400 font-semibold"> Upwork</span> —
          a secure way to build with confidence, speed, and clarity.
        </p>

        {/* Upwork button */}
        <a
          href="https://upwork.com/freelancers/ammarm98"
          target="_blank"
          className="
            inline-block mt-6
            bg-green-400 text-black font-semibold
            px-10 py-4 rounded-full text-lg
            hover:bg-green-500 transition
            shadow-[0_0_20px_rgba(0,255,130,0.25)]
          "
        >
          Unlock Your Potential Now
        </a>

        <p className="text-gray-500 text-sm mt-3 tracking-wide">
          Let AI do the work — so you can focus on what matters.
        </p>

        <button
          onClick={() => setShowForm(prev => !prev)}
          className="text-gray-300 hover:text-green-400 underline underline-offset-4 transition"
        >
          Or send an email now →
        </button>

        {/* WhatsApp icon */}
        <div className="flex justify-center mt-4">
          <a
            href="https://wa.me/201016515219"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition shadow-lg"
          >
            {/* WhatsApp SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              className="w-7 h-7"
            >
              <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.647.874 5.095 2.348 7.074L4.7 29l7.117-1.616A11.94 11.94 0 0 0 16.004 27C22.627 27 28 21.627 28 15.004 28 8.373 22.627 3 16.004 3zm0 21.818c-1.94 0-3.74-.566-5.26-1.54l-.375-.236-4.227.96.902-4.12-.246-.39A9.77 9.77 0 0 1 6.227 15c0-5.393 4.384-9.773 9.777-9.773 5.392 0 9.772 4.38 9.772 9.773 0 5.392-4.38 9.818-9.772 9.818zm5.258-7.213c-.287-.143-1.698-.84-1.961-.935-.263-.096-.455-.143-.648.143-.192.287-.744.935-.912 1.126-.168.192-.336.215-.623.072-.287-.144-1.21-.445-2.305-1.42-.852-.76-1.428-1.697-1.595-1.984-.168-.287-.018-.442.126-.584.13-.129.287-.336.43-.504.144-.168.192-.287.288-.479.096-.192.048-.36-.024-.504-.072-.144-.648-1.559-.889-2.135-.234-.562-.474-.486-.648-.495-.168-.008-.36-.01-.553-.01-.192 0-.503.072-.765.36-.263.287-1.003.98-1.003 2.392 0 1.412 1.03 2.771 1.174 2.963.144.192 2.03 3.098 4.922 4.34.688.297 1.223.475 1.64.608.688.219 1.316.187 1.814.113.553-.082 1.698-.692 1.94-1.36.24-.668.24-1.24.168-1.36-.072-.12-.264-.192-.55-.335z" />
            </svg>
          </a>
        </div>

        {/* FORM */}
        <div
          className={`
            overflow-hidden transition-all duration-500
            ${showForm ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"}
          `}
        >
          <form 
            onSubmit={sendEmail}
            className="bg-[#111] border border-white/10 p-8 rounded-3xl space-y-5 text-left"
          >
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="bg-black border border-white/10 rounded-xl p-3 text-white focus:border-green-400 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Phone</label>
              <input
                name="phone"
                type="text"
                placeholder="+20 123 456 7890"
                className="bg-black border border-white/10 rounded-xl p-3 text-white focus:border-green-400 outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="bg-black border border-white/10 rounded-xl p-3 text-white focus:border-green-400 outline-none resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-3 rounded-full
                bg-green-400 text-black font-semibold
                hover:bg-green-500 transition
                disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status messages */}
            {status.type === "success" && (
              <p className="text-green-400 text-sm mt-2">{status.msg}</p>
            )}
            {status.type === "error" && (
              <p className="text-red-400 text-sm mt-2">{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
