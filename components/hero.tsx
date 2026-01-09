"use client"

import { useEffect, useRef } from "react"
import { motion, Variants } from "framer-motion"
import { Linkedin, Mail, ChevronDown } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    })

    const init = () => {
      resize()
      for (let i = 0; i < 80; i++) {
        particles.push(createParticle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 149, 237, ${particle.opacity})`
        ctx.fill()

        particles.forEach((particle2, j) => {
          if (i === j) return
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.strokeStyle = `rgba(100, 149, 237, ${0.1 * (1 - distance / 150)})`
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom right, #0a0a0f, #0f172a, #0a0a0f)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />

      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider"
          variants={fadeInDown}
        >
          Hello, my name is
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance"
          variants={itemVariants}
        >
          Kaarnesh Rajamurugan
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6"
          variants={itemVariants}
        >
          Fuel Cell Systems & Process Engineer
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
          variants={itemVariants}
        >
          Delivering decision-ready engineering evidence. Specializing in hydrogen fuel cell systems, oil & gas
          consulting, and process & test engineering. Open to work in Vancouver, Canada and Abu Dhabi, UAE.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/kaarnesh-rajamurugan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:kaarneshraja@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore My Work
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
