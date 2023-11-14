"use client";

import { useState } from "react";
import { Container } from "./Container";
import { projects } from "@/data";
import Image from "next/image";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
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
    <section id="projects" className="py-28 md:py-[127px]">
      <Container>
        <div className="mb-8 space-y-4 text-left md:text-center md:mb-12 md:space-y-6">
          <h2 className="font-semibold text-3xl text-gray-9 leading-[1.25] md:text-[64px]">
            Projects
          </h2>
          <p className="text-lg text-gray-9 leading-[1.25] md:text-2xl">
            Here are the few projects that I did
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <button
                  className="group relative w-full h-60 rounded-2xl overflow-hidden md:h-[310px]"
                  style={{ boxShadow: project.boxShadow }}
                  onClick={openModal}
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition ease-in-out duration-700 group-hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-6 text-gray-1 opacity-0 bg-[#212529E5] transition ease-in-out duration-700 group-hover:opacity-100">
                    {project.title}
                    <Image
                      src="/icons/info.svg"
                      alt="Info icon"
                      width={38}
                      height={38}
                    />
                  </div>
                </button>

                <ProjectModal
                  isOpen={isProjectModalOpen}
                  onClose={closeModal}
                  project={project}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
