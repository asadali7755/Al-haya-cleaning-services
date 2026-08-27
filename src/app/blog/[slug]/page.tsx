import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchemaFromList } from "@/lib/schema";
import { QuoteCard } from "@/components/ui/QuoteCard";
import { RequestCallButton } from "@/components/ui/RequestCallButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";

  return (
    <>
      <JsonLd data={generateArticleSchema(post)} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Blog", url: `${siteUrl}/blog` },
        { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
      ])} />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd data={generateFAQSchemaFromList(post.faqs)} />
      )}
      <BlogArticle post={post} />
      <section className="py-16 px-4">
        <div className="flex justify-center mb-8">
          <RequestCallButton source={`Blog post — ${post.title}`} size="lg" />
        </div>
        <QuoteCard
          source={`Blog post — ${post.title}`}
          heading="Need this done properly? Get a free quote"
          className="max-w-md mx-auto"
        />
      </section>
    </>
  );
}
