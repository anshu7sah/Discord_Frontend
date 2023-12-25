import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../../Shared/utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../store/authSlice";
// import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";
import useSocketConnection from "../../realtimeCommunication/socketConnection";
import Room from "./Room/Room";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

export default function Dashboard() {
  const { isUserInRoom } = useSelector((e) => e.room);

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
      {isUserInRoom && <Room />}
    </Wrapper>
  );
}
