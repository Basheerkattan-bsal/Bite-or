import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/cartPage-context';
import classes from './HeaderButton.module.css';


const HeaderButton = () => {
  const CartCon = useContext(CartContext);
  const  NumberOfOrders = CartCon.dishes.reduce((curr, dish) =>{
    return curr + dish.amount
  }, 0 )
  return (
    <div>
 <NavLink to='cart' className={classes.button}>
      <span className={classes.icon}>
      🛒
      </span>
      <span>Your Cart</span>
      <span className={classes.quantity}>{NumberOfOrders}</span>
    </NavLink>
    <Outlet />
    </div>
   
  );
};

export default HeaderButton;
