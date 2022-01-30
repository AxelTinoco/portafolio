
import { Player } from '@lottiefiles/react-lottie-player';
import { Navbar } from "./components/Navbar";
import { Numbers } from "./components/Numbers";
import photo from "./assets/img/photo.jpg"
import square from "./assets/svg/square.svg"
import triangle from "./assets/svg/triangle.svg"
import { Social } from "./components/Social";
import { SectionTwo } from "./components/sections/SectionTwo";
import { SectionWorks } from "./components/sections/SectionWorks";
import { SectionSkills } from "./components/sections/SectionSkills";
import { SectionContact } from "./components/sections/SectionContact";




function App() {




  return (
    <div className="grid grid-cols-12 relative bg-[#14104b] w-screen">

      <Navbar />
      <div className='col-span-12 p-3 flex flex-col md:h-screen md:flex-row leading-10 w-full min-h-[900px]' id="home">
        <div className="flex w-full md:w-1/2 flex-col h-[50%] md:h-full relative z-50  lg:space-y-6">
          <div className="mt-10">
            <p className="text-gray-400 md:text-2xl">Hola Soy</p>
          </div>

          <div className='flex flex-row '>
            <div className='flex w-24 items-start h-contain md:items-center '>
              <Player
                style={{ width: '100%', height: '100%' }}
                autoplay
                loop
                speed='1'
                mode="normal"
                src={'https://assets8.lottiefiles.com/packages/lf20_sdaaptwl.json'}

              >

              </Player>
            </div>
            <h1 className="text-white text-3xl sm:text-6xl flex md:my-2 lg:text-7xl lg:my-6">Christian A. Tinoco</h1>

          </div>



          <h2 className="text-gray-400 text-2xl flex  md:my-2 md:text-5xl my-1 " >UX Designer & Frontend Developer</h2>

          <a href="https://drive.google.com/file/d/1tE15Dq2cxpfcKaPNYqTlthYCUJJfsCR6/view?usp=sharing"  className=''>
          <button className="outline-[#1bd8b5] outline-1 outline p-1 md:p-2 my-2 w-1/2 rounded-xl cursor-pointer 
          flex justify-center  hover:bg-[#1bd8b5] hover:bg-opacity-20 low-transition ">
              <p className="text-[#1bd8b5]">Obtén mi CV</p>
          </button>
          </a>

          <Numbers />

          <Social/>
        </div>

        <div className="flex w-full md:w-1/2 justify-center h-full relative items-center my-2">

          <div className="w-[80%] sm:w-3/5 md:w-[60%] relative">
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

      <div className='col-span-12'>
       <SectionTwo />

      </div>

      <div className='col-span-12' id='works'>
        <SectionWorks />

      </div>

      <SectionSkills />

      <div className='col-span-12' id='contact'>
        <SectionContact id="section4" name="contact" />

      </div>



    </div>
  );
}

export default App;
