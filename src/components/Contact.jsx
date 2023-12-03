import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0A1828] p-6 flex justify-center'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-[#DEBD99]'>Contact</p>
                <p className='text-[#DEBD99] py-4 flex items-center font-extrabold'> <FontAwesomeIcon icon="fa-solid fa-inbox" className="text-4xl flex mr-3" />  tarik.bijedic@yahoo.com
                </p>
            </div>
            <input className='bg-[#f2f1df] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f2f1df]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f2f1df] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;