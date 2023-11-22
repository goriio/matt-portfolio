"use client";

import Image from "next/image";
import { Container } from "./Container";
import { animateScroll } from "react-scroll";

export function Footer() {
  return (
    <footer className="relative py-6">
      <Container>
        <div className="flex flex-col text-gray-9 text-sm font-light">
          <span>Copyright © Matt Harvey Ostulano</span>
          <span>
            Icons courtesy of icons8. Illustrations courtesy of unDraw.
          </span>
        </div>
        <button onClick={animateScroll.scrollToTop}>
          <Image
            src="/icons/arrow-up.svg"
            alt="Arrow up icon"
            width={52}
            height={52}
            className="absolute bottom-8 right-6 md:bottom-20 md:right-32"
          />
        </button>
      </Container>
    </footer>
  );
}
