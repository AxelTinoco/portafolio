import { useSpring,animated } from "react-spring";

export const Numbers = () => {





  const { numbertwo } = useSpring({
    from: { numbertwo: 20 },
    to: { numbertwo: 3 },
    delay: 1000,
    config: { duration: 2000 },
  }
  );

  const { numberthree } = useSpring({
    from: { numberthree: 54 },
    to: { numberthree: 15 },
    delay: 1000,
    config: { duration: 2000 },
  }
  );

    return (
        <div className="flex sm:flex-row w-full items-center justify-around sm:space-x-2 md:my-9 ">
        

              <div className='flex'>
                <animated.span className="text-[#1bd8b5] text-3xl lg:text-5xl">
                  {numbertwo.to(n => n.toFixed(0))}
                </animated.span>
                <div className='text-gray-400 text-xl lg:text-5xl'>
                  <h2>Años de Experiencia</h2>
                </div>
              </div>

              <div className='flex'>
                <animated.span className="text-[#1bd8b5] text-3xl lg:text-5xl">
                  {numberthree.to(n => n.toFixed(0))}
                </animated.span>
                <div className='text-gray-400 text-xl lg:text-5xl'>
                  <h2>Proyectos Completados</h2>
                </div>
              </div>
        </div>
    )
}
