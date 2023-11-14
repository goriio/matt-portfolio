"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export function Slideshow({slides}: {slides: string[]}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function prev() {
    const isFirstSlide = currentSlide === 0;

    if (isFirstSlide) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide((current) => current - 1);
    }
  }

  function next() {
    const isLastSlide = currentSlide === slides.length - 1;

    if (isLastSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((current) => current + 1);
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative inline-block">
        <div className="flex min-w-full h-48 rounded-2xl overflow-hidden md:w-[530px] md:h-[465px] ">
          {slides.map((slide) => {
            return (
              <Image
                key={slide}
                src={slide}
                alt={slide}
                width={530}
                height={465}
                className="min-w-full transition ease duration-700 object-cover md:min-w-[530px]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              />
            );
          })}
        </div>
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-16 p-1 bg-[#000000]/50 md:w-12 md:h-32"
        >
          <Image
            src="/icons/arrow-back.svg"
            alt="Arrow back"
            width={26}
            height={48}
          />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-16 p-1 bg-[#000000]/50 md:w-12 md:h-32"
        >
          <Image
            src="/icons/arrow-forward.svg"
            alt="Arrow forward"
            width={26}
            height={48}
          />
        </button>
      </div>
      <div className="flex items-center gap-[14px]">
        {slides.map((_, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "w-3 h-3 rounded-full  transition-all ease duration-500",
                index === currentSlide ? "w-6 bg-[#755664]" : "bg-[#B7B7C3]"
              )}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
