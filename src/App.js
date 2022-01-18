
import { Navbar } from "./components/Navbar";
import { Numbers } from "./components/Numbers";
import photo from "./assets/img/photo.jpg"
import square from "./assets/svg/square.svg"
import triangle from "./assets/svg/triangle.svg"
import { Social } from "./components/Social";
import { SectionTwo } from "./components/sections/SectionTwo";
import { SectionWorks } from "./components/sections/SectionWorks";
import { SectionSkills } from "./components/sections/SectionSkills";




function App() {




  return (
    <div className="grid grid-cols-12 relative bg-[#14104b] w-screen">

      <Navbar />
      <div className='col-span-12 p-3 flex flex-col h-screen md:flex-row'>
        <div className="flex w-full md:w-1/2 flex-col h-[50%] md:h-full relative z-50  ">
          <div className="mt-10">
            <p className="text-gray-400 md:text-2xl">Hello I'm</p>
          </div>
         
          <h1 className="text-white text-6xl flex md:my-10 md:text-7xl">Christian A. Tinoco</h1>

         

          <h2 className="text-gray-400 text-3xl my-4 flex  md:my-10 md:text-5xl" >UX Designer & Frontend Developer</h2>

          <button className="outline-[#1bd8b5] outline-1 outline p-2 w-1/2 rounded-xl cursor-pointer flex justify-center  md:my-8">
            <p className="text-[#1bd8b5]">Get mi CV</p> 
          </button>

          <Numbers />

          <Social/>
        </div>

          <div className="flex w-full md:w-1/2 justify-center h-full items-center relative">

               <div className="w-[80%] md:w-[60%] relative">
               <img src={photo} className="w-full rounded-tr-[2rem] rounded-bl-[2rem] shadow-2xl z-10 relative" alt="Axel Tinoco" />
                <div className="bg-tictac absolute bg-repeat h-28 w-28 -left-[10%] -top-[10%] opacity-25 z-0">
                </div>
                <img src={triangle} alt="triangle" className="absolute w-24 h-20 z-20 transform rotate-45 -top-5 opacity-50 -left-[10%]" />
                <img src={square} alt="square" className="absolute w-24 h-24 -right-5 -top-8 opacity-50 z-0" />
                <div className="absolute bg-repeat h-24 w-24 bg-anchors -right-5 -bottom-[10%] opacity-50">

                </div>

               </div>

          </div>





      </div>

      <SectionTwo />

      <SectionWorks />

      <SectionSkills />

     



    </div>
  );
}

export default App;
