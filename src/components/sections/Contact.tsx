"use client"

 feature/production-ready-app-6583233985221145918

import * as React from "react"
 main
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Mail, MessageSquare, Phone, Send } from "lucide-react"

export function Contact() {
 feature/production-ready-app-6583233985221145918

  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

 main
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s build something <span className="text-primary">remarkable</span> together.</h2>
            <p className="text-muted text-lg mb-12">
              Ready to take your digital presence to the next level?
              Contact us for a free consultation and let&apos;s discuss your project.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <p className="text-muted">hello@id01t.softwares</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Call Us</h4>
                  <p className="text-muted">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Chat with Support</h4>
                  <p className="text-muted">Available 24/7 for urgent inquiries.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
 feature/production-ready-app-6583233985221145918
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button className="w-full py-4 h-auto text-lg">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-primary w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted mb-8">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button type="submit" className="w-full py-4 h-auto text-lg">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
 main
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
