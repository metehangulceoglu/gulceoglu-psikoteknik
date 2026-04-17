import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumb } from "@/lib/schema";
import { getAllPosts } from "@/lib/mdx";
import AuthorBox from "@/components/blog/AuthorBox";

export const metadata: Metadata = {
  title: "Psikoteknik ve Trafik Mevzuatı Rehberi | Gülceoğlu Psikoteknik",
  description:
    "Ehliyet iadesi, 100 ceza puanı, SRC psikoteknik ve trafik mevzuatı hakkında uzman bilgilendirme yazıları.",
};

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <main>
        {/* Hero */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          <div className="mx-auto max-w-4xl">
            <h1
              className="mb-3 text-3xl font-bold"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-fraunces)",
              }}
            >
              Psikoteknik ve Trafik Mevzuatı Rehberi
            </h1>
            <p className="text-base" style={{ color: "var(--color-text-muted)" }}>
              Psk. Metehan Gülceoğlu tarafından hazırlanan, yasal mevzuata
              dayalı bilgilendirme yazıları.
            </p>
          </div>
        </section>

        {/* Yazı grid */}
        <section
          className="px-4 pb-16 pt-8 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-md"
                >
                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-2 py-0.5 text-xs font-medium"
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

                  {/* Başlık */}
                  <h2
                    className="line-clamp-2 text-lg font-semibold leading-snug"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {post.title}
                  </h2>

                  {/* Açıklama */}
                  <p
                    className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {post.description}
                  </p>

                  {/* Alt satır */}
                  <div
                    className="mt-4 flex items-center justify-between text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span>
                      {post.author} · {formatDate(post.date)}
                    </span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              ))}
            </div>

            {posts.length === 0 && (
              <p
                className="text-center text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                Henüz yazı bulunmamaktadır.
              </p>
            )}
          </div>
        </section>

        {/* Yazar kutusu */}
        <section
          className="px-4 pb-16 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          <div className="mx-auto max-w-4xl">
            <AuthorBox />
          </div>
        </section>
      </main>
    </>
  );
}
