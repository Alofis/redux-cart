import { configureStore } from "@reduxjs/toolkit";
import showCart from '../store/showcart'
import cartItemsCounter from "../store/cartitems";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        showCartToggle: showCart,
        cartItems: cartItemsCounter,
        notificationSection: uiSlice
    }
})

export default store;