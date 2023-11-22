"use client";

import { RefObject, createRef, useEffect, useState } from "react";
import { Link } from "react-scroll";

export function Nav() {
  const [activeLink, setActiveLink] = useState("home");

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
    <nav className="relative inline-flex items-center">
      <ul className="flex items-center gap-8 text-xl md:gap-16">
        {navList.map(({ link, label }) => {
          return (
            <li
              ref={linkRefs[link]}
              key={link}
              className="py-3 gray-9 cursor-pointer"
            >
              <Link to={link} spy smooth onClick={() => setActiveLink(link)}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="absolute bottom-0 w-[57px] h-[10px] bg-[#897586] rounded-[6px] transition-all ease duration-700 hidden md:block"
        style={{
          translate: indicatorStyle[activeLink]?.left,
          width: indicatorStyle[activeLink]?.width,
        }}
      />
    </nav>
  );
}
