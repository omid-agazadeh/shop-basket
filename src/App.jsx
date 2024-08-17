import { Navigate, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import CheckBoxPage from './pages/CheckBoxPage';
import ErrorPage from './pages/404';
import ContextPage from './context/ProductContext';

function App() {
   return (
      <>
         <ContextPage>
            <Routes>
               <Route path="/product" element={<ProductPage />} />
               <Route path="/" element={<Navigate to="/product" replace />} />
               <Route path="/product/id:" element={<DetailPage />} />
               <Route path="/CheckBox" element={<CheckBoxPage />} />
               <Route path="/*" element={<ErrorPage />} />
            </Routes>
         </ContextPage>
      </>
   );
}

export default App;
