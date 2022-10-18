import classes from './DishesDescription.module.css';

const DishesDescription = () => {
  return (
    <section className={classes.description}>
      <h2>Top-class food right to your doorstep</h2>
      <p>
        Choose from our variety meals which cooked with love and passion 
      </p>
      <p className={classes.offer}>
        Subscribe now in our weekly lucky meal to have a chance of 35% off on
        any meal of your choice
      </p>
    </section>
  );
};

export default DishesDescription;
