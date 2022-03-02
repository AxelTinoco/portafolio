import { Player } from '@lottiefiles/react-lottie-player';
import bloop from '../../assets/svg/bloop.svg'
import line from '../../assets/svg/line.svg'
import { CgWebsite } from "react-icons/cg"
import {BsPhone} from "react-icons/bs"


export const SectionTwo = () => {



  return (
    
      <div className='flex flex-col w-full flex-wrap lg:flex-row lg:h-screen min-h-[700px] '>
      

      <div className='flex w-full lg:w-1/2 flex-col lg:grid lg:grid-cols-12 lg:grid-rows-6 h-full'>
      <div className="flex bg-gradient-to-tr from-[#210cae] to-[#60efff] lg:w-60 lg:h-60 flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#60efff] my-4 w-full lg:col-start-2 "
              
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
    

      
        <div className="flex bg-gradient-to-tr from-[#d397fa] to-[#8364e8] flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#8364e8] min-h-[130px] lg:min-h-[250px] mb-4 lg:w-60 lg:col-start-6 lg:row-start-2 "
              
              >
          <div className="flex  flex-row items-center h-9 space-x-6 w-full">
            <div className="relative">
              <img src={bloop} alt="bloop" className="w-12 absolute left-0 z-0 -top-3 opacity-70" />

              <BsPhone className="text-[#1bd8b5] text-3xl ml-5 relative z-10" />
            </div>

            <p className="text-white font-extrabold text-xl">Mobile First</p>
          </div>

          <p className="text-white">Uso de la estrategia de "mobile first" para tener una agradable interfaz de diseño a la nueva generación.</p>
        </div>
      


      
        <div className="flex bg-gradient-to-tr from-[#439cfb] to-[#8364e8] lg:w-60 w-full flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#439cfb] h-full mb-4 lg:row-start-4 lg:col-start-2"
              
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
    

      
        <div className="flex bg-gradient-to-tr from-[#210cae] to-[#60efff] lg:w-60 lg:h-52  flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#60efff] mb-4 lg:col-start-7 lg:row-start-4"
              
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

      <div className='flex lg:w-1/2 flex-col my-6'>

      <div className="flex flex-col">

        <h3 className="text-gray-400 flex mt-5"><span><img src={line} alt="line" className="mx-3" /></span>Qué hago?</h3>

        <div className="p-3 flex self-end h-auto md:w-[95%] w-full  flex-col">
          <h2 className="text-white text-2xl md:text-6xl ">Mejor Diseño</h2>
          
          <h2 className="text-white text-2xl md:text-6xl ">Mejor Experiencia </h2>

        </div>
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

