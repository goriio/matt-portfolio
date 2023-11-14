"use client";

import Image from "next/image";
import { Container } from "./Container";
import { animateScroll } from "react-scroll";

export function Footer() {
  return (
    <footer className="relative md:py-6 md:pt-[180px] md:pb-16">
      <Container>
        <div className="flex flex-col text-gray-9 text-sm font-light md:text-base">
          <span>Copyright © Matt Harvey Ostulano</span>
          <span>
            Icons courtesy of icons8. Illustrations courtesy of unDraw.
          </span>
        </div>
        <button onClick={animateScroll.scrollToTop}>
          <Image
            src="/icons/arrow-up.svg"
            alt="Arrow up icon"
            width={72}
            height={72}
            className="absolute bottom-8 right-6 md:bottom-[120px] md:right-[108px]"
          />
        </button>
      </Container>
    </footer>
  );
}
