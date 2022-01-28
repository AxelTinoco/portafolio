import { Player } from '@lottiefiles/react-lottie-player';
import bloop from '../../assets/svg/bloop.svg'
import line from '../../assets/svg/line.svg'
import { CgWebsite } from "react-icons/cg"


export const SectionTwo = () => {
  return (
    <div className="col-span-12 my-9 mb-9 h-screen bg-[#14104b] grid grid-cols-12 grid-rows-5">
      
      <div className="col-span-11 col-start-2 md:col-span-2">
        <div className="flex bg-gradient-to-tr from-[#210cae] to-[#60efff] w-60 h-60 flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#60efff] my-4"

        >
          <div className="flex flex-row items-center h-9 space-x-6">
            <div className="relative">
              <img src={bloop} alt="bloop" className="w-12 absolute left-0 z-0 -top-3 opacity-70" />

              <CgWebsite className="text-[#1bd8b5] text-3xl ml-5 relative z-10" />
            </div>

            <p className="text-white font-extrabold text-xl">Web app</p>
          </div>

          <p className="text-white">El uso de nuevas tecnologías para la resolución de problemas en aplicaciones web</p>
        </div>
      </div>

      <div className="md:col-start-4 md:col-span-2 md:row-start-2 col-start-3 col-span-9">
        <div className="flex bg-gradient-to-tr from-[#d397fa] to-[#8364e8] md:w-60 h-48 md:h-60  flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#8364e8]"

        >
          <div className="flex  flex-row items-center h-9 space-x-6 w-full">
            <div className="relative">
              <img src={bloop} alt="bloop" className="w-12 absolute left-0 z-0 -top-3 opacity-70" />

              <CgWebsite className="text-[#1bd8b5] text-3xl ml-5 relative z-10" />
            </div>

            <p className="text-white font-extrabold text-xl">Mobile First</p>
          </div>

          <p className="text-white">Uso de la estrategia de "mobile first" para tener una agradable interfaz de diseño a la nueva generación.</p>
        </div>
      </div>


      <div className="md:col-span-2 col-start-2 row-start-3 col-span-8">
        <div className="flex bg-gradient-to-tr from-[#439cfb] to-[#8364e8] w-60 flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#439cfb] h-full"

        >
          <div className="flex  flex-row items-center h-9 space-x-6">
            <div className="relative">
              <img src={bloop} alt="bloop" className="w-12 absolute left-0 z-0 -top-3 opacity-70" />

              <CgWebsite className="text-[#1bd8b5] text-3xl ml-5 relative z-10" />
            </div>

            <p className="text-white font-extrabold text-xl">UX</p>
          </div>

          <p className="text-white">Estudio de heuristicas y el mejor manejo de experiencia.</p>
        </div>
      </div>

      <div className="md:col-span-2 md:col-start-4 row-start-4 col-start-3 col-span-9">
        <div className="flex bg-gradient-to-tr from-[#210cae] to-[#60efff] md:w-60 md:h-52  flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#60efff]"

        >
          <div className="flex  flex-row items-center h-9 space-x-6">
            <div className="relative">
              <img src={bloop} alt="bloop" className="w-12 absolute left-0 z-0 -top-3 opacity-70" />

              <CgWebsite className="text-[#1bd8b5] text-3xl ml-5 relative z-10" />
            </div>

            <p className="text-white font-extrabold text-xl">Patrones</p>
          </div>

          <p className="text-white">Estudio de diseño de patrones para resolución persistentes en el desarrollo web</p>
        </div>
      </div>


      <div className="col-span-12 flex p-3 md:col-start-7 flex-col md:col-end-12 mt-3">

        <h3 className="text-gray-400 flex mt-5"><span><img src={line} alt="line" className="mx-3" /></span>Qué hago?</h3>

        <div className="p-3 flex self-end h-auto md:w-[95%] w-full  flex-col">
          <h2 className="text-white text-2xl md:text-6xl ">Mejor Diseño</h2>
          
          <h2 className="text-white text-2xl md:text-6xl ">Mejor Experiencia </h2>

          
        </div>


       <div className='flex flex-row-reverse relative md:p-6 md:flex-col'>
       <div className="flex  h-auto  flex-col  w-1/2  self-center  z-10 md:w-full">
          <p className="text-gray-400 text-lg md:text-3xl ">Muestra diseños innovadores y experiencia de usuario únicos </p>
        </div>

        <div className='flex w-2/4 p-2 md:w-full md:justify-center'>
          <Player
            style={{ width: '100%', height: '100%' }}
            autoplay
            loop
            speed='1'
            mode="normal"
            src={'https://assets7.lottiefiles.com/packages/lf20_0k0q6wmw.json'}

          >

          </Player>



        </div>

       </div>

      </div>

    

    </div>
  )
}

