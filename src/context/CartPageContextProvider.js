import CartContext from './cartPage-context';
import { useReducer } from 'react';

const initialState = {
  dishes: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DISH':
      if (action.type === 'ADD_DISH') {
        const updatedDishes = state.dishes.concat(action.dish);
        const updatedTotalAmount =
          state.totalAmount + action.dish.price * action.dish.amount;
          console.log(state.totalAmount,action.dish.price,action.dish.amount);
        return {
          dishes: updatedDishes,
          totalAmount: updatedTotalAmount,
        };
      }
      break;

    default:
      return state;
  }
};

const CartPageContextProvider = props => {
  const [cartState, cartStateDispatch] = useReducer(cartReducer, initialState);
  const addDishToTheCart = dish => {
    cartStateDispatch({
      type: 'ADD_DISH',
      dish: dish,
    });
  };
 /*  const removeDish = id => {}; */

  const cartContext = {
    dishes: cartState.dishes,
    totalAmount: cartState.totalAmount.toFixed(2),
    addDish: addDishToTheCart,
    /* removeDish: removeDish, */
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartPageContextProvider;
