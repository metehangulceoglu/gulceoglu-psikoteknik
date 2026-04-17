import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { JSX } from "react";
import JsonLd from "@/components/seo/JsonLd";
import { createArticle, createPerson, createBreadcrumb } from "@/lib/schema";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import AuthorBox from "@/components/blog/AuthorBox";
import NextStepBox from "@/components/ui/NextStepBox";

/* ── MDX özel bileşenler (Server Component uyumlu) ── */
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-8 mb-3 text-2xl font-semibold"
      style={{ color: "var(--color-primary)" }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-6 mb-2 text-xl font-medium"
      style={{ color: "var(--color-primary)" }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-4 text-base leading-relaxed"
      style={{ color: "var(--color-text-muted)" }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-4 list-disc pl-6 text-base"
      style={{ color: "var(--color-text-muted)" }}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-4 list-decimal pl-6 text-base"
      style={{ color: "var(--color-text-muted)" }}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mb-1 leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className="font-semibold"
      style={{ color: "var(--color-primary)" }}
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="underline hover:no-underline"
      style={{ color: "var(--color-accent)" }}
      {...props}
    />
  ),
};

/* ── Yardımcı ── */
function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

/* ── Static params ── */
export function generateStaticParams(): { slug: string }[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Gülceoğlu Psikoteknik`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastModified,
    },
  };
}

/* ── Sayfa ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const BASE_URL = "https://gulceoglupsikoteknik.com";

  return (
    <>
      <JsonLd
        data={createArticle({
          title: post.title,
          description: post.description,
          url: `${BASE_URL}/blog/${slug}`,
          datePublished: post.date,
          dateModified: post.lastModified,
          authorName: post.author,
        })}
      />
      <JsonLd data={createPerson()} />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
        ])}
      />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Meta bilgi satırı */}
        <div
          className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>Yayınlanma: {formatDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>
            Son güncelleme:{" "}
            <strong
              className="font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              {formatDate(post.lastModified)}
            </strong>
          </span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        {/* H1 */}
        <h1
          className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-fraunces)",
          }}
        >
          {post.title}
        </h1>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                  color: "var(--color-accent)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* MDX İçeriği */}
        <article className="mb-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>

        {/* Mevzuat referans kutusu */}
        {post.mevzuatRef && (
          <div className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <span
              className="text-xs font-medium"
              style={{ color: "var(--color-accent)" }}
            >
              Yasal Kaynak
            </span>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Bu içerik <strong>{post.mevzuatRef}</strong> referans alınarak
              hazırlanmıştır.
            </p>
          </div>
        )}

        {/* Yazar kutusu */}
        <div className="mb-10">
          <AuthorBox />
        </div>

        {/* NextStepBox */}
        <NextStepBox
          title="Bu Konuda Bilgi Almak İster Misiniz?"
          description="Merkezimiz, psikoteknik değerlendirme süreçleri hakkında bilgilendirme yapmaktadır."
          actionText="WhatsApp ile Bilgi Alın"
          actionHref="https://wa.me/905452204878"
        />
      </main>
    </>
  );
}
