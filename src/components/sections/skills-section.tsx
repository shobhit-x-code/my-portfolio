import { skillGroups } from "@/data/portfolio";
import { Container } from "@/components/layout/container";
import { ScrollMarker } from "@/components/ui/scroll-marker";

export function SkillsSection() {
  const totalSkills = skillGroups.reduce((count, group) => count + group.items.length, 0);

  return (
    <section
      id="skills"
      className="py-18 bg-bg-2 bg-cover bg-center bg-no-repeat sm:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,30,35,0.68), rgba(26,30,35,0.74)), url('/skills-bg.png')",
      }}
    >
      <Container>
        <div className="flex justify-center">
          <ScrollMarker />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-5">
            <div className="inline-flex rounded-tl-[2.75rem] rounded-br-[2.75rem] border border-brand-1 bg-bg-1 px-8 py-4">
              <h2 className="type-h2 text-white">Skills</h2>
            </div>

            <div className="motion-card rounded-tl-[2.75rem] rounded-br-[2.75rem] border border-white/14 bg-bg-1/90 p-7 sm:p-8">
              <div className="type-code text-brand-1">&lt;section&gt;</div>
              <div className="pl-6">
                <p className="type-article text-white/82">
                  My toolkit covers frontend engineering, backend systems, CMS
                  work, DevOps, and product tooling. I like building things
                  that are maintainable, fast, and ready to ship.
                </p>
              </div>
              <div className="mt-4 type-code text-brand-1">&lt;/section&gt;</div>
              <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div className="motion-card rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <p className="type-number text-brand-1">{skillGroups.length}</p>
                  <p className="type-para mt-2 text-white/68">Core groups</p>
                </div>
                <div className="motion-card rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <p className="type-number text-brand-1">{totalSkills}</p>
                  <p className="type-para mt-2 text-white/68">Technologies</p>
                </div>
                <div className="motion-card rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <p className="type-number text-brand-1">02+</p>
                  <p className="type-para mt-2 text-white/68">Years learning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="motion-card rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-[0_0_40px_rgba(18,247,214,0.08)] backdrop-blur-sm sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="type-h2-mono text-white">{group.title}</h3>
                    <p className="type-para mt-3 max-w-xl text-white/64">
                      {group.summary}
                    </p>
                  </div>
                  <div className="inline-flex h-11 min-w-[7.5rem] items-center justify-center rounded-full border border-brand-1/30 bg-brand-1/10 px-4">
                    <span className="type-code text-brand-2">
                      {group.items.length.toString().padStart(2, "0")} skills
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className={`motion-chip rounded-full border px-4 py-2.5 ${item.color}`}
                    >
                      <span className="type-media">{item.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
