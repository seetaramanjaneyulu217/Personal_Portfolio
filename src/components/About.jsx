import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import me from '../assets/Me.svg'

const About = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row md:justify-between h-[30rem] md:px-44 pt-24 gap-y-10'>
            {/* For text about me */}
            <div className='flex flex-col items-start gap-y-6 m-auto w-7/12'>
                <div className='text-4xl md:text-6xl'>Hello, I'm</div>
                <div className='text-5xl md:text-6xl font-semibold text-[#eef065]'>
                    <TypeAnimation
                        sequence={[
                            'Seeta Ram',
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

                <div className='flex flex-col gap-y-3 md:flex-row gap-x-4 mt-4'>
                    <button className='border-2 border-yellow-300 bg-yellow-300 text-white font-bold px-16 md:px-6 py-2 rounded-full hover:scale-110 hover:transition hover:ease-in hover:duration-200'>Hire Me</button>
                    <button className='border-2 border-yellow-200 text-yellow-300 font-bold px-12 md:px-6 py-2 rounded-full hover:bg-yellow-300 hover:border-yellow-300 hover:text-white hover:scale-110 hover:transition hover:ease-in hover:duration-200'>Download CV</button>
                </div>
            </div>


            {/* For image of me */}
            <div className='flex justify-center w-5/12'>
                <img src={me} className='h-96 w-96' />
            </div>
        </div>
    )
}

export default About