import React, { useState } from 'react';
import computerUsers from '../assets/users.png'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const [showSecondAnimation, setShowSecondAnimation] = useState(false);

    setTimeout(() => {
      setShowSecondAnimation(true);
    }, 1000);
  return (
    <div className="xl:flex lg:flex items-center xl:h-3/3 bg-[#0A1828] h-screen  border-b-2 border-[#202f3b]">
{/* Levi container */}
  <div className="xl:w-1/2 lg:w-1/2 xl:mb-25 lg:mb-20  md:w-full sm:w-full bg-[#0A1828] p-8 text-center  ">
    <p className='xl:my-5 xl:text-4xl xl:text-left lg:text-left lg:text-4xl sm:text-3xl text-[#d6ad81]'>Hi, I'm</p>
        <div className='xl:my-5 xl:text-left lg:text-left'>
        <TypeAnimation className='text-[#DEBD99] font-medium lg:text-6xl md:text-4xl sm:text-4xl'
        sequence={[
        'Bijedić Tarik',
        1500,]}
         wrapper="span"
        speed={50}
        style={{display:'inline-block', paddingTop: '20px',}}
        repeat={1}
        cursor={false} 
        /></div>
        {showSecondAnimation && (<div className='xl:my-5 lg:text-left xl:text-lg xl:text-left sm:text-2xl sm:text-center'>
        <TypeAnimation className='text-[#DEBD99] lg:text-7xl md:text-5xl sm:text-5xl mt-5'
        sequence={[
        'Frontend Developer',
        1500,]}
         wrapper="span"
        speed={10}
        style={{display: 'inline-block'}}
         cursor={false}
        repeat={1}/></div> )}
        </div>
  

  {/* Desni container */}
  <div className="xl:w-1/2 lg:w-1/2 max-h-1/2">
    {/* Slika koja zauzima 50% širine desne strane */}
    <img
      src={computerUsers}
      alt="Opis slike"
      className="object-cover max-h-1/2 lg:w-[700px] lg:mx-auto md:mx-auto sm:w-[500px] sm:mx-auto xl:ml-10 md:h-full"
    />
  </div>
</div>
  )
}

export default Home;