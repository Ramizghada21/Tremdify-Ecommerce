import { configureStore } from './node_modules/@reduxjs/toolkit';
import { cartSlice } from "./cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer, // Use .reducer here
    },
});
