import { notFound } from "next/navigation";
import { marked } from "marked";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  published: boolean;
  content: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${process.env.GITHUB_REPO || "localfy/akademia-sway"}/main/content/blog.json`,
      { cache: "no-store" }
    );
    const posts: Post[] = await res.json();
    return posts.find((p) => p.slug === slug && p.published) ?? null;
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const contentHtml = post.content ? String(await marked(post.content)) : "";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-background/40 border border-white/20 text-accent text-xs font-body px-2.5 py-1 rounded">
                {post.category}
              </span>
              <span className="text-white/60 text-xs font-body">{post.date}</span>
              <span className="text-white/60 text-xs font-body">{post.readTime} czytania</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl leading-relaxed">
              {post.excerpt}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Treść */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="blog-content font-body text-white/85 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection>
            <div className="mt-16 p-8 bg-surface border border-white/10 rounded text-center">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Rozwijaj się z Akademią Sway
              </h3>
              <p className="text-white/60 font-body mb-6">
                Sprawdź moje szkolenia dla instruktorów pole dance.
              </p>
              <Link
                href="/szkolenia"
                className="inline-block px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body"
              >
                Zobacz szkolenia →
              </Link>
            </div>
          </AnimatedSection>

          <div className="mt-10">
            <Link href="/blog" className="text-accent hover:underline font-body text-sm">
              ← Wróć do bloga
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
