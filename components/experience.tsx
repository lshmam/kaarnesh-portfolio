"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Ballard Power Systems",
    title: "Fuel Cell System Test Engineer (EIT)",
    period: "May 2023 — Jul 2025 · 2 yrs 3 mos",
    location: "Greater Vancouver, BC, Canada · On-site",
    sections: [
      {
        header: "Program Ownership & Delivery:",
        items: [
          "Owned end-to-end execution for compressor verification across three platforms → planned scope, sequencing, and debug priorities → recovered ~3 months of schedule slip without added resources.",
          "Maintained alignment with supplier reviews, design gates, and freeze milestones under competing test demands.",
        ],
      },
      {
        header: "Verification & Test Strategy:",
        items: [
          "Rebuilt verification strategy using DFMEA-driven requirements, expanded test coverage, and DVP&R pass/fail limits → shortened verification cycles by ~25% and reduced late-stage design rework.",
        ],
      },
      {
        header: "Failure Analysis & Reliability Closure:",
        items: [
          "Led root-cause investigations for overvoltage events, CAN heartbeat losses, thermal drift, and sensor instability → applied Fault Tree Analysis → eliminated 10+ recurring failure modes.",
          "Closed issues with corrective actions that held across repeat testing and operating conditions.",
        ],
      },
      {
        header: "Test Infrastructure & Capability Build-Up:",
        items: [
          "Delivered <$1M in test-cell upgrades (bi-directional power, environmental chamber, instrumentation) → increased uptime from ~55% to ~90%.",
          "Enabled stable, continuous testing across temperature and pressure envelopes.",
        ],
      },
      {
        header: "Data Automation:",
        items: [
          "Built MATLAB/Python pipelines for high-volume time-series data → converted raw logs into decision-grade summaries → reduced analysis time from days to hours.",
          "Standardized outputs for direct consumption by design, controls, and supplier teams.",
        ],
      },
      {
        header: "Safety Leadership:",
        items: [
          "Chaired PHAs across design, pre-implementation, commissioning/startup, and operations → refreshed SOPs/PRCs and strengthened lab governance.",
          "Served as elected JHSC co-chair → accountable for safety governance, corrective-action tracking, and regulator-facing readiness → sustained audit-ready compliance across lab and operations.",
        ],
      },
      {
        header: "Communication:",
        items: [
          "Served as technical interface between suppliers, designers, controls SMEs, and internal stakeholders → translated test results and risk trade-offs into clear engineering decisions.",
        ],
      },
    ],
  },
  {
    company: "Worley",
    title: "Jr. Process Engineer",
    period: "May 2022 — Aug 2022 · 4 mos",
    location: "Abu Dhabi, United Arab Emirates · On-site",
    sections: [
      {
        header: "Process Design & Simulation:",
        items: [
          "Supported carbon-capture and air-separation studies → developed ASPEN-based simulations, heat & mass balances, and design cases used during Select-phase decision-making.",
          "Extracted, validated, and organized simulation outputs into Excel databases linking multiple projects → improved consistency and reduced rework for senior engineers.",
        ],
      },
      {
        header: "Engineering Documentation:",
        items: [
          "Developed and updated BFDs, PFDs, and P&IDs → incorporated client comments across multiple iterations → ensured process documentation accurately reflected evolving scope and assumptions.",
        ],
      },
      {
        header: "Equipment & System Adequacy:",
        items: [
          "Evaluated adequacy of sour-water stripper systems, sulphur recovery units, air-separation units, and utilities → compared design capacity against revised operating scenarios → confirmed feasibility of proposed modifications.",
        ],
      },
      {
        header: "Technical Research & Communication:",
        items: [
          "Researched global sulphur-recovery configurations → compared recovery efficiencies and design trade-offs → presented findings to the engineering team to guide early-phase design choices.",
        ],
      },
    ],
  },
  {
    company: "Ballard Power Systems",
    title: "Jr. Process Improvement Engineer",
    period: "Sep 2020 — May 2021 · 9 mos",
    location: "Canada",
    sections: [
      {
        header: "Manufacturing Process Improvement:",
        items: [
          "Improved manufacturing BOM accuracy across three product lines → streamlined 30+ processes and reduced material waste → supported an estimated ~$1M cost saving ahead of production ramp.",
        ],
      },
      {
        header: "Process & Cost Optimization:",
        items: [
          "Identified inefficiencies in material flow and part usage across manufacturing operations → corrected discrepancies and reduced scrap contributing to improved cost control and planning accuracy.",
        ],
      },
      {
        header: "Supplier & Component Qualification:",
        items: [
          "Qualified critical silicone-seal components for the Audi Hydrogen program → performed microscopic dimensional inspection and statistical capability analysis (Cp/Cpk, Pp/Ppk) → verified tolerance compliance for early builds.",
        ],
      },
      {
        header: "Tooling & Production Support:",
        items: [
          "Supported MEA production tooling by procuring 1,000+ components and assembling a vacuum-enabled fixture → translated engineering requirements into a functional, repeatable production tool in collaboration with design teams.",
        ],
      },
    ],
  },
  {
    company: "Polymer Engineering Co.",
    title: "Material Technician",
    period: "Jan 2020 — Apr 2020 · 4 mos",
    location: "Vancouver, Canada · On-site",
    sections: [
      {
        header: "Material Testing & Failure Analysis:",
        items: [
          "Compression-molded polymer samples and conducted mechanical testing using INSTRON → analyzed stress–strain behavior and failure modes to identify material performance limits.",
        ],
      },
      {
        header: "Data Analysis & Benchmarking:",
        items: [
          "Analyzed five years of historical performance data comparing client and competitor materials → produced statistical comparisons highlighting property trends and formulation advantages.",
        ],
      },
      {
        header: "Compounding & Processing Operations:",
        items: [
          "Prepared in-house polymer blends and operated a Brabender twin-screw extruder → handled teardown, inspection, and setup → improved run consistency and reduced cross-contamination risk between batches.",
        ],
      },
    ],
  },
  {
    company: "Worley",
    title: "Jr. Chemical Process Engineer",
    period: "May 2019 — Aug 2019 · 4 mos",
    location: "Abu Dhabi, United Arab Emirates · On-site",
    sections: [
      {
        header: "Process Modelling & Design Support:",
        items: [
          "Built ASPEN-based models for carbon-capture and air-separation studies → generated heat & mass balances and preliminary sizing used in Select and early FEED evaluations.",
          "Supported trade-off analysis between process efficiency, operability, and cost for client-facing decision packages.",
        ],
      },
      {
        header: "Design Documentation:",
        items: [
          "Developed and updated BFDs, PFDs, and P&IDs → incorporated client and discipline comments across multiple design scenarios → ensured documentation reflected current scope and assumptions.",
        ],
      },
      {
        header: "Equipment & System Adequacy:",
        items: [
          "Performed adequacy checks for heat exchangers, pumps, vessels, and piping systems → assessed existing offshore assets against revised operating conditions → identified constraints and upgrade requirements.",
        ],
      },
      {
        header: "Engineering Analysis & Communication:",
        items: [
          "Authored technical notes explaining equipment operation, limitations, and performance → supported client understanding of process constraints in upstream and midstream systems.",
        ],
      },
    ],
  },
  {
    company: "Manohar Chowdhry & Associates",
    title: "Intern",
    period: "Jun 2017 — Jul 2017 · 2 mos",
    location: "Greater Chennai Area",
    sections: [
      {
        header: "",
        items: [
          "Supported chartered accountancy operations and gained exposure to financial documentation and audit processes.",
          "Collaborated with team members on various accounting tasks and client deliverables.",
        ],
      },
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border scrollbar-thin">
            {experiences.map((exp, index) => (
              <motion.button
                key={`${exp.company}-${exp.period}`}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 relative",
                  activeTab === index
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                )}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === index && (
                  <motion.div
                    className="absolute left-0 md:left-0 bottom-0 md:bottom-auto md:top-0 w-full md:w-0.5 h-0.5 md:h-full bg-primary"
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
                {exp.company}
              </motion.button>
            ))}
          </div>

          <div className="flex-1 py-2 md:px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-medium text-foreground">
                  {experiences[activeTab].title}{" "}
                  <span className="text-primary">@ {experiences[activeTab].company}</span>
                </h3>
                <p className="text-sm font-mono text-muted-foreground mt-1">
                  {experiences[activeTab].period}
                </p>
                <p className="text-xs text-muted-foreground/70 mb-4">
                  {experiences[activeTab].location}
                </p>

                <div className="space-y-4">
                  {experiences[activeTab].sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {section.header && (
                        <h4 className="text-base font-semibold text-foreground mb-2">
                          {section.header}
                        </h4>
                      )}
                      <motion.ul
                        className="space-y-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex gap-3 text-muted-foreground"
                            variants={itemVariants}
                          >
                            <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
