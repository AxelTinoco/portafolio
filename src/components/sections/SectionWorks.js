import line from '../../assets/svg/line.svg'
import journal from '../../assets/img/journal.png'
import weather from '../../assets/img/weather.png'
import todo from '../../assets/img/todo.png'
import github from '../../assets/img/github-api.png'
import hero from '../../assets/img/hero.png'
import { AnimatedDiv } from '../AnimatedDiv';

export const SectionWorks = () => {


    
    const desc = [
        {
        title : "Journal App",
        desc : "In this app use auth with google api ,firestore and firebase , use redux for this states of authentication ",
        link : 'https://journal-app-drab.vercel.app/auth/login'
        },

        {
            title: "ToDo App",
            desc: "With this app, use the hook use context and local storage for persistence.",
            link: ''
        },
        {
            title: "Wheather App",
            desc: "In this web app, the weather api is used to bring the information and display it.",
            link: 'https://weather-app-red-mu.vercel.app/'
        },
        {
            title: "Github App",
            desc: "GitHub user data is better displayed with its own Api.",
            link: 'https://github-react-app.vercel.app/'
        },
        {
            title: "Hero App",
            desc: "In this SPA is used for global state, private routes to display heroes and more.",
            link: 'https://hero-app-ochre.vercel.app/'
        }

    ]
 
    return (
        <div className="col-span-12 p-3 grid grid-cols-12 h-full gap-3 mt-6">
            <div className='col-span-12  p-2 h-32 flex flex-col  gap-2'>
                <h3 className="text-gray-400 flex mt-5"><span><img src={line} alt="line" className="mx-3" /></span>My Works</h3>
                <h2 className='text-white text-2xl md:text-6xl'>My recent Projects</h2>
            </div>

            <div className='col-span-11 md:col-span-4  bg-black h-96 relative'>
                <div className='w-full h-full flex absolute'>
                    <img src={journal} alt="" className='w-full h-full object-cover'/>
                </div>

               <AnimatedDiv 
               id={1} 
               title={desc[0].title} 
               description={desc[0].desc}
               link={desc[0].link}
               />

            </div>
            <div className='col-span-12 md:col-span-4 bg-black h-96 my-4 md:m-0 relative'>
                <div className='w-full h-full flex'>
                    <img src={todo} alt="" className='w-full h-full object-cover'/>
                </div>

                <AnimatedDiv 
                id={2} 
                title={desc[1].title} 
                description={desc[1].desc}
                link={desc[1].link}
                />
            </div>
            <div className='col-span-12 md:col-span-4 bg-black h-96 my-4 md:m-0 relative'>
                <div className='w-full h-full flex'>
                    <img src={weather} alt="" className='w-full h-full object-cover'/>
                </div>
                <AnimatedDiv 
                id={3} 
                title={desc[2].title} 
                description={desc[2].desc}
                link={desc[2].link}
                />
            </div>
            <div className='col-span-12 md:col-span-4 bg-black h-96 my-4 md:m-0 relative'>
                <div className='w-full h-full flex'>
                    <img src={github} alt="" className='w-full h-full object-cover '/>
                </div>

                <AnimatedDiv 
                id={4} 
                title={desc[3].title} 
                description={desc[3].desc}
                link={desc[3].link}
                />
            </div>

            <div className='col-span-12 md:col-span-4 bg-black h-96 my-4 md:m-0 relative'>
                <div className='w-full h-full flex'>
                    <img src={hero} alt="" className='w-full h-full object-cover'/>
                </div>
                <AnimatedDiv 
                id={5} 
                title={desc[4].title} 
                description={desc[4].desc} 
                link={desc[4].link}
                />
            </div>
        </div>

    )
}
