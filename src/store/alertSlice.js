import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alertMessageContent: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    Open_Alert_Message(state, action) {
      state.showAlert = true;
      state.alertMessageContent = action.payload;
    },
    Close_Alert_Message(state, action) {
      state.showAlert = false;
      state.alertMessageContent = null;
    },
  },
});

export const { Open_Alert_Message, Close_Alert_Message } = alertSlice.actions;

export default alertSlice.reducer;
