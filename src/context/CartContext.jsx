import React, { createContext, useContext, useReducer } from 'react';
import { sunProducts } from '../helper/helper';
const initaialState = {
   items: [],
   price: 0,
   count: 0,
};

const reducer = (state, action) => {
   console.log(state);

   switch (action.type) {
      case 'ADD':
         if (!state.items.find((product) => product.id === action.payload.id)) {
            state.items.push({ ...action.payload, numer: 1 });
         }
         return {
            items: [...state.items],
            ss: sunProducts(state.items),
         };
      default:
         throw new Error(';alfsnjojkahfsjaikfsgaisgfahisbd');
   }
};
const CartContext = createContext();
function CartProvider({ children }) {
   const [dataa, dispatch] = useReducer(reducer, initaialState);

   return <CartContext.Provider value={{ dataa, dispatch }}>{children}</CartContext.Provider>;
}
const useCart = () => {
   const { dataa, dispatch } = useContext(CartContext);
   return { dataa, dispatch };
};
export { useCart };
export default CartProvider;
