import React from 'react';
import pageone from '../assets//img/port1.webp';
import pagetwo from '../assets/img/relvise.webp';
import pagethree from '../assets/img/primax.webp';
import pagefour from '../assets/img/travel.webp';
import pagefive from '../assets/img/agency.webp';
import pagesix from '../assets/img/univ.webp';

const Card = ({ description, link, image }) => {
  return (
    <div className="bg-gradient-to-br xxl:mx-[120px] xxl:my-14
from-gray-700 flex flex-col via-gray-900 to-black rounded-md p-8 mb-8
mx-auto overflow-hidden hover:scale-105 transition duration-500 mt-3
hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
hover:duration-1000 ">
    <div className="mb-4">
      <img
        src={image}
        alt="Slika"
        className="object-cover  sm:min-w-[200px]  w-full h-40 rounded-t-md cursor-pointer min-w-[300px]"
        loading="lazy"
      />
    </div>
    <div className="flex-grow flex flex-col mt-3 h-36">
      <p className="text-lg text-[#ffff] max-w-[300px] mb-4 font-medium
text-justify">
        {description}
      </p>
      <div className="mt-auto mx-auto">
        <a href={link} target="_blank" rel="noreferrer">
          <button className="bg-[#ffff]
hover:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]
from-sky-400 to-blue-800  hover:text-white text-black uppercase
font-black py-2 px-4 rounded overflow-hidden transition duration-700
ease-in-out hover:scale-105 mx-auto">
            SEE MORE
          </button>
        </a>
      </div>
    </div>
  </div>

  );
};

const CardsContainer = () => {
  const cardsData = [
    {
      description: 'John Doe Portfolio, used plain HTML and CSS.',
      link: 'https://github.com/Tarik2710/johndoeportfolio',
      image: pageone,
    },
    {
        description: 'Relvise Finance and Consultancy Solution, used HTML CSS and Bootstrap.',
        link: 'https://github.com/Tarik2710/relvise',
        image: pagetwo,
      },
      {
        description: 'Primax digital agency, used HTML CSS and Bootstrap.',
        link: 'https://github.com/Tarik2710/primax',
        image: pagethree,
      },
      {
        description: 'Travel Star Agency used HTML CSS and Bootstrap.',
        link: 'https://github.com/Tarik2710/travelstar',
        image: pagefour,
      },
      {
          description: 'Architecture Websites Examples used HTML, CSS and Bootstrap',
          link: 'https://github.com/Tarik2710/lorem',
          image: pagesix,
        },
        {
            description: 'Digital Agency, used HTML, CSS, Bootstrap and JS for animate text.',
            link: 'https://github.com/Tarik2710/digital',
            image: pagefive,
          },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsContainer;