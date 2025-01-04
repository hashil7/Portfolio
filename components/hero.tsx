'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export function Hero() {
  const [text, setText] = useState('')
  const fullText = "Electronics and Communication Engineering Student"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 100)
    }
  }, [index, text])

  return (
    <section id="about" className="container flex flex-col items-center justify-center min-h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&#39;m <span className="text-primary">Hashil Muhammed</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
          {text}<span className="animate-blink">|</span>
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground mx-auto">
          B.Tech student at National Institute of Technology, Calicut. Passionate about AI, app development, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

