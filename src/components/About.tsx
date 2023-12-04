"use client";

import Image from "next/image";
import { Container } from "./Container";
import { Variants, motion } from "framer-motion";

const listVariants: Variants = {
  hidden: {
    y: 0.1,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="flex flex-col-reverse justify-between gap-12 md:flex-row">
          <div>
            <article className="max-w-[675px] text-gray-9 text-base text-start font-normal md:text-justify">
              <motion.h2
                className="mb-4 font-semibold text-3xl text-gray-9 md:text-4xl"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                  duration: 0.5,
                }}
              >
                About Me
              </motion.h2>
              <div className="space-y-4">
                {[
                  "Hello again! I'm Matt Harvey Ostulano, I live in Quezon City. Metro Manila. I'm a fresh graduate from Polytechnic University of the Philippines Sta. Mesa brance looking to make a career as a UI/UX Designer.",
                  "Since high school, I have the passion of making PowerPoint presentations for my projects and activities. With it, I've learned different approaches of animations, hyperlinks (buttons), transitions while maintaining the readability of the presentation in order to engage the audience of reading the presentation itself. With the similarities of UI/UX role from my past experience, I've decided to pursue this role as my career path.",
                  "My goal is to create user-friendly and visual appealing designs for mobile applications and websites. To achieve it, I've made projects for myself as a starting point to showcase my skills and works.",
                  "Despite that, I am still willing to learn for more and to grow myself as a designer and a developer. I also collaborate well with others to find creative solutions for the designs.",
                  "I'll be happy to answer you if you wanna chat, job offer or any design related questions.",
                ].map((p, index) => {
                  return (
                    <motion.p
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px 0px" }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      {p}
                    </motion.p>
                  );
                })}
              </div>
            </article>
          </div>
          <div className="py-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{
                duration: 0.5,
              }}
            >
              <Image
                src="/images/matt-picture.jpg"
                alt="Matt's Picture"
                className="rounded-2xl mb-4"
                width={447}
                height={570}
              />
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-[18px]"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px 0px" }}
            >
              {[
                {
                  title: "Dribbble",
                  icon: "/icons/dribble.svg",
                  link: "https://dribbble.com/rabirai",
                },
                {
                  title: "LinkedIn",
                  icon: "/icons/linkedin.svg",
                  link: "https://www.linkedin.com/in/matt-harvey-ostulano-25b3b8296/",
                },
                {
                  title: "Email",
                  icon: "/icons/gmail.svg",
                  link: "mailto:mattharvey220@gmail.com",
                },
              ].map(({ title, icon, link }) => {
                return (
                  <motion.a
                    key={title}
                    href={link}
                    target="_blank"
                    title={title}
                    className="inline-block px-6 py-3 bg-gray-1 shadow-tag rounded-2xl md:rounded-2xl"
                    variants={itemVariants}
                  >
                    <Image
                      src={icon}
                      alt={`${title} icon`}
                      width={32}
                      height={32}
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
