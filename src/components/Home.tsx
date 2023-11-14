import Image from "next/image";
import { Container } from "./Container";

export function Home() {
  return (
    <section id="home" className="pt-32 pb-80 md:pt-[135px] md:pb-[370px]">
      <Container>
        <div className="flex flex-col-reverse gap-8 items-center justify-between md:flex-row">
          <div className="max-w-[600px]">
            <div className="mb-8 space-y-[12px]">
              <h1 className="font-semibold text-4xl text-gray-9 leading-[1.25] md:text-[64px]">
                Hi, I&apos;m Matt
              </h1>
              <p className="max-w-[567px] text-xl text-gray-9 leading-[1.25] md:text-xl">
                A UI/UX Designer who is passionate to make user-friendly designs
                for applications and websites.
              </p>
            </div>
            <div className="space-x-5">
              <button className="px-5 py-2 rounded-2xl bg-primary text-gray-1 text-xl shadow-button">
                Get in touch
              </button>
              <button className="px-5 py-2 rounded-2xl ring-[2px] ring-primary ring-inset text-primary text-xl">
                Resume
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/images/home-illustration.svg"
              alt="Home illustration"
              width={530}
              height={517}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
