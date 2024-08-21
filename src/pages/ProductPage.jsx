import { useEffect, useState } from 'react';

import { useHook } from '../context/ProductContext';
import Card from '../components/Card';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { categoryedHandler, createQuaryObject, reloadHandler, searchedHandler } from '../helper/helper';
import { useSearchParams } from 'react-router-dom';

function ProductPage() {
   const { product } = useHook();
   const [displayed, setDisplayed] = useState([]);
   const [search, setSearch] = useState('');
   const [quary, setQuary] = useState({});
   const [params, setParams] = useSearchParams();

   useEffect(() => {
      setDisplayed(product);
      setQuary(reloadHandler(quary, params));
      setSearch(quary.search);
   }, [product]);
   useEffect(() => {
      let finalProduct = searchedHandler(product, quary.search);
      finalProduct = categoryedHandler(finalProduct, quary.category);
      setDisplayed(finalProduct);
      setParams(quary);
   }, [quary]);

   const categoryHandler = (event) => {
      if (event.target.tagName === 'LI') {
         setQuary((quary) => createQuaryObject(quary, { category: event.target.innerText.toLowerCase() }, 'category'));
      } else return;
   };

   const searchHandler = () => {
      setQuary((quary) => createQuaryObject(quary, { search: search }, 'search'));
   };

   return (
      <div className="xl:container">
         <div className="flex items-center gap-x-4">
            <input
               onChange={(event) => setSearch(event.target.value.toLowerCase())}
               onKeyDown={(e) => e.code === 'Enter' && searchHandler()}
               value={search}
               type="text"
               className="w-96 h-12 mt-24 mb-24 bg-origin-border p-4 pb-5 border-4 border-orange-600 rounded-md border-dashed"
               placeholder="search..."
            />
            <button onClick={searchHandler} className="bg-orange-600 w-12 h-12 flex items-center justify-center rounded-md">
               {' '}
               <CiSearch className="w-10 h-10 text-white" />{' '}
            </button>
         </div>
         <div className="flex justify-end">
            <Card displayed={displayed} />
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
         </div>
      </div>
   );
}

export default ProductPage;
