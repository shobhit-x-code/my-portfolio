import { blogPosts as fallbackBlogPosts, type BlogPost } from "@/data/portfolio";

const STRAPI_URL = process.env.STRAPI_URL?.replace(/\/$/, "");
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const STRAPI_BLOG_COLLECTION = process.env.STRAPI_BLOG_COLLECTION ?? "blogs";
const STRAPI_CONTACT_COLLECTION = process.env.STRAPI_CONTACT_COLLECTION ?? "contacts";

type StrapiImageLike = {
  url?: string;
  formats?: {
    small?: { url?: string };
    medium?: { url?: string };
    thumbnail?: { url?: string };
  };
};

type StrapiBlogLike = {
  id?: number | string;
  documentId?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  summary?: string;
  description?: string;
  content?: unknown;
  body?: unknown;
  publishedAt?: string;
  createdAt?: string;
  readTime?: string | number;
  tags?: string[] | Array<{ name?: string; label?: string }>;
  coverImage?: StrapiImageLike | { data?: { attributes?: StrapiImageLike } };
  image?: StrapiImageLike | { data?: { attributes?: StrapiImageLike } };
  attributes?: StrapiBlogLike;
};

type StrapiRichTextNode = {
  text?: string;
  children?: StrapiRichTextNode[];
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function buildHeaders() {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (STRAPI_API_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
  }

  return headers;
}

function withBaseUrl(path: string) {
  if (!STRAPI_URL) {
    return path;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${STRAPI_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function getImageUrl(image: StrapiBlogLike["coverImage"] | StrapiBlogLike["image"]) {
  const rawImage = image && "data" in image ? image.data?.attributes : image;

  const imageLike = rawImage as StrapiImageLike | undefined;
  const path =
    imageLike?.formats?.medium?.url ??
    imageLike?.formats?.small?.url ??
    imageLike?.formats?.thumbnail?.url ??
    imageLike?.url;

  return path ? withBaseUrl(path) : "/about-photo.png";
}

function formatMeta(post: StrapiBlogLike) {
  const publishedAt = post.publishedAt ?? post.createdAt;
  const datePart = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).replace(/ /g, ".")
    : "Draft";

  const readTime = post.readTime ? `${post.readTime} Min` : "1 Min";
  return `${datePart} / ${readTime}`;
}

function normalizeTags(tags: StrapiBlogLike["tags"]) {
  if (!tags) {
    return [];
  }

  return tags
    .map((tag) => (typeof tag === "string" ? tag : tag.name ?? tag.label ?? ""))
    .filter(Boolean);
}

function normalizeText(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value
      .map((node) => normalizeText(node))
      .filter(Boolean)
      .join("\n\n");
  }

  if (value && typeof value === "object") {
    const node = value as StrapiRichTextNode;

    if (typeof node.text === "string") {
      return node.text;
    }

    if (Array.isArray(node.children)) {
      return normalizeText(node.children);
    }
  }

  return "";
}

function normalizeBlog(post: StrapiBlogLike): BlogPost {
  const source = post.attributes ?? post;
  const slug = source.slug ?? source.documentId ?? source.id?.toString() ?? "#";
  const excerpt = source.excerpt ?? source.summary ?? source.description ?? "";
  const content = normalizeText(source.content ?? source.body) || excerpt;

  return {
    slug: source.slug ?? source.documentId ?? source.id?.toString() ?? undefined,
    title: source.title ?? "Untitled blog",
    excerpt,
    content,
    meta: formatMeta(source),
    tags: normalizeTags(source.tags),
    href: slug === "#" ? "#" : `/blogs/${slug}`,
    image: getImageUrl(source.coverImage ?? source.image),
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!STRAPI_URL) {
    return fallbackBlogPosts;
  }

  try {
    const searchParams = new URLSearchParams();
    searchParams.set("sort[0]", "publishedAt:desc");
    searchParams.set("populate", "*");

    const response = await fetch(
      withBaseUrl(`/api/${STRAPI_BLOG_COLLECTION}?${searchParams.toString()}`),
      {
        headers: buildHeaders(),
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Failed to fetch blogs: ${response.status} ${body}`);
    }

    const payload = (await response.json()) as { data?: StrapiBlogLike[] };
    const blogs = payload.data?.map(normalizeBlog).filter((post) => post.title) ?? [];

    return blogs.length > 0 ? blogs : fallbackBlogPosts;
  } catch (error) {
    console.error("Unable to load Strapi blogs, falling back to local data.", error);
    return fallbackBlogPosts;
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  const matchedFallback = posts.find((post) => post.slug === slug || post.href === `/blogs/${slug}`);
  const matchedLocalFallback = fallbackBlogPosts.find(
    (post) => post.slug === slug || post.href === `/blogs/${slug}`,
  );

  if (!STRAPI_URL) {
    return matchedFallback ?? null;
  }

  try {
    const searchParams = new URLSearchParams();
    searchParams.set("filters[slug][$eq]", slug);
    searchParams.set("populate", "*");

    const response = await fetch(
      withBaseUrl(`/api/${STRAPI_BLOG_COLLECTION}?${searchParams.toString()}`),
      {
        headers: buildHeaders(),
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Failed to fetch blog ${slug}: ${response.status} ${body}`);
    }

    const payload = (await response.json()) as { data?: StrapiBlogLike[] };
    const entry = payload.data?.[0];

    if (!entry) {
      return matchedFallback ?? null;
    }

    return normalizeBlog(entry);
  } catch (error) {
    console.error(`Unable to load Strapi blog ${slug}.`, error);
    return matchedFallback ?? matchedLocalFallback ?? null;
  }
}

export async function createContactSubmission(payload: ContactPayload) {
  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL is not configured.");
  }

  const response = await fetch(withBaseUrl(`/api/${STRAPI_CONTACT_COLLECTION}`), {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({
      data: payload,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || `Failed to create contact: ${response.status}`);
  }

  return response.json();
}
