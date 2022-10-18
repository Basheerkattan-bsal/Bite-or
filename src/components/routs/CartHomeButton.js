import { NavLink, Outlet } from 'react-router-dom';

import classes from '../header/HeaderButton.module.css';





const CartHomeButton = () => {
  return (
    <div>
 <NavLink to='/' className={classes.button}>
      <span className={classes.cartHome}>Home</span>
     
    </NavLink>
    <Outlet />
    </div>
   
  );
};

export default CartHomeButton;