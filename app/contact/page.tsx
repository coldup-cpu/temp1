'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const socials = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/vinaysharma',
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/vinaysharma',
    color: 'hover:text-gray-400',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/vinaysharma',
    color: 'hover:text-sky-500',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:vinay@example.com',
    color: 'hover:text-red-500',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

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
            Get In Touch
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4">
                {socials.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={social.href}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-secondary/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="font-medium">{social.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
