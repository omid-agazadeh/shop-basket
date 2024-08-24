import { useEffect, useState } from 'react';

import { useHook } from '../context/ProductContext';
import Card from '../components/Card';

import { categoryedHandler, reloadHandler, searchedHandler } from '../helper/helper';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/Search';
import SideBar from '../components/SideBar';
import { InfinitySpin } from 'react-loader-spinner';

function ProductPage() {
   const { product } = useHook();
   const [displayed, setDisplayed] = useState([]);
   const [search, setSearch] = useState();
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
 
   
   return (
      <div className="xl:container">
         <Search search={search} setSearch={setSearch} setQuary={setQuary} />
         <div className="flex justify-end">
            <div className="">
               {!displayed.length ? (
                  <div className="flex justify-center items-center mr-96">
                     <InfinitySpin visible={true} width="200" hight="500" color="#4fa94d" ariaLabel="infinity-spin-loading" />
                  </div>
               ) : (
                  <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                     {displayed.map((data) => (
                        <Card key={data.id} data={data} />
                     ))}
                  </div>
               )}
            </div>

            <SideBar quary={quary} setQuary={setQuary} />
         </div>
      </div>
   );
}

export default ProductPage;
