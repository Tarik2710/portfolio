
import React, { useEffect, useState } from "react";


const Icon = () => {
    
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1900);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return "";
    }
  
    return <div>    
    <li className="list-none  flex sm:justify-center lg:justify-start ">
        <a href="https://github.com/Tarik2710" target="_blank"  rel="noreferrer"  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 list-none">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>

        {/* <a rhef="https://github.com/Tarik2710" target="_blank"  rel="noreferrer"  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 list-none">
            <svg className="h-10 w-8 ml-2" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" >
                <path fill-rule="evenodd"
                    d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                    fill="currentColor"></path>
            </svg></a>


        <a href="https://github.com/Tarik2710" target="_blank"   rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 list-none">
        <svg className="h-10 w-8 ml-2" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd"
                    d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                    clip-rule="evenodd"></path>
            </svg>
        </a> */}
    </li>
    </div>;
  
}

export default Icon;