import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-Slice";
import whiseListSlice from "./whiseList-Slice";

// import { notificationAction } from "./notification-slice";

const store = configureStore({
    reducer: {cart: cartSlice.reducer, whiseList: whiseListSlice.reducer}
})

export default store