import React from 'react';
import port1 from '../assets/port1.png';
import pagetwo from '../assets/pagefive.png';
import pagethree from '../assets/pagethree.png';
import pagefour from '../assets/pagefour.png';
import { MotionAnimate } from 'react-motion-animate'

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-[#0A1828] text-[#d5f7e6] p-6">
     <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.10, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.1, 0.5, 0.6, 0.8]}>
      <h2 className="font-bold text-center md:mt-12 text-4xl md:text-7xl sm:text-3xl lg:mb-5 lg:pb-14 sm:mb-5 sm:uppercase sm:shadow-lg">
        My Portfolio
      </h2>
      <div className="flex flex-wrap justify-center overflow-hidden">
        <div className="bg-[#011e31] rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-l-2 border-t-2  border-solid border-[#7c8991] mt-3">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={port1}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md cursor-pointer"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4 text-[#deb992] max-w-[300px] font-medium text-justify">
              John Doe Portfolio, use plain HTML and CSS. This is a long paragraph to demonstrate text wrapping.
            </p>
            <button className="bg-[#dca010] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block overflow-hidden hover:scale-105 transition duration-500 ">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="bg-[#011e31]  rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-1 border-solid border-[#7c8991] mt-3 border-y-2">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={pagetwo}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4 text-[#deb992] font-medium max-w-[300px] text-justify">
              Relvise Finance and Consultancy Solution, use HTML, Bootstrap and CSS.
            </p>
            <button className="bg-[#dca010] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="bg-[#011e31]   rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-1 border-solid border-[#7c8991] mt-3 border-r-2 border-b-2">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={pagethree}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md  cursor-pointer"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4 text-[#deb992] font-medium max-w-[300px] text-justify">
              Primax, page for digital agency, use HTML, CSS and Bootstrap.
            </p>
            <button className="bg-[#dca010] hover:bg-[#2d5252]  text-black uppercase font-black  mt-10 py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="bg-[#011e31]  rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-l-2 border-t-2 border-solid border-[#7c8991]">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={pagefour}
              alt="Slika"
              className="w-full h-40 rounded-t-md cursor-pointer border-spacing-10"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4 text-[#deb992] font-medium max-w-[300px] text-justify ">
              Travel Agency, use HTML, Bootstrap and CSS for style. This is a long paragraph to demonstrate text wrapping.
            </p>
            <button className="bg-[#dca010] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="bg-[#011e31]   rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-solid border-[#7c8991] border-y-2">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={pagefour}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md  cursor-pointer border-spacing-10"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4 text-[#deb992] font-medium max-w-[300px] text-justify">
              Travel Agency, use HTML, Bootstrap and CSS for style. This is a long paragraph to demonstrate text wrapping.
            </p>
            <button className="bg-[#dca010] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="bg-[#011e31]  rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-r-2 border-b-2 border-solid border-[#7c8991]">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={pagefour}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md cursor-pointer border-spacing-10"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4 text-[#deb992] font-medium max-w-[300px] text-justify ">
              Travel Agency, use HTML, Bootstrap and CSS for style. This is a long paragraph to demonstrate text wrapping.
            </p>
            <button className="bg-[#dca010] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
    </MotionAnimate>
    </div>
  );
};

export default Projects;
