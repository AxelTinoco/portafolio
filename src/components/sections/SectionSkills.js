
import line from '../../assets/svg/line.svg'
import { SectionImgSkills } from './SectionImgSkills'

export const SectionSkills = () => {
    return (
        <div className='col-span-12 flex md:h-screen h-contain text-left flex-col p-3 md:flex-row'>
        
          <div className='md:w-1/2 w-full flex flex-col h-full justify-center'>
          <h3 className="text-gray-400 flex mt-5"><span><img src={line} alt="line" className="mx-3" /></span>My Skills</h3>
           <h2 className='text-white text-2xl md:text-6xl'>My Lenguages & Tools</h2>
           <p className="text-gray-400 md:text-2xl">My experinece with this Lenguages in projects , certificates and courses</p>
        
          </div>

           <SectionImgSkills/>
           
        </div>
    )
}
