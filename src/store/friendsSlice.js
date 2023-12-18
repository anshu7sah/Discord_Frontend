import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setPendingFriendsInvitations(state, action) {
      state.pendingFriendsInvitations = action.payload;
    },
    setFriends(state, action) {
      state.friends = action.payload;
    },
    setOnlineUser(state, action) {
      state.onlineUsers = action.payload;
    },
  },
});

export const { setFriends, setOnlineUser, setPendingFriendsInvitations } =
  friendsSlice.actions;

export default friendsSlice.reducer;
