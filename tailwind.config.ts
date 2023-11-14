import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#755664",
      gray: {
        1: "#f8f9fa",
        2: "#e9ecef",
        3: "#dee2e6",
        4: "#ced4da",
        5: "#adb5bd",
        6: "#6c757d",
        7: "#495057",
        8: "#343a40",
        9: "#212529",
      },
    },
    extend: {
      boxShadow: {
        button:
          "0px 1px 3px 0px rgba(117, 86, 100, 0.20), 0px 5px 5px 0px rgba(117, 86, 100, 0.17), 0px 11px 7px 0px rgba(117, 86, 100, 0.10), 0px 20px 8px 0px rgba(117, 86, 100, 0.03), 0px 32px 9px 0px rgba(117, 86, 100, 0.00)",
        tag: "0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 15px 6px 0px rgba(0, 0, 0, 0.01), 0px 24px 7px 0px rgba(0, 0, 0, 0.00)",
      },
    },
  },
  plugins: [],
};
export default config;
