import { useState } from "react";
import { FiMenu } from 'react-icons/fi'
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai"
import { RiContactsLine } from 'react-icons/ri'
import { useSpring, animated, config } from 'react-spring'
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-scroll'




export const Navbar = () => {
    const [toogle, settoogle] = useState(false)



    const handleToogleMenu = () => {
        settoogle(!toogle)
    }

    const springWidth = useSpring({
        from: { width: "50%" },
        to: { width: "100%" },
        config: (config.wobbly),
        reverse: !toogle
    })



    return (
        <div className="col-span-12 h-10 bg-primary bg-transparent w-full z-[100] md:z-50 fixed ">
            <div className="flex justify-between text-3xl overflow-hidden ">
                <div className='p-3 flex h-full relative'>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] to-[#439cfb]">Code!</p>
                </div>


                <div className='w-2/3 absolute right-0 h-auto  md:w-[20%] '>
                    <animated.div
                        className={toogle ? 'flex h-screen absolute right-0 top-0 bg-black flex-col p-3  ' : 'flex h-contain absolute right-0 top-0 p-3 justify-center pl-14 '}
                        style={
                            springWidth
                        }
                    >
                        <FiMenu
                            className='text-white'
                            onClick={handleToogleMenu}
                        />
                        {
                            (toogle)
                                ?
                                <div className='flex mt-10 w-full md:pt-7 h-full flex-col '>
                                    <li className='text-white list-none space-y-4 w-full flex flex-col text-base lg:text-2xl'>
                                        <ul className=" lg:w-2/3 cursor-pointer hover:bg-[#1bd8b5] rounded low-transition ">
                                            <Link
                                                activeClass="active"
                                                className="flex items-center"
                                                to="home"
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                            >
                                                <AiOutlineHome className="flex mr-2" />Inicio</Link>
                                        </ul>
                                        <ul className="lg:w-2/3 cursor-pointer hover:bg-[#1bd8b5] rounded low-transition">
                                            <Link
                                                activeClass="active"
                                                className="flex items-center"
                                                to="works"
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                            >
                                                <AiOutlineProject className="flex mr-2" />Proyectos</Link>

                                        </ul>
                                        <ul className="lg:w-2/3 cursor-pointer hover:bg-[#1bd8b5] rounded low-transition">
                                            <Link
                                                activeClass="active"
                                                className="flex items-center"
                                                to="contact"
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                            >
                                                <RiContactsLine className="flex mr-2" />Contacto</Link>
                                        </ul>
                                    </li>


                                    <div className="flex w-full h-full">
                                        <Player
                                            style={{ width: '100%', height: '100%' }}
                                            autoplay
                                            loop
                                            speed='1'
                                            mode="normal"
                                            src={'https://assets2.lottiefiles.com/private_files/lf30_JhSJFE.json'}

                                        >

                                        </Player>
                                    </div>
                                </div>
                                :
                                null
                        }
                    </animated.div>
                </div>

            </div>
        </div>
    )
}
