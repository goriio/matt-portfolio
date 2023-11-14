export interface Project {
  id: number;
  title: string;
  description: string;
  cover: string;
  boxShadow: string;
  slides: string[];
  dribbbleLink?: string;
  prototypeLink?: string;
  features: { icon: string; description: string }[];
}
