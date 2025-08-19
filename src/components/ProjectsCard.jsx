import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiMiniSignal } from "react-icons/hi2";

const ProjectsCard = ({ project }) => {
  return (
    <div className="flex flex-col border-2 border-gray-200 rounded-2xl w-[18rem] font-notosans">
      <img src={project.image} className="h-44 rounded-t-2xl" />
      <h1 className="text-xl mt-2 text-center">{project.title}</h1>
      <div className="flex flex-col mt-5 mb-2 gap-y-3">
        <a
          href={project.code}
          target="_blank"
          className="cursor-pointer flex justify-center items-center gap-x-2 border-2 border-yellow-300 bg-yellow-300 text-white rounded-full mx-12 text-base py-2 font-semibold"
        >
          <IoCodeSlashOutline size={22} />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          className="cursor-pointer flex justify-center items-center gap-x-2 border-2 border-yellow-300 bg-yellow-300 text-white rounded-full mx-12 text-base py-2 font-semibold"
        >
          <HiMiniSignal size={22} />
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
