/* eslint-disable react/no-unescaped-entities */
import { CiTrash, CiViewTable } from 'react-icons/ci';

import { TbBasketCheck } from 'react-icons/tb';
import { InfinitySpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { titleTripler } from '../helper/helper';
import { useHook } from '../context/ProductContext';

/* eslint-disable react/prop-types */
function Card({ displayed }) {
 const {error}=useHook();
 const { id, title, image, price }=displayed;

   return (
      <>
         { error ? (
            <div className='flex items-center justify-center mx-auto my-auto h-20 bg-red-500 shadow-xl shadow-red-500  rounded-xl p-20 text-2xl animate-bounce '>data not responding pls try again </div>
         ) : (
            <div className="">
               {!displayed.length ? (
                  <div className="flex justify-center items-center mr-96">
                     <InfinitySpin visible={true} width="200" hight="500" color="#4fa94d" ariaLabel="infinity-spin-loading" />
                  </div>
               ) : (
                  <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                     {displayed.map(({id, title, image, price }) => (
                        <div key={id} className="bg-white flex border-2 rounded-lg flex-col justify-between shadow-md w-fit p-6 gap-y-10">
                           <div className="w-80 h-80 ">
                              <img src={image} alt={title} className="w-full h-full" />
                           </div>
                           <div className="flex flex-col gap-y-3 mt-4">
                              <p className="w-56 text-orange-600 font-bold">{titleTripler(title)}</p>
                              <span className="text-xl">${price}</span>
                           </div>
                           <div className="flex justify-between">
                              <Link to="/product/id:">
                                 <CiViewTable className="text-orange-600 w-9 h-9 hover:text-black transition-all duration-300" />
                              </Link>
                              <div className='flex '>
                                 <CiTrash className="text-orange-600 w-9 h-9 hover:text-black transition-all duration-300"/>
                               <span>1</span>
                              <TbBasketCheck className="text-white bg-orange-600 rounded w-9 h-9 hover:bg-white hover:text-orange-600 transition-all duration-300 cursor-pointer" />
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         )}
      </>
   );
}

export default Card;
