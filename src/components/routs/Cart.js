import React, { Fragment } from 'react';
import { useContext } from 'react';
import CartContext from '../../context/cartPage-context';
import CartList from './CartList';
import classes from './Cart.module.css';
import CartHeader from './CartHeader';

const Cart = () => {
  const cartCon = useContext(CartContext);
  const ordersInCart = cartCon.dishes.length > 0;
  
  const cartDishes = (
    <ul className={classes.cartList}>
      {cartCon.dishes.map(dish => (
        <CartList
          key={dish.id}
          name={dish.name}
          price={dish.price}
          amount={dish.amount}
        />
      ))}
    </ul>
  );
  return (
    <Fragment>
      <CartHeader />

      <div className={classes.cart}>
        <div>{cartDishes}</div>
        <div className={classes.payment}>
          <span>Total Amount</span>
          <span>{cartCon.totalAmount}€</span>
        </div>
        <div className={classes.click}>
          {ordersInCart && <button>Order</button>}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
