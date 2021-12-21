import { configureStore } from '@reduxjs/toolkit';
import toysReducer from './toys/reducer';
import cartReducer from './cart/reducer';

export const store = configureStore({
    reducer: {
        toys: toysReducer,
        cart: cartReducer
    }
  })