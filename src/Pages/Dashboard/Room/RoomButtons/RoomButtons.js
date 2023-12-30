import React from "react";
import { styled } from "@mui/system";
import ScreenShareButton from "./ScreenShareButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import CameraButton from "./CameraButton";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RoomButtons = () => {
  const { userJoinedWithAudioOnly } = useSelector((e) => e.room);
  return (
    <MainContainer>
      {!userJoinedWithAudioOnly && <ScreenShareButton />}
      <MicButton />
      <CloseRoomButton />
      {!userJoinedWithAudioOnly && <CameraButton />}
    </MainContainer>
  );
};

export default RoomButtons;
