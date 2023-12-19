import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../../Shared/utils/auth";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../store/authSlice";
// import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";
import useSocketConnection from "../../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

export default function Dashboard() {
  const dispatch = useDispatch();
  const userDetails = JSON.parse(localStorage.getItem("user"));

  useSocketConnection(userDetails);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    if (!userDetails) {
      logout();
    } else {
      dispatch(setUserDetails(userDetails));
      // connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);
  return (
    <Wrapper>
      <SideBar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}
