import Image from "next/image";
import { aboutMeDescription } from "@/data/portfolio";
import { Container } from "@/components/layout/container";
import { ScrollMarker } from "@/components/ui/scroll-marker";

export function AboutSection() {
  const [helloLine, ...aboutRest] = aboutMeDescription.split("\n");

  return (
    <section
      id="about"
      className="py-18 bg-bg-2 bg-cover bg-center bg-no-repeat sm:py-24"
      style={{ backgroundImage: "url('/about-bg.png')" }}
    >
      <Container>
        <div className="flex justify-center">
          <ScrollMarker />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] lg:gap-14">
          <div>
            <div className="inline-flex rounded-tl-[2.75rem] rounded-br-[2.75rem] border border-brand-1 bg-bg-1 px-8 py-4">
              <h2 className="type-h2 text-left text-white">About me</h2>
            </div>

            <div className="mt-8 max-w-4xl rounded-tl-[2.75rem] rounded-br-[2.75rem] border border-white/16 bg-bg-1/90 p-7 backdrop-blur-sm sm:p-10">
              <div className="type-code text-brand-1">&lt;p&gt;</div>
              <div className="pl-6">
                <p className="type-article text-brand-1">{helloLine}</p>
                <p className="type-article mt-4 whitespace-pre-line text-white/82">
                  {aboutRest.join("\n")}
                </p>
              </div>
              <div className="mt-4 type-code text-brand-1">&lt;/p&gt;</div>
            </div>
          </div>

          <div className="mt-[5.5rem] overflow-hidden rounded-[2rem] border border-white/12 bg-white/5">
            <Image
              src="/about-photo.png"
              alt="Developer working on a laptop"
              width={1400}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
