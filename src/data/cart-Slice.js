import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    change: false,
  },
  reducers: {
    replaceCartData(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addTocart(state, action) {
      const newitem = action.payload;
      const exsistingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      if (!exsistingItem) {
        state.items.push({
          id: newitem.id,
          Title: newitem.Text,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
        });
      } else {
        exsistingItem.quantity++;
        exsistingItem.totalPrice =
          exsistingItem.totalPrice + exsistingItem.price;
      }
      state.change = true
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const exsistingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (exsistingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exsistingItem.totalPrice =
          exsistingItem.totalPrice - exsistingItem.price;
        exsistingItem.quantity--;
      }
      state.change = true
    },
   
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
