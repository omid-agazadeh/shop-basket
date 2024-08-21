import React from 'react';
import Header from './Header';

function Layouts({ children }) {
   return (
      <>
         <Header />
         {children}
      </>
   );
}

export default Layouts;
