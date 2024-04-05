"use client";
import { Link, Element } from "react-scroll";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <nav className="">
      <div
        className={cn(
          "fixed top-4 border rounded-full   inset-x-0 max-w-xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link to="home" smooth={true} duration={500}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            ></MenuItem>
          </Link>

          <Link to="portfolio" smooth={true} duration={500}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Portfolio"
            ></MenuItem>
          </Link>

          <Link to="skills" smooth={true} duration={500}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Skills"
            ></MenuItem>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
