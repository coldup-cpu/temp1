'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechVision AI',
    period: '2022 - Present',
    description: 'Leading development of AI-powered web applications, architecting scalable solutions, and mentoring junior developers. Implemented ML models for predictive analytics and automated workflows.',
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Built real-time collaboration features serving 10K+ users',
      'Architected microservices infrastructure on AWS',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Innovative Solutions Inc',
    period: '2020 - 2022',
    description: 'Developed responsive web applications using React and Node.js. Collaborated with cross-functional teams to deliver client projects on time and within budget.',
    achievements: [
      'Delivered 15+ client projects with 100% satisfaction rate',
      'Introduced TypeScript, improving code quality by 40%',
      'Implemented CI/CD pipeline reducing deployment time by 70%',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'StartupHub',
    period: '2018 - 2020',
    description: 'Built and maintained web applications for early-stage startups. Gained experience in rapid prototyping and agile development methodologies.',
    achievements: [
      'Contributed to 3 successful product launches',
      'Developed reusable component library adopted company-wide',
      'Participated in code reviews and technical documentation',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export default function Experience() {
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Experience
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-12 rounded-full" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                variants={item}
                className="relative mb-12 last:mb-0"
              >
                <div className="md:pl-20">
                  <div className="absolute left-6 md:left-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary">Key Achievements:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▪</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
