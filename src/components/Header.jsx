import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { CgMenuLeft } from "react-icons/cg";

const Header = ({
  about,
  skills,
  projects,
  experiences,
  contact,
  scrollToSection,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* For mobile view */}
      <div
        className={`${openMenu ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 flex flex-col w-6/12 h-screen py-10 ease-in-out duration-500 bg-[#f1f474] font-notosans`}
      >
        {/* For options on mobile screen from right of the screen */}
        <RxCross1
          size={20}
          className="ml-4 mb-10 text-white cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />

        <ul className="text-base gap-x-5 flex flex-col gap-y-7 items-center text-white font-semibold">
          <a href="/">{"Home".toUpperCase()}</a>
          <a
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(about);
              setOpenMenu(false);
            }}
          >
            {"About".toUpperCase()}
          </a>
          <a
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(skills);
              setOpenMenu(false);
            }}
          >
            {"Skills".toUpperCase()}
          </a>
          <a
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(projects);
              setOpenMenu(false);
            }}
          >
            {"Projects".toUpperCase()}
          </a>
          <a
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(experiences);
              setOpenMenu(false);
            }}
          >
            {"Experiences".toUpperCase()}
          </a>
          <a
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(contact);
              setOpenMenu(false);
            }}
          >
            {"Contact".toUpperCase()}
          </a>
        </ul>
      </div>

      <nav className="flex justify-between items-center px-7 md:px-36 font-notosans">
        {/* For portfolio name */}
        <div>
          <h1 className="text-xl md:text-3xl font-semibold md:font-bold py-5">
            Seeta Ram
          </h1>
        </div>

        {/* For options translate from right of the screen */}

        <div className="hidden md:block justify-center">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-sm flex gap-x-16"
          >
            <a href="/">{"Home".toUpperCase()}</a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(about)}
            >
              {"About".toUpperCase()}
            </a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(skills)}
            >
              {"Skills".toUpperCase()}
            </a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(projects)}
            >
              {"Projects".toUpperCase()}
            </a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(experiences)}
            >
              {"Experiences".toUpperCase()}
            </a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection(contact)}
            >
              {"Contact".toUpperCase()}
            </a>
          </motion.ul>
        </div>

        <CgMenuLeft
          size={35}
          className="md:hidden cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
      </nav>
    </>
  );
};

export default Header;
