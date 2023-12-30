import React from "react";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import Video from "./Video";

const MainContainer = styled("div")({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideoContainer = () => {
  const { localStreams, remoteStreams, screenSharingStream } = useSelector(
    (e) => e.room
  );

  return (
    <MainContainer>
      <Video
        stream={screenSharingStream ? screenSharingStream : localStreams}
        isLocalStream
      />
      {remoteStreams?.map((stream) => (
        <Video stream={stream} key={stream.id} />
      ))}
    </MainContainer>
  );
};

export default VideoContainer;
