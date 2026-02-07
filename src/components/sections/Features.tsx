"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Code2, Cpu, Globe, Layers, Shield, Zap } from "lucide-react"

const features = [
  {
    title: "Custom Development",
    description: "Tailored software solutions built from the ground up to match your unique business needs.",
    icon: Code2,
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud architecture to ensure your application remains performant at scale.",
    icon: Globe,
  },
  {
    title: "AI Integration",
    description: "Leverage the power of Machine Learning and AI to automate processes and gain insights.",
    icon: Cpu,
  },
  {
    title: "High Performance",
    description: "Optimization-first approach ensuring lightning-fast load times and smooth interactions.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Robust security protocols and data encryption to keep your business and users safe.",
    icon: Shield,
  },
  {
    title: "Scalable Architecture",
    description: "Modular designs that grow with your business, preventing technical debt from holding you back.",
    icon: Layers,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Expertise</span></h2>
          <p className="text-muted max-w-2xl mx-auto">
            We specialize in building cutting-edge digital products that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription>{feature.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
