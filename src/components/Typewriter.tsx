import { useState, useEffect } from "react"

type TypewriterProps = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delay?: number
  startDelay?: number
}

export default function Typewriter({
  words,
  typingSpeed = 30,
  deletingSpeed = 20,
  delay = 1200,
  startDelay = 3000,
}: TypewriterProps) {

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [finished, setFinished] = useState(false)
  const [started, setStarted] = useState(false)

  // WAIT before starting typing
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(timer)
  }, [startDelay])

  // STOP if not started yet
  useEffect(() => {
    if (!started || finished) return

    const current = words[index]
    let timer

    // Typing
    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length + 1))

        if (text.length + 1 === current.length) {
          if (index === words.length - 1) {
            setFinished(true)
            return
          }
          setTimeout(() => setIsDeleting(true), delay)
        }
      }, typingSpeed)
    }

    // Deleting
    else {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length - 1))

        if (text.length === 0) {
          setIsDeleting(false)
          setIndex((prev) => prev + 1)
        }
      }, deletingSpeed)
    }

    return () => clearTimeout(timer)
  }, [
    started,
    text,
    isDeleting,
    index,
    finished,
    words,
    typingSpeed,
    deletingSpeed,
    delay,
  ])

  return <span>{text}</span>
}
