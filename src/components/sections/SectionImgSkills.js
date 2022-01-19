import redux from '../../assets/img/redux1.png'
import react from '../../assets/img/React.svg'
import bootstrap from '../../assets/img/Bootstrap.png'
import JS from '../../assets/img/js.png'
import lottie from '../../assets/img/lottie.svg'
import sass from '../../assets/img/Sass.svg'
import tailwind from '../../assets/img/Tailwind.png'
import npm from '../../assets/img/npm.png'
import python from '../../assets/img/python.png'
import html5 from '../../assets/img/html5.png'
import spring from '../../assets/img/spring.png'
import git from '../../assets/img/git.png'
import logocss from '../../assets/img/css1.png'




export const SectionImgSkills = () => {
    return (
        <div className="flex md:w-1/2 my-2 h-full w-full flex-col justify-center">
           <div className='w-full flex'>
           <div className='w-1/3 items-center flex'>
                <img src={react} alt="react" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-1/3  p-2'>
                <img src={JS} alt="javascript" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-1/3  md:w-40 flex p-2'>
                <img src={redux} alt="redux" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-1/3 md:w-40'>
                <img src={tailwind} alt="tailwind" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-1/3 md:w-40'>
                <img src={spring} alt="tailwind" className='w-full md:h-full object-contain' />
            </div>
           </div>
            <div className='w-full flex items-center'>
            <div className='w-1/3 md:w-24'>
                <img src={bootstrap} alt="bootstrap" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-1/3  md:w-24'>
                <img src={html5} alt="html5" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-[25%]  md:w-20'>
                <img src={logocss} alt="css" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-1/3  md:w-24'>
                <img src={git} alt="git" className='w-full md:h-full object-contain' />
            </div>
            
            <div className='w-1/3  md:w-[20%] flex'>
                <img src={npm} alt="css" className='w-full md:h-full object-contain' />
            </div>

            <div className='hidden md:w-24  md:flex'>
                <img src={lottie} alt="git" className='w-full md:h-full object-contain' />
            </div>
            <div className='hidden md:w-24  md:flex'>
                <img src={sass} alt="git" className='w-full md:h-full object-contain' />
            </div>
            <div className='hidden md:w-24 md:flex'>
                <img src={python} alt="git" className='w-full md:h-full object-contain' />
            </div>
            

           
            </div>

            <div className='w-1/2  flex items-center md:hidden'>
            <div className='w-1/3  md:w-24'>
                <img src={lottie} alt="git" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-1/3  md:w-24'>
                <img src={sass} alt="git" className='w-full md:h-full object-contain' />
            </div>
            <div className='w-1/3  md:w-24'>
                <img src={python} alt="git" className='w-full md:h-full object-contain' />
            </div>
            
            </div>
         
        </div>
    )
}
