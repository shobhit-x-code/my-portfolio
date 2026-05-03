import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { getBlogBySlug } from "@/lib/strapi";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="py-18 sm:py-24">
      <Container>
        <article className="w-full">
          <p className="type-label-medium uppercase tracking-[0.28em] text-brand-1">Blog</p>
          <h1 className="type-h1 mt-5 text-brand-1">{blog.title}</h1>
          <p className="type-code mt-5 text-brand-2">{blog.meta}</p>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={blog.image}
              alt={blog.title}
              width={960}
              height={540}
              className="h-auto w-full object-cover"
            />
          </div>

          {blog.tags.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="type-label-light rounded-full border border-white/12 px-4 py-2 text-white/72"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <p className="type-article mt-10 w-full whitespace-pre-line text-white/78">
            {blog.content || blog.excerpt}
          </p>
        </article>
      </Container>
    </main>
  );
}
