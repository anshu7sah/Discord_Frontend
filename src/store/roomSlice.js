import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserInRoom: false,
  isUserRoomCreater: false,
  roomDetails: null,
  activeRooms: [],
  localStreams: [],
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
  userJoinedWithAudioOnly: false,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    openRoom(state, action) {
      state.isUserInRoom = action.payload.isUserInRoom;
      state.isUserRoomCreater = action.payload.isUserRoomCreater;
    },
    setRoomDetails(state, action) {
      state.roomDetails = action.payload;
    },
    setActiveRooms(state, action) {
      state.activeRooms = action.payload;
    },
    setLocalStream(state, action) {
      console.log(action.payload);
      state.localStreams = action.payload;
    },
    setAudioOnly(state, action) {
      state.audioOnly = action.payload;
    },
    setRemoteStream(state, action) {
      state.remoteStreams = action.payload;
    },
    setScreenSharingStream(state, action) {
      state.screenSharingStream = action.payload || null;
      state.isScreenSharingActive = action.payload ? true : false;
    },
    setUserJoinedWithAudioOnly(state, action) {
      state.userJoinedWithAudioOnly = action.payload;
    },
  },
});

export const {
  openRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setAudioOnly,
  setRemoteStream,
  setScreenSharingStream,
  setUserJoinedWithAudioOnly,
} = roomSlice.actions;

export default roomSlice.reducer;
