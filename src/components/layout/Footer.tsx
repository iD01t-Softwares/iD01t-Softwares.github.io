import Link from "next/link"
import { Cpu, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">iD01t</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Crafting premium digital experiences for forward-thinking brands.
              Software so smart, it feels like magic.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Docs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted">
 feature/production-ready-app-6583233985221145918
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>

              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/music" className="hover:text-primary transition-colors">Music</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
 main
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Social</h4>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Github size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-muted">
          <p>© {new Date().getFullYear()} iD01t Softwares. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
