import {
  acceptFriendInvitationApi,
  login,
  register,
  rejectFriendInvitationApi,
  sendFriendInvitationApi,
} from "../api";
import { Open_Alert_Message } from "./alertSlice";
import { setUserDetails } from "./authSlice";

export const loginActions = (userData, navigate) => {
  return async (dispatch) => {
    const response = await login(userData);
    if (response?.error) {
      dispatch(Open_Alert_Message(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};
export const registerActions = (userData, navigate) => {
  return async (dispatch) => {
    const response = await register(userData);
    console.log(response);
    if (response?.error) {
      dispatch(Open_Alert_Message(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

export const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await sendFriendInvitationApi(data);
    if (response.error) {
      dispatch(Open_Alert_Message(response.exception?.response?.data));
    } else {
      dispatch(Open_Alert_Message("Invitation has been sent!"));
      closeDialogHandler();
    }
  };
};

export const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await acceptFriendInvitationApi(data);
    if (response.error) {
      dispatch(Open_Alert_Message(response.exception?.response?.data));
    } else {
      dispatch(Open_Alert_Message("Invitation accepted!"));
    }
  };
};
export const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await rejectFriendInvitationApi(data);
    if (response.error) {
      dispatch(Open_Alert_Message(response.exception?.response?.data));
    } else {
      dispatch(Open_Alert_Message("Invitation rejected!"));
    }
  };
};
