import React from 'react';
import osoba from '../assets/img/covjek.jpg';
import Pdf from '../assets/cv.pdf';



const About = () => {
  return (
    <div className='bg-[#181818]' name='about'>


        <div className="transition-opacity ease-in duration-700
animate-fade-up animate-duration-1000 animate-delay-500 w-full
min-h-screen flex flex-col md:flex-row items-center justify-center
bg-[#181818] relative overflow-hidden shadow-md border-b-4
border-[#4b4f58]">

          <div className="md:w-1/2 lg:w-1/2 xxl:w-1/3 ultraxl:w-1/3
xxl:mx-20 relative z-10 p-4 ">
            <div className="bg-dda15e rounded-lg overflow-hidden
border-10 shadow-2xl shadow-black">
              <img
                src={osoba}
                alt="Slika"
                className="object-cover w-full h-full border-[15px]
shadow-black"
              />
            </div>
          </div>


          <div className="md:w-1/2  xl:p-8 lg:p-8 md:p-8 sm:p-4
text-[#f5f3f4] font-medium text-center relative z-20 xxl:mt-3 xl:mt-10
md:mt-16  lg:mt-5 sm:mt-0 ">
            <h2 className="text-4xl md:text-7xl sm:text-3xl font-bold
lg:mb-10 sm:mb-5 shadow-lg xxl:text-4xl xl:text-6xl ultraxl:text-6xl
lg:mt-16  ">ABOUT ME</h2>
            <p className="xl:mb-10 lg:mb-10 text-justify text-xl
font-bold sm:text-base sm:mb-5 xl:text-1xl ultraxl:text-2xl
leading-relaxed ">Hello, I am  Tarik Bijedić. I am currently a junior
web developer. My knowledge is based on HTML, CSS and JavaScript,
proficient in using frameworks such as Tailwind, Bootstrap, and ReactJS.
What motivated my journy in IT world was wish, to understand mechanics
behind what happens when we interact with a digital interface. One of
the appealing aspects of jobs in this field is the potential for a
substantial salary. My main goal is making dynamic and funcional pages,
providing users with great online experience. I have hands-on experience
with Content Management Systems (CMS) and have successfully worked with
platforms like WordPress and PrestaShop. What makes this world more
intriguing is the fact that there is always more to learn, and by that
progress and engagement in this field is undeniable to me.</p>
            <a href={Pdf} without rel="noopener noreferrer"
target="_blank"><button trailingIcon="picture_as_pdf" label="Resume"
className="bg-[#ffffff] hover:text-white
hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]
from-sky-400 to-blue-800 transition duration-700 ease-in-out
hover:scale-110  text-black uppercase font-black py-2 px-4 rounded
shadow-lg hover:shadow-2xl sm:mb-16 sm:mt-10 lg:mt-5 xxl:p-4
xxl:text-lg">
              See My CV
            </button></a>

          </div>

          <div className="md:hidden w-full h-full hidden absolute top-0
left-0 right-0 bottom-0 z-10">

            <img
              src={osoba}
              alt="Slika"
              className="object-cover w-full h-1/2 xl:w-1/2 md:h-full
border-4 border-white"
            />
          </div>
        </div>
    </div>
  );
};

export default About;