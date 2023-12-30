import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import { useSelector, useDispatch } from "react-redux";
import { setScreenSharingStream } from "../../../../store/roomSlice";
import { switchOutgoingTracks } from "../../../../realtimeCommunication/webRTCHandler";

const constrains = {
  audio: false,
  video: true,
};

const ScreenShareButton = () => {
  const { isScreenSharingActive, screenSharingStream, localStreams } =
    useSelector((e) => e.room);
  const dispatch = useDispatch();
  console.log(isScreenSharingActive);

  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constrains);
      } catch (error) {
        console.log(
          "Error occured when trying to get an access to screen share stream"
        );
      }
      if (stream) {
        dispatch(setScreenSharingStream(stream));
        switchOutgoingTracks(stream);
      }
    } else {
      switchOutgoingTracks(localStreams);
      screenSharingStream.getTracks().forEach((t) => t.stop());
      dispatch(setScreenSharingStream(null));
    }
  };

  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
