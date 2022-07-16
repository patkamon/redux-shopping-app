import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQty: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id == newItem.id
      );
      if (existingItem) {
        existingItem.totalQty += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          totalQty: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQty += 1;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.totalQty === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQty--;
      } else {
        existingItem.totalQty--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
