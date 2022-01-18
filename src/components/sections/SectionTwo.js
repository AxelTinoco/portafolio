import bloop from '../../assets/svg/bloop.svg'
import line from '../../assets/svg/line.svg'
import {CgWebsite} from "react-icons/cg"


export const SectionTwo = () => {
    return (
        <div className="col-span-12 grid grid-cols-12 md:grid-rows-5 grid-rows-6  h-screen bg-[#14104b]">
        <div className="col-span-2 col-start-2">
              <div className="flex bg-gradient-to-tr from-[#210cae] to-[#60efff] w-60 h-60 flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#60efff]"
              
              >
                 <div className="flex  flex-row items-center h-9 space-x-6">
                  <div className="relative">
                    <img src={bloop} alt="bloop"  className="w-12 absolute left-0 z-0 -top-3 opacity-70"/>
  
                   <CgWebsite className="text-[#1bd8b5] text-3xl ml-5 relative z-10"/>
                  </div>
                   
                  <p className="text-white font-extrabold text-xl">Web app</p>
                 </div>
  
                 <p className="text-white">Use a new tecnologies and more performance with resolution problems </p>
              </div>
            </div>
          
          <div className="col-start-4 col-span-2 row-start-2">
          <div className="flex bg-gradient-to-tr from-[#d397fa] to-[#8364e8] w-60 h-48 md:h-60  flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#8364e8]"
              
              >
                 <div className="flex  flex-row items-center h-9 space-x-6">
                  <div className="relative">
                    <img src={bloop} alt="bloop"  className="w-12 absolute left-0 z-0 -top-3 opacity-70"/>
  
                   <CgWebsite className="text-[#1bd8b5] text-3xl ml-5 relative z-10"/>
                  </div>
                   
                  <p className="text-white font-extrabold text-xl">Web app</p>
                 </div>
  
                 <p className="text-white">Use a new tecnologies and more performance with resolution problems </p>
              </div>
          </div>
  
  
          <div className="col-span-2 col-start-2 row-start-3 ">
          <div className="flex bg-gradient-to-tr from-[#439cfb] to-[#8364e8] w-60 flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#439cfb]"
              
              >
                 <div className="flex  flex-row items-center h-9 space-x-6">
                  <div className="relative">
                    <img src={bloop} alt="bloop"  className="w-12 absolute left-0 z-0 -top-3 opacity-70"/>
  
                   <CgWebsite className="text-[#1bd8b5] text-3xl ml-5 relative z-10"/>
                  </div>
                   
                  <p className="text-white font-extrabold text-xl">UX</p>
                 </div>
  
                 <p className="text-white">Use a new tecnologies and more performance with resolution problems </p>
              </div>
          </div>
  
          <div className="col-span-2 col-start-4 row-start-4">
              <div className="flex bg-gradient-to-tr from-[#210cae] to-[#60efff] w-60 md:h-52  flex-col rounded-3xl p-3 
              shadow-2xl shadow-[#60efff]"
              
              >
                 <div className="flex  flex-row items-center h-9 space-x-6">
                  <div className="relative">
                    <img src={bloop} alt="bloop"  className="w-12 absolute left-0 z-0 -top-3 opacity-70"/>
  
                   <CgWebsite className="text-[#1bd8b5] text-3xl ml-5 relative z-10"/>
                  </div>
                   
                  <p className="text-white font-extrabold text-xl">Web app</p>
                 </div>
  
                 <p className="text-white">Use a new tecnologies and more performance with resolution problems </p>
              </div>
            </div>
  
  
          <div className="col-span-12 flex p-3 md:col-start-7 flex-col md:col-end-12">
  
           <h3 className="text-gray-400 flex mt-5"><span><img src={line} alt="line" className="mx-3" /></span> What I Do?</h3>
  
            <div className="  p-3 ">
              <h2 className="text-white text-2xl md:text-6xl">Better Designs</h2>
              <h2 className="text-white text-2xl md:text-6xl">Better Experience</h2>
  
              <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quasi blanditiis quia eligendi</p>
            </div>
  
          </div>
          
        </div>
    )
}
