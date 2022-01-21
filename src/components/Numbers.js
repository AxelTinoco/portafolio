import { useSpring,animated } from "react-spring";

export const Numbers = () => {



  const { number } = useSpring({
    from: { number: 89 },
    to: { number: 10 },
    delay: 1000,
    config: { duration: 2000 },
  }
  );

  const { numbertwo } = useSpring({
    from: { numbertwo: 20 },
    to: { numbertwo: 3 },
    delay: 1000,
    config: { duration: 2000 },
  }
  );

  const { numberthree } = useSpring({
    from: { numberthree: 54 },
    to: { numberthree: 30 },
    delay: 1000,
    config: { duration: 2000 },
  }
  );

    return (
        <div className="flex flex-row w-full items-center space-x-2 mt-9 ">
            <div className='flex'>
                <animated.span className="text-[#1bd8b5] text-3xl md:text-6xl">
                  {number.to(n => n.toFixed(0))}
                </animated.span>
                <div className='text-gray-400 text-xl md:text-3xl '>
                  <h2>Happy time</h2>
                </div>
              </div>

              <div className='flex'>
                <animated.span className="text-[#1bd8b5] text-3xl md:text-6xl">
                  {numbertwo.to(n => n.toFixed(0))}
                </animated.span>
                <div className='text-gray-400 text-xl md:text-3xl'>
                  <h2>Years of Experience</h2>
                </div>
              </div>

              <div className='flex'>
                <animated.span className="text-[#1bd8b5] text-3xl md:text-6xl">
                  {numberthree.to(n => n.toFixed(0))}
                </animated.span>
                <div className='text-gray-400 text-xl md:text-3xl'>
                  <h2>Projects Completed</h2>
                </div>
              </div>
        </div>
    )
}
