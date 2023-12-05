import React from 'react';
import pageone from '../assets/port1.png';
import pagetwo from '../assets/pagefive.png';
import pagethree from '../assets/pagethree.png';
import pagefour from '../assets/pagefour.png';
import pagefive from '../assets/pagetwo.png';
import pagesix from '../assets/pagesix.png';
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
                          delay={0.4}
                          speed={2}
                          ease={[0.75, 0.45, 0.53, 0.94]}
                          reset={true}>
      <div className="flex flex-wrap justify-center overflow-hidden xxl:mx-[300px] ultraxl:mx-[500px] xl:mx-[100px] lg:mx-0">
        <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-l-2 border-2  border-solid border-[#ffff] mt-3">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={pageone}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md cursor-pointer"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4 text-[#ffff] max-w-[300px] font-medium text-justify">
              John Doe Portfolio, use plain HTML and CSS. This is a long paragraph to demonstrate text wrapping.
            </p>
            <button className="bg-[#ffff] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block overflow-hidden hover:scale-105 transition duration-500 ">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-1 border-solid border-[#ffff] mt-3 border-2">
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
            <p className="text-lg mb-4  font-medium max-w-[300px] text-justify">
              Relvise Finance and Consultancy Solution, use HTML, Bootstrap and CSS.
            </p>
            <button className="bg-[#ffff] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black  rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-1 border-solid border-[#ffff] mt-3 border-r-2 border-2">
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
            <p className="text-lg mb-4  font-medium max-w-[300px] text-justify">
              Primax, page for digital agency, use HTML, CSS and Bootstrap.
            </p>
            <button className="bg-[#ffff] hover:bg-[#2d5252]  text-black uppercase font-black  mt-10 py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-l-2 border-2 border-solid border-[#ffff]">
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
            <p className="text-lg mb-4  font-medium max-w-[300px] text-justify ">
              Travel Agency, use HTML, Bootstrap and CSS for style. This is a long paragraph to demonstrate text wrapping.
            </p>
            <button className="bg-[#ffff] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-solid border-[#ffff] border-2">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={pagesix}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md  cursor-pointer border-spacing-10"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4  font-medium max-w-[300px] text-justify">
              Travel Agency, use HTML, Bootstrap and CSS for style. This is a long paragraph to demonstrate text wrapping.
            </p>
            <button className="bg-[#ffff] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  rounded-md shadow-2xl p-8 mb-8 mx-auto overflow-hidden hover:scale-105 transition duration-500 border-r-2 border-2 border-solid border-[#ffff]">
          {/* Gornji deo slike (ceo gornji deo) */}
          <div className="mb-4">
            <img
              src={pagefive}
              alt="Slika"
              className="object-cover w-full h-40 rounded-t-md cursor-pointer border-spacing-10"
            />
          </div>
          {/* Sadržaj kartice */}
          <div>
            <p className="text-lg mb-4 font-medium max-w-[300px] text-justify ">
              Travel Agency, use HTML, Bootstrap and CSS for style. This is a long paragraph to demonstrate text wrapping.
            </p>
            <button className="bg-[#ffff] hover:bg-[#2d5252]  text-black uppercase font-black py-2 px-4 rounded mx-auto block">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
          </MotionAnimate>
    </MotionAnimate>
    </div>
  );
};

export default Projects;
