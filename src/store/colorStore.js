import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// 1. INITIAL STATE
const initialState = {
  color: "dark",
};

// 2. ACTIONS inside the REDUCER
export const colorReducer = createSlice({
  name: "colorStore", // A name, used in action types
  initialState, // The initial state for the reducer
  reducers: {
    changeColor: (state) => {
      if (state.color === "dark") return { color: "primary" };
      else if (state.color === "primary") return { color: "success" };
      else if (state.color === "success") return { color: "danger" };
      else if (state.color === "danger") return { color: "dark" };
    },
  },
});

// 3a. EXPORT THE ACTIONS (this is sent to components)
export const { changeColor: changeColor } = colorReducer.actions;

// 3b. CREATE THE STORE (this is sent to index.js)
export const store = configureStore({
  reducer: {
    colorStore: colorReducer.reducer,
  },
});