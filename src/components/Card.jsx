/* eslint-disable react/no-unescaped-entities */
import { CiTrash, CiViewTable } from 'react-icons/ci';

import { TbBasketCheck } from 'react-icons/tb';
import { InfinitySpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { titleTripler } from '../helper/helper';
import { useHook } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

/* eslint-disable react/prop-types */
function Card({ data }) {
   const { id, title, image, price } = data;
   const { error } = useHook();
   const { dispatch } = useCart();

   const clickHanlder = (data) => {
      dispatch(data);
   };

   return (
      <>
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
               <div className="flex ">
                  <CiTrash className="text-orange-600 w-9 h-9 hover:text-black transition-all duration-300" />
                  <span>1</span>
                  <TbBasketCheck
                     onClick={() => clickHanlder({ type: 'REMOVE', payload: data })}
                     className="text-white bg-orange-600 rounded w-9 h-9 hover:bg-white hover:text-orange-600 transition-all duration-300 cursor-pointer"
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default Card;
