import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { useSelector } from "react-redux";
const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const { localStreams } = useSelector((e) => e.room);

  const handleToggleCamera = () => {
    localStreams.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled((e) => !e);
  };

  return (
    <IconButton onClick={handleToggleCamera} style={{ color: "white" }}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;
