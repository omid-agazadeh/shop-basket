import React from 'react'
import { createQuaryObject } from '../helper/helper';
import { RxHamburgerMenu } from 'react-icons/rx';

function SideBar({quary,setQuary}) {
    const categoryHandler = (event) => {
        if (event.target.tagName === 'LI') {
           setQuary((quary) => createQuaryObject(quary, { category: event.target.innerText.toLowerCase() }, 'category'));
        } else return;
     };
  return (
    <div onClick={categoryHandler} className="bg-white border-4 p-4 w-72 h-fit ml-5 rounded-xl shadow-lg">
               <span className="flex items-center gap-x-3 text-xl text-orange-600">
                  <RxHamburgerMenu className=" w-7 h-7" />
                  categoryes
               </span>
               <ul className="mt-3 ml-3">
                  <li className={`${!quary.category && 'bg-orange-500 text-purple-600 hover:text-white'} mt-2 p-2 hover:text-red-500 rounded-lg cursor-pointer `}>All</li>
                  <li className={`${quary.category === 'electronics' ? 'bg-orange-500 text-purple-600 hover:text-white' : 'bg-white hover:text-red-500'} mt-2 p-2 rounded-lg cursor-pointer `}>
                     Electronics
                  </li>
                  <li className={`${quary.category === 'jewelery' ? 'bg-orange-500 text-purple-600 hover:text-white' : 'bg-white hover:text-red-500'} mt-2 p-2 rounded-lg cursor-pointer `}>
                     Jewelery
                  </li>
                  <li
                     className={`${
                        quary.category === "men's clothing" ? 'bg-orange-500 text-purple-600 hover:text-white' : 'bg-white hover:text-red-500'
                     } mt-2 p-2 rounded-lg cursor-pointer hover:text-red-500`}
                  >
                     Men's Clothing
                  </li>
                  <li className={`${quary.category === "women's clothing" ? 'bg-orange-500 text-purple-600 hover:text-white' : 'bg-white hover:text-red-500'} mt-2 p-2 rounded-lg cursor-pointer `}>
                     Women's Clothing
                  </li>
               </ul>
            </div>
  )
}

export default SideBar