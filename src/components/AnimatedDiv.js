import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export const AnimatedDiv = ({ id, title, description, link}) => {

    const [mouse, setMouse] = useState(false);


    const springHeight = useSpring({
        from: { height: "10%" },
        to: { height: "45%" },
        config: (config.wobbly),
        reverse: !mouse
    })

    const mouseEvent = (e, id) => {


        setMouse(true)
    }

    const mouseLeave = (e, id) => {

        setMouse(false)
    }

    return (

        <animated.div
            className='flex w-full h-24 bg-black absolute bottom-0 z-[40] flex-col'
            style={springHeight}
            // ref = {boxRef}
            id={id}
            onMouseEnter={(id, e) => mouseEvent(id, e)}
            onMouseLeave={(id, e) => mouseLeave(id, e)}
        >

            <div className='flex p-2'>
                <div className='flex w-1/2'>
                    <h2 className='text-white'>{title}</h2>
                </div>

                <div className='flex w-1/2 h-auto justify-end'>
                    {!mouse ? <IoIosArrowUp className="flex animate-bounce text-white text-3xl transition-all" /> : <IoIosArrowDown className="flex animate-bounce text-white text-3xl transition-all" />}
                </div>

            </div>
            {
                mouse
                    ?
                    <div className='flex w-full p-2  transition-all relative'>
                        <p className='text-white inline-flex w-9/12'>{description}</p>

                        <button className="bg-white rounded-2xl text-black w-[25%] h-12">
                           <a href={link}>Visita</a> 
                        </button>
                    </div>
                    :
                    <div className='hidden'>

                    </div>
            }

        </animated.div>)
};
