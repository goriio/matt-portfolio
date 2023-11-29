import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Juan Dela Cook: Cookbook Budgeting System",
    description:
      "Juan Dela Cook is a Cookbook Application that finds the recipe for your dishes and meals!",
    cover: "/images/jdc-cover.png",
    boxShadow:
      "0px 8px 17px 0px rgba(230, 198, 173, 0.20), 0px 30px 30px 0px rgba(230, 198, 173, 0.17), 0px 68px 41px 0px rgba(230, 198, 173, 0.10), 0px 121px 48px 0px rgba(230, 198, 173, 0.03), 0px 189px 53px 0px rgba(230, 198, 173, 0.00)",
    slides: [
      "/images/jdc-slide-1.gif",
      "/images/jdc-slide-2.gif",
      "/images/jdc-slide-3.png",
      "/images/jdc-slide-4.png",
      "/images/jdc-slide-5.png",
      "/images/jdc-slide-6.png",
    ],
    dribbbleLink:
      "https://dribbble.com/shots/22835453-Cookbook-Recipe-Application-Concept",
    prototypeLink:
      "https://www.figma.com/proto/IhHOCwUjjpPVlPVHoE1NhX/Portfolio?page-id=0%3A1&type=design&node-id=25-868&viewport=-298%2C239%2C0.27&t=LjRxw5Vki8KauF4e-1&scaling=min-zoom&starting-point-node-id=25%3A1504&show-proto-sidebar=1&mode=design",
    features: [
      {
        icon: "/icons/search.svg",
        description: "Intuitive searching with keywords and filters",
      },
      {
        icon: "/icons/account-circle.svg",
        description: "Create an account for to save your favorites!",
      },
      {
        icon: "/icons/sell.svg",
        description: "Check for estimated price of your searched recipe!",
      },
      {
        icon: "/icons/star.svg",
        description: "Like, favorite, comment and more!",
      },
    ],
  },
  {
    id: 2,
    title: "aso-bee: Kids’ E-Commerce Applicaiton",
    description: `aso-bee comes from the word "asobi/遊び" meaning 'play' combined with our fuzzy fellow bee!`,
    cover: "/images/aso-bee-cover.png",
    boxShadow:
      "0px 4px 8px 0px rgba(0, 0, 0, 0.10), 0px 15px 15px 0px rgba(0, 0, 0, 0.09), 0px 34px 20px 0px rgba(0, 0, 0, 0.05), 0px 60px 24px 0px rgba(0, 0, 0, 0.01), 0px 94px 26px 0px rgba(0, 0, 0, 0.00)",
    slides: [
      "/images/aso-bee-slide-1.gif",
      "/images/aso-bee-slide-2.png",
      "/images/aso-bee-slide-3.png",
      "/images/aso-bee-slide-4.png",
      "/images/aso-bee-slide-5.png",
      "/images/aso-bee-slide-6.gif",
    ],
    dribbbleLink:
      "https://dribbble.com/shots/22863998-Kids-E-Commerce-Concept-App",
    prototypeLink:
      "https://www.figma.com/proto/IhHOCwUjjpPVlPVHoE1NhX/Portfolio?page-id=275%3A6341&type=design&node-id=275-8347&viewport=1411%2C1082%2C0.16&t=J1XzbkhE0ixNI7HE-1&scaling=min-zoom&starting-point-node-id=275%3A8347&show-proto-sidebar=1&mode=design",
    features: [
      {
        icon: "/icons/stylus-note.svg",
        description: "Designed for kids for friendly look!",
      },
      {
        icon: "/icons/search.svg",
        description: "Easier search with categories section on home!",
      },
      {
        icon: "/icons/account-circle.svg",
        description: "Create an account for to save your favorites!",
      },
      {
        icon: "/icons/sell.svg",
        description: "Fast add to cart and checkout!",
      },
      {
        icon: "/icons/star.svg",
        description: "Rate, favorite, comment and more!",
      },
    ],
  },
  {
    id: 3,
    title: "FastSend Mobile Solutions: Internship Accomplishments",
    description:
      "I had 5 months internship experience with FastSend. Here are the accomplishment and my roles as a UI/UX Designer:",
    cover: "/images/fastsend-cover.jpg",
    boxShadow:
      "0px 4px 8px 0px rgba(41, 80, 157, 0.20), 0px 15px 15px 0px rgba(41, 80, 157, 0.17), 0px 34px 20px 0px rgba(41, 80, 157, 0.10), 0px 60px 24px 0px rgba(41, 80, 157, 0.03), 0px 94px 26px 0px rgba(41, 80, 157, 0.00)",
    slides: [
      "/images/fastsend-cover.jpg",
      "/images/fastsend-slide-2.gif",
      "/images/fastsend-slide-3.png",
      "/images/fastsend-slide-4.gif",
    ],
    prototypeLink:
      "https://www.figma.com/file/IhHOCwUjjpPVlPVHoE1NhX/Portfolio?type=design&node-id=185%3A1752&mode=design&t=BXI4PPUChWmX7jUZ-1",
    features: [
      {
        icon: "/icons/stylus-note.svg",
        description: "Made infographics for marketing purposes",
      },
      {
        icon: "/icons/search.svg",
        description: "Proposed revisions for improvement of UI",
      },
      {
        icon: "/icons/point-scan.svg",
        description: "Made different graphics design skit",
      },
      {
        icon: "/icons/mark-as-unread.svg",
        description: "E-mail content for introduction of the application",
      },
      {
        icon: "/icons/more-horiz.svg",
        description: "and more!",
      },
    ],
  },
];
