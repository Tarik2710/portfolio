import React from 'react';
import osoba from '../assets/covjek.jpg';
import { MotionAnimate } from 'react-motion-animate'



const About = () => {
  return (
    <div className='bg-[#0A1828]'>
    
      <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0A1828] relative overflow-hidden shadow-md  border-b-2 border-[#202f3b]">
    {/* Levi container - Slika u kartici */}
<div className="md:w-1/2 relative z-10 p-8 ">
      <div className="bg-dda15e rounded-lg overflow-hidden border-10 shadow-2xl shadow-black">
        <img
          src={osoba}
          alt="Slika"
          className="object-cover w-full h-full border-[15px] shadow-black"
        />
      </div>
    </div> 

      {/* Desni container - Tekst i Button */}
      <div className="md:w-1/2 p-8 text-[#DEBD99] font-medium text-center relative z-20  ">
       <h2 className="text-4xl md:text-7xl sm:text-3xl font-bold lg:mb-10 sm:mb-5 shadow-lg ">ABOUT ME</h2>
        <p className="xl:mb-10 lg:mb-10 text-justify text-xl font-bold sm:text-base sm:mb-5 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button className="bg-[#dca010] hover:bg-[#2d5252] text-black uppercase font-black py-2 px-4 rounded shadow-lg hover:shadow-2xl sm:mb-16">
          See My CV
        </button>
      </div>

      {/* Prikazuje se slika na mobilnim uređajima */}
      <div className="md:hidden w-full h-full hidden absolute top-0 left-0 right-0 bottom-0 z-10">

        <img
          src={osoba}
          alt="Slika"
          className="object-cover w-full h-1/2 xl:w-1/2 md:h-full border-4 border-white"
        />
      </div>
    </div>
        </MotionAnimate>
    </div>
  );
};

export default About;
