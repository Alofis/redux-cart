import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import cartitems, { cartItemsCounterActions } from '../../store/cartitems'
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  //console.log(props)
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartItemsCounterActions.addItem({
        id: id,
        title: title,
        description: description,
        price: price,
      }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
