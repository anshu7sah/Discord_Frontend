import {
  openRoom,
  setActiveRooms,
  setLocalStream,
  setRemoteStream,
  setRoomDetails,
} from "../store/roomSlice";
import { store } from "../store/store";
import * as socketConnection from "./socketConnection";
import * as webRTCHandler from "./webRTCHandler";
export const createNewRoom = () => {
  const successCallbackFunction = () => {
    store.dispatch(
      openRoom({
        isUserInRoom: true,
        isUserRoomCreater: true,
      })
    );
    socketConnection.createNewRoom();
  };
  const onlyAudio = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(onlyAudio, successCallbackFunction);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};
export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  const friends = store.getState().friends.friends;
  const rooms = [];

  activeRooms.forEach((room) => {
    friends?.forEach((f) => {
      if (f.id === room?.roomCreater.userId) {
        rooms.push({ ...room, createrUsername: f.username });
      }
    });
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallbackFunction = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(
      openRoom({
        isUserInRoom: true,
        isUserRoomCreater: false,
      })
    );
    socketConnection.joinRoom({ roomId });
  };
  const onlyAudio = store.getState().room.audioOnly;

  webRTCHandler.getLocalStreamPreview(onlyAudio, successCallbackFunction);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  const localStream = store.getState().room.localStreams;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
  }

  store.dispatch(setRemoteStream([]));
  webRTCHandler.closeAllConnection();

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(
    openRoom({
      isUserInRoom: false,
      isUserRoomCreater: false,
    })
  );
};
