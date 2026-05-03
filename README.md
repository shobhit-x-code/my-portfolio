This is a [Next.js](https://nextjs.org) portfolio project.

## Strapi Integration

The portfolio can load blog content from Strapi and store contact form submissions there.

Create a `.env.local` file in `portfolio` with:

```bash
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-strapi-api-token
STRAPI_BLOG_COLLECTION=blogs
STRAPI_CONTACT_COLLECTION=contacts
```

Expected Strapi setup:

- `blogs` collection type with fields like `title`, `slug`, `excerpt` or `summary`, optional `content` or `body`, optional `readTime`, optional `tags`, and optional `coverImage` or `image`
- `contacts` collection type with fields `name`, `email`, and `message`

Behavior:

- Blogs are fetched server-side from Strapi and fall back to local sample content if Strapi is unavailable.
- Contact form submissions post to the local Next.js route at `/api/contact`, which forwards data to Strapi.
- Blog detail pages render at `/blogs/[slug]`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
