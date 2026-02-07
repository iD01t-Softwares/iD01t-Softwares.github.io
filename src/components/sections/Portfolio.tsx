"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/Card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Nova CRM",
    category: "Enterprise Software",
    description: "A next-generation customer relationship management system with AI-driven insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "EcoTrack",
    category: "Mobile App",
    description: "Real-time sustainability tracking for global supply chains.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Flux Analytics",
    category: "Web Application",
    description: "High-performance data visualization platform for financial services.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-secondary">Work</span></h2>
            <p className="text-muted max-w-xl">
              Take a look at some of the impactful digital solutions we&apos;ve delivered recently.
            </p>
          </div>
          <button className="text-primary font-medium flex items-center hover:underline">
            View all projects <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-0 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                        <ExternalLink size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                        <Github size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted text-sm">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
