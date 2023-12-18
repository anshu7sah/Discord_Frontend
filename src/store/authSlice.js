import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userDetails: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = authSlice.actions;

export default authSlice.reducer;
