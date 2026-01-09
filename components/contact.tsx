"use client"

import { motion, Variants } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export function Contact() {
  const fadeInUp: Variants = {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.span
          className="text-primary font-mono text-sm inline-block"
          variants={fadeInUp}
        >
          05. What's Next?
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-6"
          variants={fadeInUp}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-muted-foreground leading-relaxed mb-10"
          variants={fadeInUp}
        >
          I'm currently open to new opportunities across energy, industrial systems, R&D, sustainability, and emerging
          technologies. If you have a challenging engineering problem, want to discuss sustainable solutions, or just
          want to connect — my inbox is always open.
        </motion.p>

        <motion.a
          href="mailto:kaarneshraja@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(100, 149, 237, 0.5)" }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </motion.a>

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground"
          variants={fadeInUp}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: "var(--primary)" }}
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span>Vancouver, Canada & Abu Dhabi, UAE</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: "var(--primary)" }}
          >
            <Mail className="w-5 h-5 text-primary" />
            <span>kaarneshraja@gmail.com</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.footer
        className="mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-sm text-muted-foreground font-mono">
          Designed & Built by Kaarnesh Rajamurugan
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">© 2026 All Rights Reserved</p>
      </motion.footer>
    </section>
  )
}
