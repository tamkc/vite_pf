import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1620015092538-e33c665fc181?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hong Kong image" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='flex flex-col justify-center items-center h-full font-bold'>
                    <h1 className='sm:text-5xl text-3xl font-bold text-gray-800'> I'm Peter Tam</h1>
                    <h2 className='flex justify-center items-center text-2xl pt-4'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                1000,
                                'Tech Enthusiast',
                                1000,
                                'Programmer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[320px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                        <FaGithub className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main