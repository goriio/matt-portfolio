"use client";

import clsx from "clsx";
import { Slideshow } from "./Slideshow";
import Image from "next/image";
import { Project } from "@/types/project";

export function ProjectModal({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}) {
  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center px-4 transition-all ease duration-700 z-20",
        isOpen ? "visible" : "invisible"
      )}
    >
      <div
        className={clsx(
          "fixed inset-0 bg-gray-9/20 transition-all ease duration-700",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      ></div>
      <div
        className={clsx(
          "flex flex-col items-center justify-between gap-6 max-w-[1170px] max-h-full transform overflow-auto rounded-2xl bg-gray-1 px-8 py-10 transition-all ease duration-700 md:flex-row md:gap-12 md:px-[75px] md:py-[70px]",
          isOpen ? "translate-y-0" : "translate-y-[100vh]"
        )}
      >
        <button
          onClick={onClose}
          className="absolute hidden items-center justify-center rounded-full bg-[#D5D8DF] md:flex md:right-9 md:top-7 md:w-12 md:h-12"
        >
          <Image
            src="/icons/close.svg"
            alt="Arrow outward"
            width={32}
            height={32}
          />
        </button>
        <Slideshow slides={project.slides} />
        <div>
          <h3 className="mb-7 text-xl text-gray-9 font-semibold leading-[1.25] md:text-[32px]">
            {project.title}
          </h3>
          <div className="flex gap-4 mb-6 md:gap-6">
            {project.dribbbleLink && (
              <a
                href={project.dribbbleLink}
                target="_blank"
                className="inline-flex flex-1 items-center justify-center gap-1 px-4 py-2 rounded-xl bg-primary text-lg text-gray-1 md:px-5 md:py-3 md:text-xl md:flex-initial"
              >
                Dribbble
                <Image
                  src="/icons/arrow-outward.svg"
                  alt="Arrow outward"
                  width={24}
                  height={24}
                />
              </a>
            )}
            {project.prototypeLink && (
              <a
                href={project.prototypeLink}
                target="_blank"
                className="inline-flex flex-1 items-center justify-center gap-1  px-4 py-2 rounded-xl ring-2 ring-inset ring-primary text-lg text-primary md:px-5 md:py-3 md:text-xl md:flex-initial"
              >
                Prototype
              </a>
            )}
          </div>
          <p className="mb-5">{project.description}</p>
          <ul className="flex flex-col gap-2">
            {project.features.map(({ icon, description }, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 font-semibold text-sm text-gray-9 md:text-base"
                >
                  <Image src={icon} alt={icon} width={24} height={24} />
                  {description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
