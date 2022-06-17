import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  response: {},
  transactions: [],
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.response = payload;
      state.isLoading = false;
    },
    setTransactions: (state, { payload }) => {
      state.transaction = payload;
    },
  },
});

const { reducer, action } = dashboardSlice;

export const { setIsLoading, setResponse, setTransactions } = actions;

export default reducer;
