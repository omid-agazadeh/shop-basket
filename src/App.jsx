import { Navigate, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import CheckBoxPage from './pages/CheckBoxPage';
import ErrorPage from './pages/404';
import Layouts from './layout/Layouts';
import ProductProvider from './context/ProductContext';
import CartProvider from './context/CartContext';

function App() {
   return (
      <>
         <CartProvider>
            <ProductProvider>
               <Layouts>
                  <Routes>
                     <Route path="/product" element={<ProductPage />} />
                     <Route path="/" element={<Navigate to="/product" replace />} />
                     <Route path="/product/id:" element={<DetailPage />} />
                     <Route path="/CheckBox" element={<CheckBoxPage />} />
                     <Route path="/*" element={<ErrorPage />} />
                  </Routes>
               </Layouts>
            </ProductProvider>
         </CartProvider>
      </>
   );
}

export default App;
