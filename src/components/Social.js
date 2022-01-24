import React from 'react'
import {ImGithub,ImLinkedin} from 'react-icons/im'


export const Social = () => {
    return (
        <div className='md:flex text-white flex-row w-full space-x-4 text-2xl pt-3  my-6 z-50 hidden'>
            <h3 className="opacity-50">Follow me!</h3>
            <a href="https://github.com/AxelTinoco">
                <ImGithub className=' opacity-50 hover:opacity-100 cursor-pointer'/>
            </a>
            <a href="https://www.linkedin.com/in/axeltinoco/">
            <ImLinkedin className=' opacity-50 hover:opacity-100 cursor-pointer'/>
            </a>
        </div>
    )
}
