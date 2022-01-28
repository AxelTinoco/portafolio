import { Player } from '@lottiefiles/react-lottie-player';
import { BsWhatsapp } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { ImLinkedin } from 'react-icons/im'
import line from '../../assets/svg/line.svg'


export const SectionContact = () => {
    return (
        <div className="col-span-12 h-contain md:h-[70vh] flex flex-col md:flex-row-reverse">
            <div className='md:w-1/2 flex h-full flex-col w-full'>
                <div className='w-full p-3 md:space-y-4'>
                    <h3 className="text-gray-400 flex mt-5"><span><img src={line} alt="line" className="mx-3" /></span>Contácteme!</h3>
                    <h2 className='text-white text-2xl md:text-6xl'>Manda un mensaje</h2>
                    <p className='text-gray-400 md:text-2xl'>Tengamos más proyectos juntos, más soluciones y sueños por cumplir</p>
                </div>

                <div className='w-full p-3 flex md:space-x-3 flex-row md:h-1/2 mt-6 items-start flex-wrap h-full'>

                    <div className='flex items-center space-x-3 p-2'>
                        <BsWhatsapp className='text-white text-3xl' />
                        <a href="https://api.whatsapp.com/send?phone=5538284348" 
                        className='text-white'>55-38-28-43-48</a>
                    </div>

                   
                        <div className='flex space-x-3 items-center p-2'>
                        <ImLinkedin className='text-white text-3xl cursor-pointer' />
                        <a href="https://www.linkedin.com/in/axeltinoco/" 
                        className='text-white'>/in/axeltinoco</a>
                        </div>

                        <div className='flex space-x-3 items-center p-2'>
                            <FiMail className='text-white text-3xl' />
                            <a href="mailto:axeltm8@gmail.com" 
                            className='text-white'>axeltm8@gmail.com</a>

                        </div>

               



                </div>
            </div>


            <div className='flex h-[70%] md:w-1/2 justify-center'>
                <Player
                    style={{ width: '100%', height: '100%' }}
                    autoplay
                    loop
                    speed='1'
                    mode="normal"
                    src={'https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json'}

                >

                </Player>

            </div>


        </div>
    );
};



