import line from '../../assets/svg/line.svg'
import foto from '../../assets/img/foto.jpg'

export const SectionWorks = () => {
    return (
        <div className="col-span-12 p-3 grid grid-cols-12 h-full gap-3">
            <div className='col-span-12  p-2 h-32 flex flex-col  gap-2'>
                <h3 className="text-gray-400 flex mt-5"><span><img src={line} alt="line" className="mx-3" /></span>My Works</h3>
                <h2 className='text-white text-2xl md:text-6xl'>My recent Projects</h2>
            </div>

            <div className='col-span-12 md:col-span-4  bg-black h-96 relative'>
                <div className='w-full h-full flex absolute'>
                    <img src={foto} alt="" className='w-full h-full object-cover'/>
                </div>

                <div className='flex w-full h-24 bg-black absolute bottom-0 z-20'>
                    <h2 className='text-white'>Journal App</h2>
                </div>

            </div>
            <div className='col-span-12 md:col-span-4 bg-black h-96 my-4 md:m-0'>
                <div className='w-full h-full flex'>
                    <img src={foto} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className='col-span-12 md:col-span-4 bg-black h-96 my-4 md:m-0'>
                <div className='w-full h-full flex'>
                    <img src={foto} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className='col-span-12 md:col-span-4 bg-black h-96 my-4 md:m-0'>
                <div className='w-full h-full flex'>
                    <img src={foto} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>

            <div className='col-span-12 md:col-span-4 bg-black h-96 my-4 md:m-0'>
                <div className='w-full h-full flex'>
                    <img src={foto} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>

    )
}
