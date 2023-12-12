import React from 'react';
import { MotionAnimate } from 'react-motion-animate'
import CardsContainer from './CardsContainer';


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
                        <CardsContainer/>
          </MotionAnimate>
    </MotionAnimate>
    </div>
  );
};

export default Projects;
