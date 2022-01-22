import { useState } from 'react';
import  {useSpring,animated,config} from 'react-spring'

export const AnimatedDiv = ({id}) => {

    const [mouse, setMouse] = useState(false);


    const springHeight = useSpring({
        from :{ height: "20%"},
        to: {height :"50%" },
        config:(config.wobbly),
        reverse: !mouse
    })

    const mouseEvent = ( e ,id ) => {
      
  
        setMouse(true)
    }

    const mouseLeave = ( e ,id ) => {
  
        setMouse(false)
    }

  return (  
  
  <animated.div 
    className='flex w-full h-24 bg-black absolute bottom-0 z-[40]'
    style={springHeight}
    // ref = {boxRef}
    id = {id}
    onMouseEnter = {(id,e) => mouseEvent(id,e)}
    onMouseLeave = {(id,e) => mouseLeave(id,e)}
    >
    
    <h2 className='text-white'>Journal App</h2>
</animated.div>)
};
