import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"
import { userReducer } from "./userSlice";

export default configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        user: userReducer
    }
})