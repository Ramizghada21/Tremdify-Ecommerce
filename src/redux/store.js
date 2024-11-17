import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice'; // Adjust based on your actual file structure

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});
