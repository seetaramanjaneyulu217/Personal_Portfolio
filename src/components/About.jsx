import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import me from '../assets/Me.svg'
import about from '../assets/about.svg'

const About = () => {
    return (
        <div>
            <div className='flex flex-col-reverse items-center md:flex-row md:justify-between h-[30rem] md:px-36 mt-16 gap-y-10 font-notosans'>
                {/* For text about me */}
                <div className='flex flex-col items-start m-auto md:w-7/12'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='text-3xl md:text-6xl'>Hello, I'm</div>
                        <div className='text-4xl md:text-6xl font-semibold text-[#eef065]'>
                            <TypeAnimation
                                sequence={[
                                    'Seeta Ramanjaneyulu',
                                    1500,
                                    'Full Stack Developer',
                                    1500,
                                    'App Developer',
                                    1500
                                ]}
                                wrapper="div"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-4 mt-14'>
                        <button className='border-2 border-yellow-300 bg-yellow-300 text-white font-bold px-16 md:px-6 py-2 rounded-full hover:scale-110 hover:transition hover:ease-in hover:duration-200'>Hire Me</button>
                        <button className='border-2 border-yellow-200 text-yellow-300 font-bold px-12 md:px-6 py-2 rounded-full hover:bg-yellow-300 hover:border-yellow-300 hover:text-white hover:scale-110 hover:transition hover:ease-in hover:duration-200'>Download CV</button>
                    </div>
                </div>


                {/* For image of me */}
                <div className='w-72 md:w-5/12'>
                    <img src={about} />
                </div>
            </div>


            {/* To tell about me */}
            <div className='mt-20 md:mt-28 md:px-36 flex flex-col md:flex-row items-center md:items-start gap-x-32 gap-y-9 font-notosans'>
                {/* For image */}
                <div className='w-72 md:w-5/12'>
                    <img src={me} />
                </div>

                {/* Info about me */}
                <div className='md:w-7/12 flex flex-col items-center md:items-start gap-y-8' id='about'>
                    <h1 className='text-5xl font-semibold text-[#eef065]'>About me</h1>
                    <div className='break-words px-8 md:px-0'>
                        <p className='mt-4 text-lg'>
                            I'm a Full Stack Developer and App Developer.
                            I've worked on a variety of projects and have a great deal of experience.
                            At a startup named Gamersback Pvt Ltd, I worked as an intern ReactJS developer.
                            Currently interning as a Full Stack Developer at OneShot.ai, a startup.
                            I am open to learning new things and have solid knowledge of a variety of programming languages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About