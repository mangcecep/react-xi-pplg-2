import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import { userReducer } from "./userSlice";
import { productReducer } from "./productSlice";

export const store = configureStore({
    reducer: combineReducers({
        product: productReducer,
        cart: cartReducer,
        user: userReducer
    }),
})