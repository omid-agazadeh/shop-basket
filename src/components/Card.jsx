/* eslint-disable react/no-unescaped-entities */
import { CiSearch, CiViewTable } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbBasketCheck } from 'react-icons/tb';
import { InfinitySpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Card({ data }) {
   console.log(data);

   return (
      <>
               <div className="">
                  {data.length === 0 ? (
                     <div className="flex justify-center items-center mr-96">
                        <InfinitySpin visible={true} width="200" hight="500" color="#4fa94d" ariaLabel="infinity-spin-loading" />
                     </div>
                  ) : (
                     <div className=" grid grid-cols-3 gap-5">
                        {data.map(({ id, title, image, price }) => (
                           <div key={id} className="bg-white flex border-2 rounded-lg flex-col justify-between shadow-md w-fit p-6 gap-y-10">
                              <div className="w-80 h-80 ">
                                 <img src={image} alt="" className="w-full h-full" />
                              </div>
                              <div className="flex flex-col gap-y-3 mt-4">
                                 <p className="w-56 text-orange-600 font-bold">{title}</p>
                                 <span>${price}</span>
                              </div>
                              <div className="flex justify-between">
                                 <Link to="/product/id:">
                                    <CiViewTable className="text-orange-600 w-5 h-5 hover:text-black transition-all duration-300" />
                                 </Link>
                                 <TbBasketCheck className="text-white bg-orange-600 rounded w-5 h-5 hover:bg-white hover:text-orange-600 transition-all duration-300 cursor-pointer" />
                              </div>
                           </div>
                        ))}
                     </div>
                  )}
                  
               </div>
      </>
   );
}

export default Card;
