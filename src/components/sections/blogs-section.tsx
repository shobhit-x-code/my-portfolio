"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { BlogPost } from "@/data/portfolio";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

type BlogsSectionProps = {
  posts: BlogPost[];
};

const POSTS_PER_PAGE = 3;
const PAGINATION_DELAY_MS = 180;

export function BlogsSection({ posts }: BlogsSectionProps) {
  const [page, setPage] = useState(1);
  const [isPaging, setIsPaging] = useState(false);
  const paginationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visiblePosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return posts.slice(start, start + POSTS_PER_PAGE);
  }, [page, posts]);
  const placeholderCount = POSTS_PER_PAGE - visiblePosts.length;

  useEffect(() => {
    return () => {
      if (paginationTimer.current) {
        clearTimeout(paginationTimer.current);
      }
    };
  }, []);

  function goToPage(nextPage: number) {
    if (nextPage === page || nextPage < 1 || nextPage > totalPages) {
      return;
    }

    if (paginationTimer.current) {
      clearTimeout(paginationTimer.current);
    }

    setIsPaging(true);
    paginationTimer.current = setTimeout(() => {
      setPage(nextPage);
      setIsPaging(false);
    }, PAGINATION_DELAY_MS);
  }

  if (!posts.length) {
    return null;
  }

  return (
    <section id="blogs" className="py-18 sm:py-24">
      <Container className="max-w-6xl">
        <SectionHeading
          eyebrow="Blogs"
          title="My latest articles"
          description="A writing section positioned above contact, following the same page flow as the Figma layout."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div
            className="divide-y divide-white/10 border-y border-white/10 transition-opacity duration-200"
            aria-busy={isPaging}
          >
            {isPaging
              ? Array.from({ length: POSTS_PER_PAGE }, (_, index) => <BlogSkeleton key={index} />)
              : visiblePosts.map((post) => <BlogCard key={post.href} post={post} />)}

            {!isPaging
              ? Array.from({ length: placeholderCount }, (_, index) => (
                  <BlogPlaceholder key={`placeholder-${index}`} />
                ))
              : null}
          </div>

          {totalPages > 1 ? (
            <nav className="mt-8 flex flex-wrap items-center justify-center gap-3" aria-label="Blog pagination">
              <button
                type="button"
                className="type-code rounded-full border border-white/12 px-4 py-2 text-white/72 transition hover:border-brand-1/50 hover:text-brand-1 disabled:pointer-events-none disabled:opacity-35"
                disabled={page === 1 || isPaging}
                onClick={() => goToPage(page - 1)}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const active = pageNumber === page;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    className={`type-code flex h-10 w-10 items-center justify-center rounded-full border transition ${
                      active
                        ? "border-brand-1 bg-brand-1 text-bg-1"
                        : "border-white/12 text-white/72 hover:border-brand-1/50 hover:text-brand-1"
                    }`}
                    aria-current={active ? "page" : undefined}
                    disabled={isPaging}
                    onClick={() => goToPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                className="type-code rounded-full border border-white/12 px-4 py-2 text-white/72 transition hover:border-brand-1/50 hover:text-brand-1 disabled:pointer-events-none disabled:opacity-35"
                disabled={page === totalPages || isPaging}
                onClick={() => goToPage(page + 1)}
              >
                Next
              </button>
            </nav>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="motion-row min-h-[430px] py-6 sm:py-8 md:min-h-[214px]">
      <div className="grid gap-6 md:grid-cols-[240px_minmax(0,1fr)] md:items-start">
        <BlogImage post={post} />

        <div className="flex flex-col gap-4">
          <h3 className="type-h2 text-brand-1">{post.title}</h3>

          <p className="type-article text-white/68">{post.excerpt}</p>

          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="motion-chip type-label-light rounded-full border border-white/12 px-4 py-2 text-white/72"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={post.href}
            className="type-code inline-flex w-fit items-center gap-2 text-brand-1 transition hover:text-brand-2"
            aria-label={`Read more about ${post.title}`}
          >
            <span>Read more</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <p className="type-code pt-1 text-brand-2">{post.meta}</p>
        </div>
      </div>
    </article>
  );
}

function BlogImage({ post }: { post: BlogPost }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[8/5] overflow-hidden rounded-[1.25rem] border border-white/8 md:h-[150px] md:aspect-auto">
      {!loaded ? <div className="shimmer absolute inset-0" aria-hidden="true" /> : null}
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(min-width: 768px) 240px, calc(100vw - 48px)"
        loading="lazy"
        unoptimized={post.image.startsWith("http")}
        className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function BlogSkeleton() {
  return (
    <article className="min-h-[430px] py-6 sm:py-8 md:min-h-[214px]">
      <div className="grid gap-6 md:grid-cols-[240px_minmax(0,1fr)] md:items-start">
        <div className="shimmer aspect-[8/5] rounded-[1.25rem] border border-white/8 md:h-[150px] md:aspect-auto" />

        <div className="flex flex-col gap-4">
          <div className="shimmer h-9 w-3/4 rounded-md" />
          <div className="space-y-3">
            <div className="shimmer h-4 w-full rounded-md" />
            <div className="shimmer h-4 w-11/12 rounded-md" />
            <div className="shimmer h-4 w-2/3 rounded-md" />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="shimmer h-8 w-28 rounded-full" />
            <div className="shimmer h-8 w-36 rounded-full" />
            <div className="shimmer h-8 w-32 rounded-full" />
          </div>
          <div className="shimmer h-4 w-24 rounded-md" />
          <div className="shimmer h-4 w-32 rounded-md" />
        </div>
      </div>
    </article>
  );
}

function BlogPlaceholder() {
  return <article className="invisible min-h-[430px] py-6 sm:py-8 md:min-h-[214px]" aria-hidden="true" />;
}
