import React, { useState } from "react";
import { styled } from "@mui/system";
import ResizeRoomButton from "./ResizeRoomButton";
import VideoContainer from "./VideoContainer";
import RoomButtons from "./RoomButtons/RoomButtons";

const MainContainer = styled("div")({
  position: "absolute",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#202225",
});

const fullScreeRoomStyle = {
  width: "100%",
  height: "100vh",
};
const minimizedRoomStyle = {
  bottom: "0px",
  right: "0px",
  width: "30%",
  height: "40vh",
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);
  const roomResizeHandler = () => {
    setIsRoomMinimized((e) => !e);
  };
  return (
    <MainContainer
      style={isRoomMinimized ? minimizedRoomStyle : fullScreeRoomStyle}
    >
      <VideoContainer />
      <RoomButtons />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handlerRoomResize={roomResizeHandler}
      />
    </MainContainer>
  );
};

export default Room;
