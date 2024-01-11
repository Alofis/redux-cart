import classes from './CartItem.module.css';
import { cartItemsCounterActions } from '../../store/cartitems'
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(cartItemsCounterActions.addItem({
      id: props.id,
    }))
  }

  const decreaseHandler = () => {
    dispatch(cartItemsCounterActions.removeItem({
      id: props.id,
    }))
  }



  return (
    <div>
   <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.totalPrice.toFixed(2)}
          <span className={classes.itemprice}>(${props.price.toFixed(2)} per item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
    </div> 
  );
};

export default CartItem;
