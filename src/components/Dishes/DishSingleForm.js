import { useRef } from 'react';
import classes from './DishSingleForm.module.css';
import Input from '../input/Input';

const DishSingleForm = props => {
  const inputRef = useRef();
  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = Number(inputRef.current.value);
    if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5) {
      return;
   }
   
   props.onAddToCart(enteredAmount);
};


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="dish(s)"
        input={{ id: 'amount', type: 'number', min: '1' , defaultValue: 1}}
      />
      <button>Add to Cart</button>
    </form>
  );
};

export default DishSingleForm;
