import React from 'react';


const CartContext  = React.createContext({
    dishes: [],
    totalAmount: 0,
    addDish: (dish) => {},
   


})

export default CartContext; 