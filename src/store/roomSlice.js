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
  },
});

export const {
  openRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setAudioOnly,
  setRemoteStream,
} = roomSlice.actions;

export default roomSlice.reducer;
