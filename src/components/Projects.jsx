import React, { useState } from 'react'
import microo from '../assets/microo.png'
import milton from '../assets/milton.png'
import blog from '../assets/blog-app.png'
import food_order from '../assets/food_order.png'
import ProjectsCard from './ProjectsCard'
import { Dropdown, Space } from 'antd';
import { IoFilter } from "react-icons/io5";


const allProjects = [
    {
        title: 'Milton framer',
        image: milton,
        code: 'https://github.com/seetaramanjaneyulu217/Milton',
        live: 'https://milton-three.vercel.app/',
        type: 'Static',
        device: 'web'
    },
    {
        title: 'Static Audio player app',
        image: microo,
        code: 'https://github.com/seetaramanjaneyulu217/Microo',
        live: 'https://microo.vercel.app/',
        type: 'Static',
        device: 'web'
    },
    {
        title: 'Blog Website',
        image: blog,
        code: 'https://github.com/seetaramanjaneyulu217/Blog-Platform',
        live: 'https://blog-platform-three-mauve.vercel.app/',
        type: 'Full Stack',
        device: 'web'
    },
    {
        title: 'Food ordering Website',
        image: food_order,
        code: 'https://github.com/seetaramanjaneyulu217/React_Food_Ordering_Site',
        live: 'https://react-food-ordering-site.vercel.app/',
        type: 'External API',
        device: 'web'
    }
]

const Projects = ({ projects }) => {
    const items = [
        {
            key: '1',
            label: (
                <div onClick={() => {
                    setWebProjectType("Filter")
                    setWebFilteredProjects([])
                }}>
                    All
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => {
                    setWebProjectType("Static")
                    setWebFilteredProjects(allProjects.filter(project => project.type === "Static" && project.device === 'web'))
                }}>
                    Static Frontend Projects
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div onClick={() => {
                    setWebProjectType("Full Stack")
                    setWebFilteredProjects(allProjects.filter(project => project.type === "Full Stack" && project.device === 'web'))
                }}>
                    Full Stack Web Projects
                </div>
            ),
        },
        {
            key: '4',
            label: (
                <div onClick={() => {
                    setWebProjectType("External API")
                    setWebFilteredProjects(allProjects.filter(project => project.type === "External API" && project.device === 'web'))
                }}>
                    Projects that uses External API
                </div>
            ),
        },
    ];

    const [projectsType, setProjectsType] = useState("all")
    const [webFilteredProjects, setWebFilteredProjects] = useState([])
    const [webProjectType, setWebProjectType] = useState("Filter")
    
    return (
        <>
            <div ref={projects} className='mt-28 md:mt-48 font-notosans'>
                <div className='flex justify-center border-2 mx-6 md:mx-72 rounded-full'>
                    <div onClick={() => {
                        setProjectsType("all")
                        setWebFilteredProjects([])
                        setWebProjectType("Filter")
                    }} className={`cursor-pointer text-xl py-2 md:text-2xl w-1/2 flex justify-center font-semibold text-[#eef065] ${projectsType === "all" && 'border-2 border-yellow-300 bg-yellow-300 rounded-full text-white'}`}>All</div>
                    <div onClick={() => setProjectsType("web")} className={`cursor-pointer text-xl py-2 md:text-2xl w-1/2 flex justify-center font-semibold text-[#eef065] ${projectsType === "web" && 'border-2 border-yellow-300 bg-yellow-300 rounded-full text-white'}`}>Web</div>
                    <div onClick={() => {
                        setProjectsType("mobile")
                        setWebFilteredProjects([])
                        setWebProjectType("Filter")
                    }} className={`cursor-pointer text-xl py-2 md:text-2xl w-1/2 flex justify-center font-semibold text-[#eef065] ${projectsType === "mobile" && 'border-2 border-yellow-300 bg-yellow-300 rounded-full text-white'}`}>Mobile</div>
                </div>
            </div>

            {
                projectsType === 'web' && (
                    <div className='flex justify-center md:justify-end mt-9 md:mx-44'>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='cursor-pointer border-2 border-yellow-300 bg-yellow-300 px-5 py-2 rounded-full text-white'>
                                    <IoFilter/> {webProjectType}
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                )
            }

            <div data-aos="fade-up" data-aos-duration="1000" className={`grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 mt-20 px-12 md:px-36 font-notosans ${(projectsType === 'web' && (webFilteredProjects.length !== 0 || webProjectType !== 'Filter')) ? 'hidden' : 'block'}`}>
                {
                    allProjects.map(project => (
                        <div key={project.title}>
                            {
                                projectsType === "all" && (
                                    <ProjectsCard key={project.title} project={project} />
                                )
                            }
                            {
                                projectsType === "web" && (
                                    project.device === 'web' && <ProjectsCard key={project.title} project={project} />
                                )
                            }
                            {
                                projectsType === "mobile" && (
                                    project.device === 'mobile' && <ProjectsCard key={project.title} project={project} />
                                )
                            }
                        </div>
                    ))
                }
            </div>


            <div className={`grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 mt-20 px-12 md:px-36 font-notosans ${(projectsType === 'web' && webFilteredProjects.length === 0) ? 'hidden' : 'block'}`}>
                {
                    webFilteredProjects.map(project => (
                        <ProjectsCard key={project.title} project={project} />
                    ))
                }
            </div>
        </>
    )
}

export default Projects