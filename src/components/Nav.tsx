"use client";

import { motion, Variants } from "framer-motion";
import { RefObject, createRef, useEffect, useState } from "react";
import { Link } from "react-scroll";

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

const linkVariants: Variants = {
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

export function Nav() {
  const [activeLink, setActiveLink] = useState("home");
  const [isSpying, setIsSpying] = useState(true);

  const navList = [
    {
      link: "home",
      label: "Home",
    },
    {
      link: "about",
      label: "About",
    },
    {
      link: "skills",
      label: "Skills",
    },
    {
      link: "projects",
      label: "Projects",
    },
  ];

  const linkRefs: Record<string, RefObject<HTMLLIElement>> = {};

  navList.forEach((item) => {
    linkRefs[item.link] = createRef<HTMLLIElement>();
  });

  const [indicatorStyle, setIndicatorStyle] = useState<
    Record<string, { width?: number; left?: number }>
  >({});

  useEffect(() => {
    for (const key in linkRefs) {
      if (linkRefs[key].current) {
        setIndicatorStyle((current) => ({
          ...current,
          [key]: {
            width: linkRefs[key].current?.offsetWidth,
            left: linkRefs[key].current?.offsetLeft,
          },
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.nav
      className="relative inline-flex items-center"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="flex items-center gap-8 text-xl md:gap-16">
        {navList.map(({ link, label }) => {
          return (
            <motion.li
              ref={linkRefs[link]}
              key={link}
              className="py-3 gray-9 cursor-pointer"
              variants={linkVariants}
            >
              <Link
                to={link}
                spy={isSpying}
                smooth
                onSetActive={() => setActiveLink(link)}
                onClick={() => {
                  setIsSpying(false);
                  setActiveLink(link);
                  setTimeout(() => {
                    setIsSpying(true);
                  }, 1000);
                }}
              >
                {label}
              </Link>
            </motion.li>
          );
        })}
      </ul>
      <motion.div
        className="absolute bottom-0 h-[10px] bg-[#897586] rounded-[6px] transition-all ease duration-700 hidden md:block"
        style={{
          translate: indicatorStyle[activeLink]?.left,
          width: indicatorStyle[activeLink]?.width,
        }}
        variants={linkVariants}
      />
    </motion.nav>
  );
}
