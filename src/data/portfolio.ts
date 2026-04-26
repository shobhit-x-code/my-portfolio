export const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
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
My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
I like to have my perspective and belief systems challenged so that I see the world through new eyes.`;

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
