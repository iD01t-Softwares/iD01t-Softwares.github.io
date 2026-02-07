"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2 relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Our Team"
                fill
                className="object-cover rounded-2xl p-2"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Driven by <span className="text-gradient">Innovation</span> and Excellence.</h2>
            <div className="space-y-6 text-muted text-lg">
              <p>
                At iD01t Softwares, we believe that great software is more than just code. It&apos;s about solving real problems and creating meaningful experiences for users.
              </p>
              <p>
                Our team of passionate developers, designers, and strategists work tirelessly to push the boundaries of what&apos;s possible in the digital realm.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">150+</h4>
                  <p className="text-sm uppercase tracking-widest text-primary font-bold">Projects Done</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white mb-2">50+</h4>
                  <p className="text-sm uppercase tracking-widest text-secondary font-bold">Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
