import React from "react";
// import gamersback from "../assets/GamersBack_Logo.png";
import oneshot from "../assets/oneshot.jpg";
import klenty from "../assets/klenty.png";
import valgenesis from "../assets/valgenesis.png";

const allExperiences = [
  {
    title: "Junior Software Engineer",
    company: "ValGenesis",
    duration: "Mar 2025 - Present",
    image: valgenesis,
    description: "I am responsible for working on the module of the application. Written common components in the Frontend using ReactJS which can be used in most part of the application. Also I am responsible for writing the API's in the backend.",
  },
  {
    title: "Software Engineer Trainee",
    company: "Klenty",
    duration: "July 2024 - Feb 2025",
    image: klenty,
    description:
      "I am reponsible to work on fixing bugs in the application. Also implementing the new features whenever necessary. Building UI's using ReactJS and writing API's for the backend.",
  },
  {
    title: "Software Engineer Intern",
    company: "OneShot.ai",
    duration: "February 2024 - May 2024",
    image: oneshot,
    description:
      "As a Full Stack Developer, I am reponsible to work on fixing bugs in the application. Also implementing the new features whenever necessary. Building UI's using ReactJS and writing API's for the backend. Also I am responsible to working and fixing customer issues.",
  },
  // {
  //   title: "ReactJS Developer",
  //   company: "Gamersback Pvt Ltd",
  //   duration: "November 2023 - February 2024",
  //   image: gamersback,
  //   description:
  //     "As a React.js developer, I developed a feature-rich audio player application using React.js and Tailwind CSS. Utilized Tailwind CSS for responsive and visually appealing interface design, highlighting my skills in front-end development. Developed a collaborative document editor similar to Google Docs, enabling users to write and upload images. Implemented inline styling features such as font size adjustments, underlining, and alignment options.",
  // },
];

const Experiences = ({ experiences }) => {
  return (
    <div className="mt-24 md:mt-24 font-notosans">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        ref={experiences}
        className="text-4xl md:text-5xl font-semibold text-[#eef065] text-center"
      >
        Experiences
      </div>

      <div className="flex flex-col gap-y-10">
        {allExperiences.map((experience, index) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            key={experience.company}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center md:justify-between mt-10 md:mt-20 md:px-36 gap-x-32`}
          >
            <div className="w-72 md:w-3/12 bg-black rounded-full p-2">
              <img src={experience.image} />
            </div>

            <div className="md:w-7/12 flex flex-col md:items-start gap-y-8 px-12">
              <div className="mt-5">
                <h1 className="text-2xl md:text-4xl font-semibold text-[#eef065]">
                  {experience.title}
                </h1>
                <p className="mt-4 text-base md:text-lg">
                  {experience.description}
                </p>
              </div>
              <div className="mt-4 text-lg">
                <p>{experience.company}</p>
                <p>{experience.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
