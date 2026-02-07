import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Card } from "@/components/ui/Card"
import { Play, Music as MusicIcon, Star } from "lucide-react"

const tracks = [
  {
    title: "Neural Dreams",
    artist: "Digital Alchemist",
    duration: "4:20",
    plays: "1.2M"
  },
  {
    title: "Binary Sunset",
    artist: "Synth Explorer",
    duration: "3:45",
    plays: "850K"
  },
  {
    title: "Quantum Flow",
    artist: "Code Rhythm",
    duration: "5:12",
    plays: "2.1M"
  }
]

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Top <span className="text-gradient">Music</span></h1>

        <div className="grid grid-cols-1 gap-6">
          {tracks.map((track, index) => (
            <Card key={track.title} className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex items-center space-x-6">
                <span className="text-2xl font-black text-white/20 w-8">{index + 1}</span>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all">
                  <MusicIcon className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{track.title}</h3>
                  <p className="text-muted">{track.artist}</p>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-12 text-sm text-muted">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-secondary" />
                  <span>{track.plays} plays</span>
                </div>
                <span>{track.duration}</span>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                  <Play fill="white" size={20} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
