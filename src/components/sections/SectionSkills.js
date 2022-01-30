
import line from '../../assets/svg/line.svg'
import { SectionImgSkills } from './SectionImgSkills'

export const SectionSkills = () => {
    return (
        <div className='col-span-12 flex md:h-screen h-contain text-left flex-col p-3 md:flex-row min-h-[700px]'>
        
          <div className='md:w-1/2 w-full flex flex-col h-full justify-center'>
          <h3 className="text-gray-400 flex mt-5"><span><img src={line} alt="line" className="mx-3" /></span>Mis habilidades</h3>
           <h2 className='text-white text-2xl md:text-6xl md:my-4'>Mis lenguajes</h2>
           <p className="text-gray-400 md:text-2xl">Mi experiencia con estos lenguajes , frameworks y herramientas para el desarrollo, todo esto
           practicado y/o con certificación
           </p>
        
          </div>

           <SectionImgSkills/>
           
        </div>
    )
}
