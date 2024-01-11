import { Fragment, useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData, sendCartData } from './store/cart-actions';

function App() {
  const dispatch = useDispatch();
  const showHideCart = useSelector(state => state.showCartToggle.isShown)
  const itemlist = useSelector(state => state.cartItems)
  const notification = useSelector(state => state.notificationSection.notification)

  console.log(notification)

  const [isInitial, updateIsInitial] = useState(true);

  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(() => {

    if (isInitial) {
      updateIsInitial(false)
      return
    }
    
    if (itemlist.changed)
    {
      dispatch(sendCartData(itemlist))
    }
    
  }, [itemlist, dispatch])


  return (
    <Fragment>
    {notification && <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
    />}
      <Layout>
        {showHideCart && <Cart data={itemlist} />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
