import { setLocalStream, setRemoteStream } from "../store/roomSlice";
import { store } from "../store/store";
import Peer from "simple-peer";
import { signalPeerData } from "./socketConnection";

const onlyAudioConstrains = {
  audio: true,
  video: false,
};
const defaultConstrains = {
  video: true,
  audio: true,
};

const getConfiguration = () => {
  const turnIceServers = null;
  if (turnIceServers) {
    //ToDO use TURN sever credentials
  } else {
    console.warn("using only STUN server");
    return {
      iceServers: [
        {
          urls: "stun:stun.1.google.com:19302",
        },
      ],
    };
  }
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constrains = onlyAudio ? onlyAudioConstrains : defaultConstrains;

  navigator.mediaDevices
    .getUserMedia(constrains)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((err) => {
      console.log(err);
      console.log("can not get access to local stream");
    });
};

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStreams;
  if (isInitiator) {
    console.log("Preparing new peer connectino");
  } else {
    console.log("preparingnew peer connection as not initiator");
  }
  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });
  peers[connUserSocketId].on("signal", (data) => {
    const signalData = {
      signal: data,
      connUserSocketId,
    };
    signalPeerData(signalData);

    //ToDO
    //pass signaling data to other user
    //socketConnection.signalPeerData(signalData);
  });

  peers[connUserSocketId].on("stream", (remoteStream) => {
    console.log("remote stream came from other users");

    //TODO
    //add new remote stream to our server store

    remoteStream.connUserSocketId = connUserSocketId;
    addNewRemoteStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { connUserSocketId, signal } = data;
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];
  store.dispatch(setRemoteStream(newRemoteStreams));
};

export const closeAllConnection = () => {
  Object.entries(peers).forEach((mappedObect) => {
    const connUserSocketId = mappedObect[0];
    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy();
      delete peers[connUserSocketId];
    }
  });
};

export const handleParticipantLeftRoom = (data) => {
  const { connUserSocketId } = data;
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
  }
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = remoteStreams.filter(
    (remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
  );
  store.dispatch(setRemoteStream(newRemoteStreams));
};
