import { useEffect, useState } from 'react';

import { useHook } from '../context/ProductContext';
import Card from '../components/Card';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { categoryedHandler, createQuaryObject, reloadHandler, searchedHandler } from '../helper/helper';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/Search';
import SideBar from '../components/SideBar';

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

   return (
      <div className="xl:container">
         <Search search={search} setSearch={setSearch} setQuary={setQuary} />
         <div className="flex justify-end">
            <Card displayed={displayed} />
            <SideBar quary={quary} setQuary={setQuary} />
         </div>
      </div>
   );
}

export default ProductPage;
