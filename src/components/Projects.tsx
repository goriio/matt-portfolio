"use client";

import { useState } from "react";
import { Container } from "./Container";
import { projects } from "@/data";
import Image from "next/image";
import { ProjectModal } from "./ProjectModal";
import { type Project } from "@/types/project";
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

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="mb-8 space-y-4 text-left md:text-center md:mb-12">
          <motion.h2
            className="font-semibold text-3xl text-gray-9 leading-[1.25] md:text-4xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{
              duration: 0.5,
            }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-9 leading-[1.25]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            Here are the few projects that I did
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:px-16"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px 0px" }}
        >
          {projects.map((project) => {
            return (
              <motion.div key={project.id} variants={itemVariants}>
                <Project project={project} />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export function Project({ project }: { project: Project }) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  function closeModal() {
    setIsProjectModalOpen(false);
    document.body.style.overflow = "auto";
  }

  function openModal() {
    setIsProjectModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  return (
    <div>
      <button
        className="group relative w-full h-56 rounded-2xl overflow-hidden"
        style={{ boxShadow: project.boxShadow }}
        onClick={openModal}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition ease-in-out duration-700 group-hover:scale-125"
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-6 text-sm text-gray-1 opacity-0 bg-[#212529E5] transition ease-in-out duration-700 group-hover:opacity-100">
          {project.title}
          <Image src="/icons/info.svg" alt="Info icon" width={24} height={24} />
        </div>
      </button>

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={closeModal}
        project={project}
      />
    </div>
  );
}
