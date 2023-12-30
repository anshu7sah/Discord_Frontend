import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import alertSlice from "./alertSlice";
import friendSlice from "./friendsSlice";
import { thunk } from "redux-thunk";
import friendsSlice from "./friendsSlice";
import chatSlice from "./chatSlice";
import roomSlice from "./roomSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertSlice,
    friends: friendsSlice,
    chats: chatSlice,
    room: roomSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});
