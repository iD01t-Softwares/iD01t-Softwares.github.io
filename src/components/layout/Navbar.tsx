"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Cpu, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Music", href: "/music" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            iD01t <span className="text-primary">Softwares</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full">Get Started</Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
