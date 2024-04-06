import { HoverEffect } from "./ui/card-hover-effect";
import { StaticImageData } from "next/image"
export function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects: { title: string; image: string; category: "frontend" | "backend"; }[] = [
  {
    title: "HTML",
    image: "/html.png",
    category: "frontend",
  },
  {
    title: "CSS",
    image: "/css.png",
    category: "frontend",
  },
  {
    title: "Tailwind CSS",
    image: "/tailwind.png",
    category: "frontend",
  },
  {
    title: "Javascript",
    image: "/javascript.png",
    category: "frontend",
  },
  {
    title: "ReactJS",
    image: "/React.png",
    category: "frontend",
  },
  {
    title: "Nodejs",
    image: "/nodejs.png",
    category: "backend",
  },
  {
    title: "ExpressJS",
    image: "/expressjs.png",
    category: "backend",
  },
  {
    title: "MongoDB",
    image: "/Mongodb.png",
    category: "backend",
  },
  {
    title: "MySQL",
    image: "/MySQL.png",
    category: "backend",
  },
  {
    title: "MongoDB",
    image: "/Mongodb.png",
    category: "backend",
  },
  {
    title: "Postman",
    image: "/Postman.png",
    category: "backend",
  },
];
