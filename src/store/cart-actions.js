import { uiActions } from "./ui-slice";
import { cartItemsCounterActions } from "./cartitems";

export const fetchCartData = () => {
    return async(dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://http-requests-14d51-default-rtdb.europe-west1.firebasedatabase.app/newitems.json'
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            const data = await response.json();
            console.log(data)
            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartItemsCounterActions.replaceCart(
                {
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity
                }
            ))

        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Fetching cart data failed!'
                })
            )
        }
    }
}

export const sendCartData = (cartItemsCounter) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data!'
        })
    )
    
    const sendRequest = async () => {
        const response = await fetch(
        'https://http-requests-14d51-default-rtdb.europe-west1.firebasedatabase.app/newitems.json', {
      method: 'PUT',
      body: JSON.stringify({items: cartItemsCounter.items, totalQuantity: cartItemsCounter.totalQuantity}),
        }
    );
    
    if (!response.ok) {

      throw new Error('Something went wrong.');
      
    }};

    try {
        await sendRequest();

        dispatch(
            uiActions.showNotification({
              status: 'success',
              title: 'Success',
              message: 'Sent cart data successfully!'
            })
          )
    } catch (error) {
        dispatch(
            uiActions.showNotification({
              status: 'error',
              title: 'Error',
              message: 'Sending cart data failed!'
            })
            )
          console.log(error)
    };
    }
};