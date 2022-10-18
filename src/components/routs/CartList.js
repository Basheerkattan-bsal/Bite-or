const CartList = props => {
  return (
    <li>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign:'center'

        }}
      >
        <h3 style={{minWidth: '10%'}}>{props.name}</h3>

        <h4>Amount : {props.amount}</h4>

        <h4>Price: {props.price.toFixed(2)}</h4>
        <h4>Price: {props.price.toFixed(2) * props.amount}</h4>
      </div>
    </li>
  );
};

export default CartList;
