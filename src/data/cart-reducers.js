import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-Slice";
// import { notificationAction } from "./notification-slice";

const store = configureStore({
    reducer: {cart: cartSlice.reducer}
})

export default store