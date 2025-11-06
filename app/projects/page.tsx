'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'NeuraVision',
    description: 'An AI-powered image generator that transforms text prompts into stunning visuals. Built with Next.js, OpenAI API, and TailwindCSS for a seamless creative experience.',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS', 'TypeScript'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
  },
  {
    title: 'Codeflow',
    description: 'A real-time collaborative code editor enabling developers to pair program seamlessly. Features live cursor tracking, syntax highlighting, and instant synchronization.',
    tags: ['React', 'Socket.io', 'Node.js', 'Monaco Editor'],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
  },
  {
    title: 'TaskIQ',
    description: 'An intelligent task management application that uses AI to prioritize your workflow. Features smart scheduling, deadline predictions, and productivity analytics.',
    tags: ['Next.js', 'Firebase', 'AI/ML', 'Material-UI'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    demo: '#',
    github: '#',
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-12 rounded-full" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={item}
                className="group relative overflow-hidden rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="relative h-64 md:h-auto overflow-hidden rounded-2xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button asChild className="group/btn">
                        <Link href={project.demo}>
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={project.github}>
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
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
