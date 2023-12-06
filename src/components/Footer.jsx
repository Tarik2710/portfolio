import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF)


const Footer = () => {
  return (



    <div className="w-full bg-neutral-300 p-4 text-center
text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      © 2023 Bijedić Tarik
    </div>
);
}

export default Footer;