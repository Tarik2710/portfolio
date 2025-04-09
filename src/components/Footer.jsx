import React from 'react'
import Icon from './Icon';

const Footer = () => {
  return (
    <div className="w-full bg-neutral-300 p-2 text-center
text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 flex justify-center items-center">
      <p className='mr-3'>© 2025 Bijedić Tarik</p>
    <div className='flex items-center justify-center'><Icon/></div> 
    </div>
);
}

export default Footer;
