"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Food Delivery Web App",
    description:
      "Developed a dynamic food app with a user-friendly cart system. Users can effortlessly add and remove items, creating a seamless shopping experience. This focus on user experience led to a 15% increase in average order value, demonstrating the app’s effectiveness in driving revenue growth.",
    content: (
      <div className="h-full w-full    flex items-center justify-center text-white">
        <Image
          src="/FoodApp.png"
          width={300}
          height={300}
          className="h-full w-full  object-cover "
          alt="linear board demo"
        />
      </div>
    ),
    Link: "https://food-app-indol-eta.vercel.app/",
  },
  {
    title: "YouTube Clone",
    description:
      "Built a feature-rich YouTube clone using ReactJS, Redux, and APIs.Responsive design ensures seamless experience across devices.Intuitive search and video management functionalities received positive user feedback",
    content: (
      <div className="h-full w-[45vh]   flex items-center justify-center text-white">
        <Image
          src="/Youtube_clone.png"
          width={300}
          height={300}
          className="h-full w-full  object-cover "
          alt="linear board demo"
        />
      </div>
    ),
    Link: "https://github.com/shrikantg199/Youtube_clone.git",
  },
  {
    title: "CryptoHub web App",
    description:
      "React.js and Tailwind-powered web app offering real-time cryptocurrency data, personalized watchlists, interactive charts, news aggregation, and secure user authentication. Seamlessly responsive, high-performance design ensures optimal usability across devices. Your ultimate cryptocurrency companion.",
    content: (
      <div className="h-full w-[45vh]   flex items-center justify-center text-white">
        <Image
          src="/CryptoHub.png"
          width={300}
          height={300}
          className="h-full w-full  object-cover "
          alt="linear board demo"
        />
      </div>
    ),
    Link: "https://crypto-hub-psi.vercel.app/",
  },
];
export function Portfolio() {
  return (
    <div className="m-2   flex justify-start">
      <StickyScroll content={content} />
    </div>
  );
}
