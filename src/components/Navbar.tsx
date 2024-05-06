"use client";
import { Link, Element } from "react-scroll";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <nav className="">
      <div
        className={cn(
          "fixed hidden md:block top-4 border rounded-full   inset-x-0 max-w-xl mx-auto z-50",
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed md:hidden block left-20 top-0 h-screen  bg-black border-l border-gray-700 w-screen   p-2 z-50 text-center"
          >
            <RxCross1
              className="text-white ml-56  m-4 text-xl  cursor-pointer"
              onClick={toggleMenu}
            />
            <ul className="flex flex-col w-80">
              <button
                className="text-white cursor-pointer"
                onClick={toggleMenu}
              />
              <li className="my-2">
                <Link
                  to="home"
                  onClick={() => {
                    toggleMenu();
                  }}
                  className="text-white hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="about"
                  onClick={() => {
                    toggleMenu();
                  }}
                  className="text-white hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="portfolio"
                  onClick={() => {
                    toggleMenu();
                  }}
                  className="text-white hover:text-gray-300"
                >
                  Portfolio
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="skills"
                  onClick={() => {
                    toggleMenu();
                  }}
                  className="text-white hover:text-gray-300"
                >
                  Skills
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="contact"
                  onClick={() => {
                    toggleMenu();
                  }}
                  className="text-white hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed md:hidden block right-2 top-4 bg-black   py-2 rounded-lg m-2 z-20  justify-between items-center border border-gray-700 px-3">
        <CiMenuBurger
          className="text-white cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
