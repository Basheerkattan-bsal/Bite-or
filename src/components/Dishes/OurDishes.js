import { getDishes } from './data';
import DishSingle from './DishSingle';
import classes from './OurDishes.module.css';

const OurDishes = () => {
  const dishes = getDishes();
  const dishesList = dishes.map(dish => (
    <DishSingle
      key={dish.id}
      id={dish.id}
      img={dish.img}
      name={dish.name}
      description={dish.description}
      price={dish.price}
    />
  ));
  return (
    <section className={classes.dishes}>
      <ul>{dishesList}</ul>
    </section>
  );
};

export default OurDishes;
