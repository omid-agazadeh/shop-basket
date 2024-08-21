import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';

function Header() {
   return (
      <header>
         <div className="container mt-10">
            <div className="bg-orange-600 p-6 rounded-xl flex justify-between items-center">
               <h1 className="text-2xl text-white font-bold text-center">Dimoliya</h1>
               <div className='hover:bg-white transition-all duration-300 p-2 rounded-lg'>
                  <CgShoppingCart className='w-8 h-8 text-white hover:text-orange-600' />{' '}
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
