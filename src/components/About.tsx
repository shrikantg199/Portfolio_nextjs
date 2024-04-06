import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-600/10 w-full h-auto md:flex justify-between rounded-2xl">
      <div className="w-full p-1">
        <Image
          src="/animatedGif.gif"
          alt="Animated GIF"
          width={100}
          height={100}
          style={{ height: "300px", width: "auto" }}
          unoptimized
        />
      </div>
      <div className="w-full ">
        <p className="p-4 my-4">
          I have strong technical skills including frontend development with
          React, backend development with Node.js and Express, and database
          management with MongoDB.
          <br />
          <br />
          Key projects include a YouTube clone, a simple cryptocurrency web app
          , and a food ordering application. Demonstrated strong technical
          skills in frontend, backend and database development.
        </p>
      </div>
    </div>
  );
};

export default About;
