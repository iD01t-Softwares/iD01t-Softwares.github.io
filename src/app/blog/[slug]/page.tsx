import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <Link href="/blog">
          <Button variant="outline" size="sm" className="mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
          </Button>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Post: {slug}</h1>
        <p className="text-muted mb-12">Published on May 20, 2024</p>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            This is a placeholder for the blog post content. In a production app, this would be fetched from a CMS or rendered from Markdown files.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The transition to Next.js and Tailwind CSS 4 provides developers with unprecedented power and flexibility in building modern web applications.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  )
}
