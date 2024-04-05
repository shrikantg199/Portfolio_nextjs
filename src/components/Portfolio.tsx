"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full    flex items-center justify-center text-white">
        <Image
          src=""
          width={300}
          height={300}
          className="h-full w-full  object-cover "
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full   flex items-center justify-center text-white">
        <Image
          src="/p5.png"
          width={300}
          height={300}
          className="h-full w-full object-cover "
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full   flex items-center justify-center text-white">
        <Image
          src=""
          width={300}
          height={300}
          className="h-full w-full object-cover "
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Portfolio() {
  return (
    <div className="m-2  ">
      <StickyScroll content={content} />
    </div>
  );
}
