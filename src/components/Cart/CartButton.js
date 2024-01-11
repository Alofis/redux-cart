import classes from './CartButton.module.css';
import { showCartActions } from '../../store/showcart';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cartItems.totalQuantity);

  const showCartHandler = () => {
    dispatch(showCartActions.showHideCart())
  }

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
