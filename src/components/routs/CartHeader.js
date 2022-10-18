
import bite from '../../img/bite2-header1.png'
import classes from '../header/Header.module.css';
import CartHomeButton from './CartHomeButton'





const CartHeader = () => {
    return(
    <div>
    <header className={classes.header}>
      
      <div className={classes.text}>
      <h1>
        BITE.order{' '}
      </h1>
        <span>
          <img className={classes.logo} src={bite} alt="teeth" />
        </span>
      </div>
      
      <CartHomeButton />
    </header>
   
  </div>
);
   
  
};

export default CartHeader;