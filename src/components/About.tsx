import Image from "next/image";
import { Container } from "./Container";

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="flex flex-col-reverse justify-between gap-12 md:flex-row">
          <div>
            <article className="max-w-[675px] text-gray-5 text-base text-start font-normal md:text-justify">
              <h2 className="mb-4 font-semibold text-3xl text-gray-9 md:text-4xl">
                About Me
              </h2>
              <div className="space-y-4">
                <p>
                  Hello again! I&apos;m Matt Harvey Ostulano, I live in Quezon
                  City. Metro Manila. I&apos;m a fresh graduate from Polytechnic
                  University of the Philippines Sta. Mesa brance looking to make
                  a career as a UI/UX Designer.
                </p>
                <p>
                  Since high school, I have the passion of making PowerPoint
                  presentations for my projects and activities. With it,
                  I&apos;ve learned different approaches of animations,
                  hyperlinks (buttons), transitions while maintaining the
                  readability of the presentation in order to engage the
                  audience of reading the presentation itself. With the
                  similarities of UI/UX role from my past experience, I&apos;ve
                  decided to pursue this role as my career path.
                </p>
                <p>
                  My goal is to create user-friendly and visual appealing
                  designs for mobile applications and websites. To achieve it,
                  I&apos;ve made projects for myself as a starting point to
                  showcase my skills and works.
                </p>
                <p>
                  Despite that, I am still willing to learn for more and to grow
                  myself as a designer and a developer. I also collaborate well
                  with others to find creative solutions for the designs.
                </p>
                <p>
                  I&apos;ll be happy to answer you if you wanna chat, job offer
                  or any design related questions.
                </p>
              </div>
            </article>
          </div>
          <div className="py-6">
            <Image
              src="/images/matt-picture.jpg"
              alt="Matt's Picture"
              className="rounded-2xl mb-4"
              width={447}
              height={570}
            />

            <div className="flex items-center justify-center gap-[18px]">
              {[
                {
                  icon: "/icons/dribble.svg",
                },
                {
                  icon: "/icons/linkedin.svg",
                },
                {
                  icon: "/icons/gmail.svg",
                },
              ].map(({ icon }) => {
                return (
                  <div key={icon} className="px-6 py-3 bg-gray-1 shadow-tag rounded-2xl md:rounded-2xl">
                    <Image src={icon} alt={icon} width={32} height={32} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
