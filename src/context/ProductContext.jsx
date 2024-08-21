import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/config';
const ProductContext = createContext();

function ProductProvider({ children }) {
   const [product, setProduct] = useState([]);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const response = await api.get('/products');
            setProduct(response);
         } catch (error) {
            setError(true);
         }
      };
      fetchProduct();
   }, []);

   return <ProductContext.Provider value={{ product: product, error: error }}>{children}</ProductContext.Provider>;
}
const useHook = () => {
   const ProductData = useContext(ProductContext);
   return ProductData;
};
export { useHook };
export default ProductProvider;
