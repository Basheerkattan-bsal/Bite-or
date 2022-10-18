import {useContext} from 'react'
import DishSingleForm from './DishSingleForm';
import classes from './DishSingle.module.css';
import CartContext from '../../context/cartPage-context';


const DishSingle = props => {
  const cartCon = useContext(CartContext)
  const onAddToCartHandler = amount => {
      cartCon.addDish({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
  }
  return (
    <li>
      <div className={classes.dishBox}>
        <div><img src={props.img} alt='dish' /></div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{props.price}€</p>
      </div>
      <div>
        <DishSingleForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default DishSingle;
