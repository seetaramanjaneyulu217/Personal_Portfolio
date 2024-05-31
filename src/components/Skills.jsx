import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import skillImg from '../assets/skills.svg'


const allSkills = [
  {
    skillName: 'HTML',
    skillImg: <FaHtml5 color='#e44d26' className='text-5xl md:text-6xl' />,
  },
  {
    skillName: 'Tailwind',
    skillImg: <BiLogoTailwindCss color='#06b6d4' className='text-5xl md:text-6xl' />,
  },
  {
    skillName: 'JavaScript',
    skillImg: <BiLogoJavascript color='#f0db4f' className='text-5xl md:text-6xl' />,
  },
  {
    skillName: 'TypeScript',
    skillImg: <BiLogoTypescript color='#1a73e8' className='text-5xl md:text-6xl' />
  },
  {
    skillName: 'NodeJS',
    skillImg: <FaNodeJs color='#68a063' className='text-5xl md:text-6xl' />,
  },
  {
    skillName: 'Express',
    skillImg: <SiExpress color='#000000' className='text-5xl md:text-6xl' />,
  },
  {
    skillName: 'React',
    skillImg: <FaReact color='#61dafb' className='text-5xl md:text-6xl' />,
  },
  {
    skillName: 'Redux',
    skillImg: <SiRedux color='#764abc' className='text-5xl md:text-6xl' />,
  },
  {
    skillName: 'MongoDB',
    skillImg: <SiMongodb color='#4db33d' className='text-5xl md:text-6xl' />,
  },
  {
    skillName: 'Git',
    skillImg: <FaGitAlt color='#f34f29' className='text-5xl md:text-6xl' />,
  }
]

const Skills = ({ skills }) => {
  return (
    <div ref={skills} className='mt-24 md:mt-44 md:px-36 flex flex-col md:flex-row items-center md:items-start font-notosans gap-y-10'>

      {/* Left side  */}
      <div className='md:w-7/12 flex flex-col gap-y-10 items-center md:items-start'>
        <div className='text-[#eef065] text-5xl font-semibold'>Skills</div>
        <div className='grid grid-cols-3 gap-x-10 md:gap-x-32 gap-y-10'>
          {
            allSkills.map(skill => (
              <div key={skill.skillName}>
                {skill.skillImg}
              </div>
            ))
          }
        </div>
      </div>

      {/* Right side */}
      <div className='w-72 md:w-[27rem]'>
        <img src={skillImg} />
      </div>

    </div>
  )
}

export default Skills