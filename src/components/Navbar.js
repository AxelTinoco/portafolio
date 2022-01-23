import { FiMenu} from 'react-icons/fi'
import { useState } from "react";
import  {useSpring,animated,config} from 'react-spring'




export const Navbar = () => {
    const [toogle, settoogle] = useState(false)
    
   

    const handleToogleMenu = () => {
        settoogle(!toogle)
    }
    
    const springWidth = useSpring({
        from :{ width: "50%"},
        to: {width :"100%" },
        config:(config.wobbly),
        reverse: !toogle
    })



    return (
        <div className="col-span-12 h-10 bg-primary bg-transparent w-full z-[100] md:z-50 fixed ">
            <div className="flex justify-between text-3xl overflow-hidden ">
                 <div className='p-3 flex h-full relative'>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff87] to-[#439cfb]">Code!</p>
                </div> 


                <div className='w-2/3 absolute right-0 h-auto  md:w-1/3 '>
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
                       ( toogle )
                        ? 
                        <div className='flex mt-10 p-7 w-full'>
                            <li className='text-white list-none'>
                                <ul>Home</ul>
                                <ul>Projects</ul>
                                <ul>Contact</ul>
                            </li>
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
