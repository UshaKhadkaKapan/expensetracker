import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  response: {},
  isloading: false,
};

const regLoginSlice = createSlice({
  name: "regLogin",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = regLoginSlice;

export const { setisLoading, setResponse } = actions;

export default reducer;
