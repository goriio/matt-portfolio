"use client";

import Image from "next/image";
import { Container } from "./Container";
import { motion } from "framer-motion";

export function Home() {
  return (
    <section id="home" className="min-h-screen grid place-items-center">
      <Container>
        <div className="flex flex-col-reverse gap-8 items-center justify-between md:flex-row">
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-[600px]">
            <div className="mb-8 space-y-[12px]">
              <motion.h1
                className="font-semibold text-3xl text-gray-9 leading-[1.25] md:text-5xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Hi, I&apos;m Matt
              </motion.h1>
              <motion.p
                className="max-w-[567px] text-lg text-gray-9 leading-[1.25]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.4,
                }}
              >
                A UI/UX Designer who is passionate to make user-friendly designs
                for applications and websites.
              </motion.p>
            </div>
            <motion.div
              className="space-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
              }}
            >
              <a
                href="mailto:mattharvey220@gmail.com"
                target="_blank"
                className="inline-block px-5 py-2 rounded-2xl bg-primary text-gray-1 text-lg shadow-button"
              >
                Get in touch
              </a>
              <a
                href="/pdfs/Ostulano-Matt-Harvey-R.-Resume.pdf"
                target="_blank"
                className="inline-block px-5 py-2 rounded-2xl ring-[2px] ring-primary ring-inset text-primary text-lg"
              >
                Resume
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.5,
            }}
          >
            <Image
              src="/images/home-illustration.svg"
              alt="Home illustration"
              width={500}
              height={517}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
