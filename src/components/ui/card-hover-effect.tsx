import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    image: string;
    category: "frontend" | "backend";
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "frontend" | "backend"
  >("all");

  const handleCategoryChange = (category: "all" | "frontend" | "backend") => {
    setSelectedCategory(category);
  };
  const filteredTechnologies =
    selectedCategory === "all"
      ? items
      : items.filter(
          (tech) => tech.category.toLowerCase() === selectedCategory
        );
  //console.log("Filtered Technologies:", filteredTechnologies);
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`border px-3 py-1 mx-2 rounded-xl ${
            selectedCategory === "all" ? "text-white bg-blue-700" : "text-white"
          } `}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("frontend")}
          className={`border px-3 py-1 mx-2 rounded-xl ${
            selectedCategory === "frontend"
              ? "text-white bg-blue-700"
              : "text-white"
          } `}
        >
          Frontend
        </button>
        <button
          onClick={() => handleCategoryChange("backend")}
          className={`border px-3 py-1 mx-2 rounded-xl ${
            selectedCategory === "backend"
              ? "text-white bg-blue-700"
              : "text-white"
          } `}
        >
          Backend
        </button>
      </div>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
          className
        )}
      >
        {filteredTechnologies.map((item, idx) => (
          <div
            key={idx}
            className="relative group justify-center items-center  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className="flex justify-center items-center text-center">
              {" "}
              <Image width={50} height={50} src={item.image} alt={item.title} />
              <CardTitle>{item.title}</CardTitle>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-blue-400/[0.2] group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
