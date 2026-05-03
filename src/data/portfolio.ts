export type BlogPost = {
  slug?: string;
  title: string;
  excerpt: string;
  content?: string;
  meta: string;
  tags: string[];
  href: string;
  image: string;
};

export const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

export const heroProfileDetails = [
  { value: "shobhitnair@example.com", icon: "email" },
  { value: "India", icon: "location" },
  { value: "Full-time / Freelancer", icon: "briefcase" },
  { value: "www.yourportfolio.com", icon: "link" },
];

export const heroStats = [
  { value: "4", label: "Programming Language" },
  { value: "6", label: "Development Tools" },
  { value: "2", label: "Years of Experience" },
];

export const socialLinks = [
  { href: "https://github.com/", label: "GitHub" },
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
  { href: "mailto:hello@example.com", label: "Email" },
];

export const aboutMeDescription = `Hello!
My name is Shobhit Nair, and I specialize in full-stack web development with React, Next.js, Node.js, NestJS, and CMS platforms like Strapi.
I enjoy building clean, responsive interfaces backed by reliable APIs and practical backend systems. My focus is on writing maintainable code, improving user experience, and shipping features that solve real business problems.
I have worked on client projects across frontend tools, product websites, dashboards, authentication flows, API integrations, and content-managed applications.
When I am not coding, I keep learning new tools, refining my development workflow, and exploring ideas that help me build better digital products.`;

export const skillGroups = [
  {
    title: "Frontend",
    summary: "Interfaces, component systems, and modern web frameworks.",
    items: [
      { name: "HTML", color: "bg-html/18 text-html border-html/40" },
      { name: "CSS", color: "bg-css/18 text-css border-css/40" },
      { name: "JavaScript", color: "bg-js/18 text-js border-js/40" },
      { name: "React", color: "bg-react/18 text-react border-react/40" },
      { name: "Next.js", color: "bg-white/10 text-white border-white/15" },
      { name: "SvelteKit", color: "bg-brand-1/12 text-brand-1 border-brand-1/30" },
    ],
  },
  {
    title: "Backend and CMS",
    summary: "APIs, content systems, databases, and server-side architecture.",
    items: [
      { name: "NestJS", color: "bg-white/10 text-white border-white/15" },
      { name: "Node.js", color: "bg-brand-1/12 text-brand-2 border-brand-1/30" },
      { name: "Strapi", color: "bg-brand-1/12 text-brand-1 border-brand-1/30" },
      { name: "PHP", color: "bg-grey text-white border-white/10" },
      { name: "Postgres", color: "bg-white/10 text-white border-white/15" },
      { name: "MongoDB", color: "bg-brand-1/12 text-brand-2 border-brand-1/30" },
    ],
  },
  {
    title: "DevOps and Tools",
    summary: "Deployment, analytics, automation, collaboration, and delivery workflows.",
    items: [
      { name: "GitHub", color: "bg-white/10 text-white border-white/15" },
      { name: "AI Agents", color: "bg-brand-1/12 text-brand-1 border-brand-1/30" },
      { name: "Docker", color: "bg-brand-1/12 text-brand-2 border-brand-1/30" },
      { name: "PostHog", color: "bg-grey text-white border-white/10" },
      { name: "Vercel", color: "bg-white/10 text-white border-white/15" },
      { name: "Netlify", color: "bg-brand-1/12 text-brand-1 border-brand-1/30" },
      { name: "CI/CD Pipeline", color: "bg-brand-1/12 text-brand-2 border-brand-1/30" },
    ],
  },
];

export const projects = [
  {
    title: "Humanize AI",
    type: "Client Project",
    description:
      "A text editing platform where I worked on core tools like Paraphraser, Grammer Checker, Summarizer, Translator, plus pricing and additional tool pages. I used PHP for prompt logic and API-driven content generation from the frontend.",
    tags: ["PHP", "HTML", "CSS", "Vanilla JS", "API Integration"],
    liveUrl: "https://www.humanizeai.io/",
    role: "Worked on frontend features, prompt-based logic flows, and tool pages.",
  },
  {
    title: "Wizlo",
    type: "Client Project",
    description:
      "Worked on the marketing website and the main web application, including products and services, coupon management, pharmacy integration with third-party providers, pharmacy routing, multi-tenant login, and Firebase notifications.",
    tags: ["Next.js", "NestJS", "Postgres", "Docker", "Prisma"],
    liveUrl: "https://www.wizlo.com/",
    role: "Built with Next.js on the frontend and contributed to the app stack across web and backend features.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "what-does-it-take-to-become-a-web-developer",
    title: "What does it take to become a web developer?",
    excerpt:
      "A quick breakdown of the core areas behind modern web development, from frontend craft to backend architecture and delivery workflows.",
    content:
      "Web development is much more than writing HTML and styling pages. It usually combines frontend development, backend systems, deployment workflows, and design thinking. Frontend work focuses on the parts users see and interact with, including layouts, accessibility, responsiveness, and interaction details. Backend development handles data, APIs, authentication, and the business logic that powers the product. Modern web projects also rely heavily on DevOps practices like version control, testing, deployment pipelines, and monitoring. On top of that, strong design awareness helps developers create interfaces that are not only functional but also intuitive and polished. Becoming a web developer means building skills across these areas over time, learning how they connect, and practicing by shipping real projects that solve real problems.",
    meta: "10.Oct 2023 / 1 Min",
    tags: ["Web Developer", "Web Developer Job", "Web Development"],
    href: "/blogs/what-does-it-take-to-become-a-web-developer",
    image: "/about-photo.png",
  },
  {
    slug: "how-i-approach-shipping-product-ready-interfaces",
    title: "How I approach shipping product-ready interfaces",
    excerpt:
      "Notes on building interfaces that feel polished, stay maintainable, and balance speed with thoughtful UX decisions.",
    content:
      "Product-ready interfaces come from a mix of structure, restraint, and care for the small states users actually encounter. I like to start with the core workflow, shape the layout around scanning and action, then refine the details: spacing, responsive behavior, loading states, errors, and copy. The result should feel calm to use and straightforward to maintain, so the interface can keep improving without becoming fragile.",
    meta: "14.Nov 2023 / 2 Min",
    tags: ["UI Engineering", "Frontend", "Product Design"],
    href: "/blogs/how-i-approach-shipping-product-ready-interfaces",
    image: "/about-bg.png",
  },
];
