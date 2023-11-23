"use client";

import Image from "next/image";
import { Container } from "./Container";
import { animateScroll } from "react-scroll";
import { motion } from "framer-motion";

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
        <motion.button
          onClick={animateScroll.scrollToTop}
          className="absolute bottom-8 right-6 md:bottom-20 md:right-32"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        >
          <Image
            src="/icons/arrow-up.svg"
            alt="Arrow up icon"
            width={52}
            height={52}
          />
        </motion.button>
      </Container>
    </footer>
  );
}
