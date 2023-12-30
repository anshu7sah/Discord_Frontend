import React from "react";
import Avatar from "../../../Shared/components/Avatar";
import { Button, Tooltip } from "@mui/material";
import { joinRoom } from "../../../realtimeCommunication/roomHandler";
const ActiveRoomButton = ({
  createrUsername,
  roomId,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      joinRoom(roomId);
    }
  };
  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creater: ${createrUsername}. Connected: ${amountOfParticipants}`;
  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            margin: 0,
            padding: 0,
            minWidth: 0,
            marginTop: "10px",
            color: "white",
            backgroundColor: "#5865F2",
          }}
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
        >
          <Avatar username={createrUsername} />
        </Button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
