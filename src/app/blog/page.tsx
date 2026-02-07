import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Card } from "@/components/ui/Card"
import Link from "next/link"

const posts = [
  {
    title: "The Future of AI in Software Engineering",
    slug: "future-of-ai",
    date: "2024-05-20",
    excerpt: "Exploring how artificial intelligence is reshaping the way we build and maintain software."
  },
  {
    title: "Scaling Next.js Applications for Production",
    slug: "scaling-nextjs",
    date: "2024-05-15",
    excerpt: "Best practices for ensuring your Next.js app remains performant as your user base grows."
  },
  {
    title: "Mastering Tailwind CSS 4.0",
    slug: "mastering-tailwind",
    date: "2024-05-10",
    excerpt: "A deep dive into the new features and improvements in the latest version of Tailwind CSS."
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Our <span className="text-gradient">Blog</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:border-primary/50 transition-colors">
                <p className="text-sm text-primary mb-2 font-mono">{post.date}</p>
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-muted mb-6">{post.excerpt}</p>
                <span className="text-primary font-medium">Read more →</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
