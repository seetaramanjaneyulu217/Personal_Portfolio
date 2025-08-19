import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-yellow-200 mt-24 md:mt-32 px-5 md:px-32 pt-5 md:pt-8 pb-2 rounded-2xl font-notosans mb-2">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-5 mb-14">
        <div className="text-gray-700">
          <h1 className="text-3xl">Seeta Ramanjaneyulu</h1>
          <h1>Full Stack Developer</h1>
        </div>

        <div className="flex flex-col gap-y-2 text-2xl">
          <h1 className="text-gray-700">About my contributions</h1>
          <ul className="flex gap-x-3 text-white text-3xl">
            <a href="https://github.com/seetaramanjaneyulu217" target="_blank">
              <FaGithub />
            </a>
          </ul>
        </div>

        <div className="flex flex-col gap-y-2 text-2xl">
          <h1 className="text-gray-700">Social Media</h1>
          <ul className="flex gap-x-3 text-white text-3xl">
            <a
              href="https://www.linkedin.com/in/seetaramanjaneyulu1717/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </ul>
        </div>
      </div>

      <div className="flex justify-center text-xl">
        Loves building the websites and apps. ❤️
      </div>
    </div>
  );
};

export default Footer;
