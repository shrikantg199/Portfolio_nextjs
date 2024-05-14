"use client";
import React from "react";
import Image from "next/image";
import { FollowerPointerCard } from "./ui/following-pointer";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Home = () => {
  const desc = `I'll design and build a custom website using HTML, CSS, JavaScript,ReactJS,NextJS and a backend technology of Node.js and MongoDB.
`;

  const words = [
    {
      text: " Full Stack Developer.",
      className: "text-white dark:text-blue-500",
    },
  ];
  const strings = words.map((word) => word.text);
  return (
    <div className="flex h-auto w-full bg-black md:h-[40rem] flex-col justify-center items-center relative overflow-hidden  mx-auto py-3 md:py-0">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="z-10 relative  w-full text-center ">
          <div className="flex justify-center items-center">
            <Image
              src="/hero.jpg"
              className="rounded-full"
              width={150}
              height={100}
              alt="hero"
            />
          </div>
          <h1 className="text-3xl mt-8  md:mt-4 md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Shrikant Gaikwad
          </h1>
          <h1 className=" mt-2 text-3xl  md:mt-4 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-neutral-300 ">
            {"<"}
            <ReactTyped
              strings={strings}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="/>"
              showCursor={true}
            />
          </h1>
          <hr className="md:w-[400px] w-60  my-2 justify-center h-2 items-center flex mx-auto" />{" "}
          <p className="mt-10  font-normal text-base md:text-lg text-neutral-300 max-w-lg m-4 md:mx-auto">
            <TextGenerateEffect words={desc} />
          </p>
        </div>
      </FollowerPointerCard>
      <div className="flex gap-6 my-10 justify-center items-center">
        <Link href={"https://www.linkedin.com/in/contactshrikantgaikwad/"}>
          <FaLinkedin className="text-4xl " />
        </Link>
        <Link href={"https://github.com/shrikantg199"}>
          <IoLogoGithub className="text-4xl " />
        </Link>
        <Link href={"https://twitter.com/its_shri__11"}>
          <RiTwitterXLine className="text-4xl " />
        </Link>
      </div>
    </div>
  );
};

export default Home;

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Shrikant Gaikwad",
  date: "04th April, 2024",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/demo/thumbnail.png",
  authorAvatar: "/photo.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="32"
      width="32"
      alt="thumbnail"
      className=" rounded-full border-2 border-white"
    />
    <h1>{title}</h1>
  </div>
);
