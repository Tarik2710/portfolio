import React from 'react';
import pageone from '../assets//img/port1.webp';
import pagetwo from '../assets/img/relvise.webp';
import pagethree from '../assets/img/primax.webp';
import pagefour from '../assets/img/travel.webp';
import pagefive from '../assets/img/agency.webp';
import pagesix from '../assets/img/univ.webp';
import { MotionAnimate } from 'react-motion-animate'

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-[#181818] text-[#f5f3f4] border-b-2 border-[#4b4f58]  p-6" name='portfolio'>
     <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.10, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.1, 0.5, 0.6, 0.8]}>
      <h2 className="font-bold text-center md:mt-12 text-4xl md:text-7xl sm:text-3xl lg:mb-5 lg:pb-14 sm:mb-8 sm:uppercase sm:shadow-lg">
        My Portfolio
      </h2>
      <MotionAnimate
                          delay={0.1}
                          speed={2}
                          ease={[0.75, 0.45, 0.53, 0.94]}
                          reset={true}>
      <div className="flex flex-wrap justify-center overflow-hidden xxl:mx-[300px] ultraxl:mx-[500px] xl:mx-[100px] lg:mx-0">
        <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black rounded-md p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 mt-3 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] hover:duration-1000 ">
         
          <div className="mb-4">
            <img
              src={pageone}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md cursor-pointer"
            />
          </div>
          
          <div>
            <p className="text-lg text-[#ffff] max-w-[300px] mb-10 font-medium text-justify">
              John Doe Portfolio, used plain HTML and CSS. 
            </p>
            <a href="https://github.com/Tarik2710/johndoeportfolio" target="_blank"  rel="noreferrer" ><button className="bg-[#ffff] hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  hover:text-white text-black uppercase font-black py-2 px-4 rounded mx-auto block overflow-hidden transition duration-700 ease-in-out hover:scale-105 ">
              SEE MORE
            </button></a>
          </div>
        </div>

        <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black rounded-md p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 mt-3 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] hover:duration-1000">
          
          <div className="mb-4">
            <img
              src={pagetwo}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md"
            />
          </div>
          
          <div>
            <p className="text-lg mb-4  font-medium max-w-[300px] text-justify ">
              Relvise Finance and Consultancy Solution, used HTML CSS and Bootstrap.
            </p>
            <a href="https://github.com/Tarik2710/relvise" target="_blank"  rel="noreferrer" >
            <button className="bg-[#ffff] hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  text-black hover:text-white uppercase font-black py-2 px-4 rounded mx-auto block transition duration-700 ease-in-out hover:scale-105">
              SEE MORE
            </button></a>
          </div>
        </div>

        <div className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black  rounded-md p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 mt-3 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] hover:duration-1000">
          
          <div className="mb-4">
            <img
              src={pagethree}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md  cursor-pointer"
            />
          </div>
        
          <div>
            <p className="text-lg mb-4  font-medium max-w-[300px] text-justify">
              Primax digital agency, used HTML CSS and Bootstrap.
            </p>
            <a href="https://github.com/Tarik2710/primax" target="_blank"  rel="noreferrer" >
            <button className="bg-[#ffff] hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  text-black hover:text-white uppercase font-black  mt-10 py-2 px-4 rounded mx-auto block transition duration-700 ease-in-out hover:scale-105 ">
              SEE MORE
            </button></a>
          </div>
        </div>

        <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 ">
          
          <div className="mb-4">
            <img
              src={pagefour}
              alt="Slika"
              className="w-full h-40 rounded-t-md cursor-pointer border-spacing-10"
            />
          </div>
         
          <div>
            <p className="text-lg mb-4  font-medium max-w-[300px] text-justify ">
              Travel Star Agency used HTML CSS and Bootstrap.
            </p>
            <a href="https://github.com/Tarik2710/travelstar" target="_blank"  rel="noreferrer" >
            <button className="mt-5 bg-[#ffff] hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 hover:text-white text-black uppercase font-black py-2 px-4 rounded mx-auto block transition duration-700 ease-in-out hover:scale-105">
              SEE MORE
            </button></a>
          </div>
        </div>
        <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] hover:duration-1000">
     
          <div className="mb-4">
            <img
              src={pagesix}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md  cursor-pointer border-spacing-10"
            />
          </div>
     
          <div>
            <p className="text-lg mb-4  font-medium max-w-[300px] text-justify">
            Architecture Websites Examples used HTML, CSS and Bootstrap
            </p>
            <a href="https://github.com/Tarik2710/lorem" target="_blank"  rel="noreferrer" >
            <button className=" mt-5 bg-[#ffff] hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 hover:text-white  text-black uppercase font-black py-2 px-4 rounded mx-auto block transition duration-700 ease-in-out hover:scale-105">
              SEE MORE
            </button></a>
          </div>
        </div>
        <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] hover:duration-1000">
        
          <div className="mb-4">
            <img
              src={pagefive}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md cursor-pointer border-spacing-10"
            />
          </div>

          <div>
            <p className="text-lg mb-4 font-medium max-w-[300px] text-justify ">
              Digital Agency, used HTML, CSS, Bootstrap and JS for animate text.
            </p>
            <a href="https://github.com/Tarik2710/digital" target="_blank"  rel="noreferrer" >
            <button className="mt-5 bg-[#ffff] hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 hover:text-white text-black uppercase font-black py-2 px-4 rounded mx-auto block transition duration-700 ease-in-out hover:scale-105 ">
              SEE MORE
            </button></a>
          </div>
        </div>
      </div>
          </MotionAnimate>
    </MotionAnimate>
    </div>
  );
};

export default Projects;
