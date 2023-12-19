import { setMessages } from "../../store/chatSlice";
import { store } from "../../store/store";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;
  const receiverId = store.getState().chats.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails?._id;

  console.log(receiverId, userId);
  if (receiverId && userId) {
    console.log(data);
    const usersInConversation = [receiverId, userId];

    const result = participants.every(function (participantId) {
      return usersInConversation.includes(participantId);
    });

    if (result) {
      store.dispatch(setMessages(messages));
    }
  }
};
