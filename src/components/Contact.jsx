import React from 'react'
import { MotionAnimate } from 'react-motion-animate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faEnvelope, faPhone)



const Contact = () => {
  return (
    <div className='bg-[#181818]' name='contact'>
    <MotionAnimate
                        animation='fadeInUp'
                        reset={true}
                        distance={1}
                        delay={0.2}
                        speed={0.5}>
    <div className='w-full min-h-screen flex justify-center'> 
    
        <form method='POST' action="https://getform.io/f/4ec4b650-7aa1-474c-969c-a66d556454d2" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 '>
                <h3 className=' text-[#ffff] text-4xl font-extrabold uppercase mb-5 md:mt-12 md:text-7xl sm:text-3xl flex items-center justify-center shadow-lg mt-10 tracking-wide'>Contact</h3>
                <p className='text-[#ffff] py-4 flex items-center text-xl sm:ml-7'> <FontAwesomeIcon icon="fa-solid fa-envelope" className="sm:text-2xl flex mr-3 font-semibold"/> <button onClick={() => window.location = 'mailto:tarik.bijedic@yahoo.com'}>tarik.bijedic@yahoo.com</button></p>
                <p className='text-[#ffff] py-2 text-xl items-center flex  sm:ml-7'> <FontAwesomeIcon icon="fa-solid fa-phone" className=" sm:text-2xl mr-3  py-2 font-semibold"/>065/646-550</p>
            </div>
    
            <input className='bg-[#ffff] p-2 sm:mx-7' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffff] sm:mx-7' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffff] p-2 sm:mx-7 max-h-[250px] min-h-[250px]'  name="message" rows="10" placeholder='Message'></textarea>
            <button className="bg-[#ffff] hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 hover:text-white text-black uppercase font-black py-2 px-4 rounded mx-auto block transition duration-700 ease-in-out hover:scale-105 my-10">SUBMIT</button>
        </form>
    </div>
        </MotionAnimate>
    </div>
  )
}

export default Contact;