import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {items: [], totalQuantity: 0, changed: false};

const cartItemsCounter = createSlice({
    name: 'cartitemscounter',
    initialState,
    reducers: {
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
            console.log(action.payload)
        },
        addItem (state,action){
            const newItem = action.payload;
            state.changed = true;
            console.log(newItem)
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    description: newItem.description,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
        },
        removeItem (state, action){
            state.changed = true;
            const id = action.payload.id;
            console.log(id)
            state.totalQuantity--;
            const existingItem = state.items.find( item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const cartItemsCounterActions = cartItemsCounter.actions;

export default cartItemsCounter.reducer;