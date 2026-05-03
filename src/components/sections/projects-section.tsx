import { projects } from "@/data/portfolio";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-18 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="A showcase area ready for your best work."
          description="Each card can grow into a case study, demo link, repository link, or deep dive page when you are ready."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="motion-card group overflow-hidden rounded-[2rem] border border-white/8 bg-bg-1"
            >
              <div className="motion-sheen h-56 bg-[linear-gradient(135deg,rgba(18,247,214,0.2),rgba(255,255,255,0.02))] p-8">
                <p className="type-code text-brand-2">0{index + 1}</p>
              </div>
              <div className="p-8">
                <p className="type-label-medium uppercase tracking-[0.2em] text-brand-1">
                  {project.type}
                </p>
                <h3 className="type-h2 mt-4 text-white">{project.title}</h3>
                <p className="type-para mt-3 text-brand-2">{project.role}</p>
                <p className="type-article mt-5 text-white/68">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="motion-chip type-label-light rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.liveUrl ? (
                  <div className="mt-8">
                    <ButtonLink href={project.liveUrl} variant="brand">
                      Live Website
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
