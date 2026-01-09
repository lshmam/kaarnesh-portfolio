"use client"

import { motion, Variants } from "framer-motion"

const projects = [
  {
    title: "Hydrogen Fuel Cell System Design Verification and Validation",
    description:
      "Rebuilt the verification strategy for Ballard's hydrogen fuel cell system. Defined requirements as per DFMEA, established test coverage matrices, and set pass/fail limits following DVP&R methodology. This systematic approach helped shorten verification cycles by approximately 25% and improved iterative design rework processes.",
    tech: ["DFMEA", "DVP&R", "Test Engineering", "Data Analysis"],
    image: "/compressor.png",
  },
  {
    title: "Carbon Capture Studies",
    description:
      "Supported carbon-capture and air-separation studies at Worley, developing ASPEN-based simulations and heat & mass balances during Select-phase evaluations. Researched global sulphur-recovery configurations and presented technology-selection findings to guide early-phase design decisions for client projects.",
    tech: ["ASPEN HYSYS", "Process Design", "Technical Research", "Heat & Mass Balance"],
    image: "/carbon-capture.png",
  },
  {
    title: "Test Environment Upgrade",
    description:
      "Led the capability upgrade of the test environment under $1M budget, implementing bi-directional power systems, thermal chambers, and advanced instrumentation. This initiative improved uptime from approximately 55% to 90%, enabling stable, continuous system testing across various temperature and pressure conditions.",
    tech: ["Systems Integration", "Instrumentation", "Thermal Testing", "Power Systems"],
    image: "/heating.png",
  },
  {
    title: "Failure Analysis",
    description:
      "Led root cause investigations across fuel cell test environments using structured RCA and Fault Tree Analysis. Isolated multi-variable failures including overvoltage events, CAN heartbeat losses, and sensor drift, enabling targeted corrective actions that eliminated 10+ recurring failure modes and improved overall test reliability.",
    tech: ["Fault Tree Analysis", "Debugging"],
    image: "/analysis.png",
  },
  {
    title: "Data Analysis Automation",
    description:
      "Built automated analysis pipelines for high-frequency fuel cell test data using Python and MATLAB. Standardized data ingestion, processing, and visualization to enable rapid trend analysis, anomaly detection, and cross-test comparison, reducing analysis cycles from days to hours.",
    tech: ["MATLAB", "Python", "Time-Series Analysis"],
    image: "/automation.png",
  },
  {
    title: "Manufacturing BOM Optimization",
    description:
      "Drove manufacturing BOM accuracy improvements by reconciling documentation with actual build configurations. Resolved part definition, revision, and supplier mapping gaps, reducing rework and procurement friction and contributing to approximately $1M in cost savings.",
    tech: ["Process Improvement", "Lean"],
    image: "/manufacturing-plant.png",
  },
]

export function Projects() {
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
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
            >
              {/* Image */}
              <motion.div
                className="w-full md:w-1/2 relative rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                <p className="text-primary font-mono text-sm mb-2">Project</p>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{project.title}</h3>
                <motion.div
                  className="bg-card p-6 rounded-lg shadow-xl mb-4"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-muted-foreground leading-relaxed text-left">{project.description}</p>
                </motion.div>
                <ul
                  className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mb-4 ${index % 2 === 1 ? "justify-start" : "md:justify-end"
                    }`}
                >
                  {project.tech.map((t) => (
                    <motion.li
                      key={t}
                      className="bg-muted/50 px-2 py-1 rounded"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 149, 237, 0.2)" }}
                    >
                      {t}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
