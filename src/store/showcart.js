import { createSlice } from "@reduxjs/toolkit";

const initialState = { isShown: true};

const showCart = createSlice({
    name: 'showcart',
    initialState,
    reducers: {
        showHideCart(state) {
            state.isShown = !state.isShown;
        }
   }
})

export const showCartActions = showCart.actions;

export default showCart.reducer;