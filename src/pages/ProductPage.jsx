import { useEffect, useState } from 'react';

import { useHook } from '../context/ProductContext';
import Card from '../components/Card';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { categoryedHandler, createQuaryObject, reloadHandler, searchedHandler } from '../helper/helper';
import { useSearchParams } from 'react-router-dom';

function ProductPage() {
   const product = useHook();
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
         setQuary((quary) => createQuaryObject(quary, { category: event.target.innerText.toLowerCase() }));
      } else return;
   };

   const searchHandler = () => {
      setQuary((quary) => createQuaryObject(quary, { search: search }));
   };
   console.log(quary);

   return (
      <div className="xl:container">
         <div className="flex items-center gap-x-4">
            <input
               onChange={(event) => setSearch(event.target.value.toLowerCase())}
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
                  <li className="mt-3">All</li>
                  <li className="mt-3">Electronics</li>
                  <li className="mt-3">Jewelery</li>
                  <li className="mt-3">Men's Clothing</li>
                  <li className="mt-3">Women's Clothing</li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default ProductPage;
