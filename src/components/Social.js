import React from 'react'
import {ImGithub,ImTwitter,ImLinkedin} from 'react-icons/im'


export const Social = () => {
    return (
        <div className='md:flex text-white flex-row w-full space-x-4 text-2xl pt-3  my-6 z-50 hidden'>
            <h3 className="opacity-50">Follow me!</h3>
            <ImGithub className=' opacity-50 hover:opacity-100 cursor-pointer'/>
            <ImTwitter className=' opacity-50 hover:opacity-100 cursor-pointer'/>
            <ImLinkedin className=' opacity-50 hover:opacity-100 cursor-pointer'/>
        </div>
    )
}
