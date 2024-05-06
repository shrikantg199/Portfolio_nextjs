"use client";
import { Link, Element } from "react-scroll";
import HomePage from "@/components/Home";
import { Spotlight } from "@/components/ui/Spotlight";
import { SparklesPreview } from "@/components/SparklesPreview";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ContactPage from "@/components/Contact";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";

const HeroSection: React.FC = () => {
  return (
    <TracingBeam className="px-6">
      <Navbar />
      {/* Home page section content */}
      <div className="my-20">
        <Spotlight
          className="-top-40 left-0 md:left-32 md:-top-80"
          fill="white"
        />
        <Element name="home" className="h-screen">
          <div className="">
            <HomePage />
          </div>
        </Element>
        {/* About Page section content */}
        <Element name="about" className="h-full md:py-32 py-8 ">
          <h2 className="text-3xl m-6 text-center md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {" "}
            <span className="text-[#7743db]">{"<"}</span> About Me{" "}
            <span className="text-[#7743db]">{"/>"}</span>
          </h2>

          <About />
        </Element>
        {/* portfolio Page section content */}
        <Element name="portfolio" className="h-screen md:py-24 py-8 ">
          <h2 className="text-3xl  text-center md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            <span className="text-[#7743db]">{"<"}</span>Portfolio{" "}
            <span className="text-[#7743db]">{"/>"}</span>
          </h2>
          <div className="my-8">
            {" "}
            <Portfolio />
          </div>
        </Element>
        {/* Skills Page section content */}
        <Element name="skills" className="h-full md:py-20 py-8">
          <h2 className="text-3xl m-6 text-center md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            <span className="text-[#7743db]">{"<"}</span>Skills{" "}
            <span className="text-[#7743db]">{"/>"}</span>
          </h2>
          <Skills />
        </Element>

        {/* contact Page section content */}
        <div className="p-8 ">
          {" "}
          <Element name="contact" className=" md:py-20 py-8">
            <h1 className="text-3xl m-6 text-center md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              <span className="text-[#7743db]">{"<"}</span>Contact{" "}
              <span className="text-[#7743db]">{"/>"}</span>
            </h1>{" "}
            <ContactPage />
          </Element>
          <div className="">
            <SparklesPreview />
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};

export default HeroSection;
