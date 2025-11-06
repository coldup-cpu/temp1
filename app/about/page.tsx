'use client'

import { motion } from 'framer-motion'
import { Code2, Sparkles, Zap, Target } from 'lucide-react'

const skills = [
  'React & Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'AI/ML Integration',
  'Firebase & Supabase',
  'TailwindCSS',
  'API Development',
]

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Leveraging cutting-edge AI and automation to solve real problems.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Building lightning-fast experiences that users love.',
  },
  {
    icon: Target,
    title: 'Purpose',
    description: 'Creating technology that makes a meaningful impact.',
  },
]

export default function About() {
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
            About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-12 rounded-full" />

          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed mb-6"
            >
              I'm a full-stack developer passionate about creating digital experiences that blend
              intuitive design with powerful AI-driven functionality. My journey in tech started
              with a curiosity about how things work under the hood, which evolved into a career
              building products that people actually want to use.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed mb-6"
            >
              I specialize in modern web technologies and have a particular interest in integrating
              AI and automation to create smarter, more responsive applications. Whether it's building
              real-time collaborative tools or AI-powered generators, I focus on delivering solutions
              that are both technically sound and user-friendly.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source
              projects, or mentoring aspiring developers. I believe in continuous learning and sharing
              knowledge with the community.
            </motion.p>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <value.icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
