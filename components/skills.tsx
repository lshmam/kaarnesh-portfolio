"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Engineering",
    skills: [
      { name: "Chemical Process Engineering", level: 95 },
      { name: "Mechanical Engineering", level: 85 },
      { name: "Electrical Engineering", level: 80 },
      { name: "Project Engineering", level: 88 },
    ],
  },
  {
    title: "Software & Tools",
    skills: [
      { name: "Aspen HYSYS", level: 92 },
      { name: "Python", level: 88 },
      { name: "MATLAB", level: 90 },
      { name: "Data Analysis", level: 85 },
    ],
  },
  {
    title: "Leadership & Methods",
    skills: [
      { name: "Engineering Management", level: 85 },
      { name: "Creative Problem Solving", level: 92 },
      { name: "Teamwork & Leadership", level: 90 },
      { name: "Technical Documentation", level: 88 },
    ],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section id="skills" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Skills</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={categoryVariants}>
              <h3 className="text-lg font-medium text-foreground mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <motion.span
                        className="text-primary font-mono"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.3 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
