"use client"

import { motion, Variants } from "framer-motion"

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Everything around the goal is chaotic, but the goal itself isn't — I cut through the noise and deliver.
              What I bring is clarity: clear objectives, clear ownership, and clear learning loops.
            </motion.p>
            <motion.p variants={itemVariants}>
              I enjoy roles where complex systems need to be understood, validated, and improved—whether that's through
              modelling, testing, process design, failure analysis, or project execution. With a background in{" "}
              <span className="text-primary">Chemical Engineering from UBC</span>, I've been shaped by diverse project
              work across two complementary worlds: <span className="text-primary">energy consulting in oil & gas</span>
              , and <span className="text-primary">research testing in hydrogen fuel-cell technology</span>.
            </motion.p>
            <motion.p variants={itemVariants}>
              Early in my career at Advisian/Worley, I worked on process studies, modelling, PFD/P&ID development, and
              HAZOP-style reviews. At Ballard, I shifted into testing-focused roles, commissioning test rigs, resolving
              mechanical/electrical/control interactions, and running verification programs.
            </motion.p>
            <motion.p variants={itemVariants}>
              I'm open to interesting engineering projects across energy, industrial systems, R&D, sustainability, and
              emerging technologies. If the work has a real problem to solve and a structured environment for growth,
              I'm all in.
            </motion.p>

            <motion.div className="pt-4" variants={itemVariants}>
              <p className="text-foreground font-medium mb-3">Technologies I work with:</p>
              <motion.ul
                className="grid grid-cols-2 gap-2 text-sm font-mono"
                variants={containerVariants}
              >
                {["Aspen HYSYS", "MATLAB/Python", "Fault Tree Analysis", "DVP&R", "DFMEA", "PFD/P&ID Development"].map(
                  (tech, index) => (
                    <motion.li
                      key={tech}
                      className="flex items-center gap-2"
                      variants={itemVariants}
                      custom={index}
                    >
                      <span className="text-primary">▹</span>
                      {tech}
                    </motion.li>
                  ),
                )}
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <motion.div
              className="relative z-10 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/kanu-photo.jpg"
                alt="Kaarnesh Rajamurugan"
                className="w-full"
              />
              <div className="absolute inset-0" />
            </motion.div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
