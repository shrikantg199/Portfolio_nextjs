"use client";
import { FC, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <HeroSection />
      )}
    </div>
  );
};

export default Home;
