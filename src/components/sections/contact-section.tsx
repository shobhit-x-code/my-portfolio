import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="py-18 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Finish strong with a direct call to action."
          description="This final section is a simple place to add your email, booking link, or social channels once you are ready."
        />

        <div className="glass-panel mt-14 rounded-[2rem] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="type-h2 text-white">
                Let&apos;s build something thoughtful and visually sharp.
              </p>
              <p className="type-article mt-6 max-w-2xl text-white/70">
                Replace the sample contact details with your own information and
                connect this section to email, Calendly, LinkedIn, or any
                channel you prefer.
              </p>
              <div className="mt-8 space-y-3">
                <p className="type-media text-brand-2">hello@example.com</p>
                <p className="type-media text-white/68">Based in India, available remotely</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="mailto:hello@example.com" variant="brand">
                Email Me
              </ButtonLink>
              <ButtonLink href="https://www.linkedin.com/" variant="outline">
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
