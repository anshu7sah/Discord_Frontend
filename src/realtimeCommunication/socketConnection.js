// import io from "socket.io-client";
// import { store } from "../store/store";
// import { setPendingFriendsInvitations } from "../store/friendsSlice";

// let socket = null;
// export const connectWithSocketServer = (userDetails) => {
//   const jwtToken = userDetails.token;
//   socket = io("http://localhost:5002", {
//     auth: {
//       token: jwtToken,
//     },
//   });

//   socket.on("connect", () => {
//     console.log("successfully connected with socketio");
//     console.log(socket.id);
//   });
//   socket.on("friends-invitations", (data) => {
//     const { pendingInvitations } = data;
//     console.log("live pending invitations", pendingInvitations);
//     store.dispatch(setPendingFriendsInvitations(pendingInvitations));
//   });
// };
// socketConnection.js

import { useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  setFriends,
  setOnlineUser,
  setPendingFriendsInvitations,
} from "../store/friendsSlice";
import { updateDirectChatHistoryIfActive } from "../Shared/utils/updateDirectChatHistoryIfActive";

let socket = null;
const useSocketConnection = (userDetails) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwtToken = userDetails?.token;
    socket = io("http://localhost:5002", {
      auth: {
        token: jwtToken,
      },
    });

    socket.on("connect", () => {
      console.log("successfully connected with socketio");
      console.log(socket.id);
    });

    socket.on("friends-invitations", (data) => {
      const { pendingInvitations } = data;
      console.log("live pending invitations", pendingInvitations);
      dispatch(setPendingFriendsInvitations(pendingInvitations));
    });
    socket.on("friends-list", (data) => {
      const { friends } = data;
      dispatch(setFriends(friends));
    });
    socket.on("online-users", (data) => {
      const { onlineUsers } = data;
      dispatch(setOnlineUser(onlineUsers));
    });

    socket.on("direct-chat-history", (data) => {
      updateDirectChatHistoryIfActive(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, userDetails?.token]);

  return null;
};
export const sendDirectMessage = (data) => {
  socket?.emit("direct-message", data);
};
export const getDirectChatHistory = (data) => {
  socket?.emit("direct-chat-history", data);
};

export default useSocketConnection;
