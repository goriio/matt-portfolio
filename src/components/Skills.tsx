"use client";

import { Container } from "./Container";
import { Variants, motion } from "framer-motion";

const listVariants: Variants = {
  hidden: {
    y: 0.1,
  },
  visible: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
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
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <div className="flex flex-col-reverse gap-16 md:flex-row md:gap-36">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{
                duration: 0.5,
              }}
            >
              <h2 className="mb-4 font-semibold text-3xl text-gray-9 md:text-4xl">
                Education
              </h2>
              <h3 className="mb-3 text-xl text-gray-9">
                Polytechnic University of the Philippines
              </h3>
              <p className="text-lg text-gray-5">
                Bachelor of Science - Information Technology • 2019 - 2023 (Cum
                Laude)
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{
                duration: 0.5,
              }}
            >
              <h2 className="mb-4 font-semibold text-3xl text-gray-9 md:text-4xl">
                Experience
              </h2>
              <h3 className="mb-3 text-xl text-gray-9">
                FastSend Mobile Solutions
              </h3>
              <p className="text-lg text-gray-5">
                UI/UX Designer • April 2023 - July 2023
              </p>
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.h2
              className="mb-4 font-semibold text-3xl text-gray-9 md:text-4xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{
                duration: 0.5,
              }}
            >
              Skills
            </motion.h2>
            <motion.div
              className="space-y-10"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px 0px" }}
            >
              {[
                {
                  title: "General",
                  skills: [
                    "UI/UX",
                    "Product Design",
                    "HCI",
                    "Branding",
                    "Prototyping",
                    "Wireframing",
                    "User-centered Designs",
                    "Sitemaps",
                  ],
                },
                {
                  title: "Design",
                  skills: [
                    "Adobe Creative Suite",
                    "Figma",
                    "Canva",
                    "FigJam",
                    "InVision",
                  ],
                },
                {
                  title: "Engineering",
                  skills: [
                    "C#",
                    "C",
                    "Git",
                    "SQL",
                    "VSCode",
                    "Python",
                    "PHP",
                    "HTML/CSS",
                    "Java",
                  ],
                },
              ].map(({ title, skills }) => {
                return (
                  <div key={title}>
                    <motion.h3
                      className="mb-3 text-xl text-gray-9"
                      variants={itemVariants}
                    >
                      {title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-5">
                      {skills.map((skill) => {
                        return (
                          <motion.div
                            key={skill}
                            className="px-4 py-2 text-base bg-gray-1 shadow-tag rounded-xl md:text-lg md:rounded-2xl"
                            variants={itemVariants}
                          >
                            {skill}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
