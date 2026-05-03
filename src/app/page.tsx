import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { BlogsSection } from "@/components/sections/blogs-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Reveal } from "@/components/ui/reveal";
import { getBlogPosts } from "@/lib/strapi";

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-bg-2 text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <BlogsSection posts={blogPosts} />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
