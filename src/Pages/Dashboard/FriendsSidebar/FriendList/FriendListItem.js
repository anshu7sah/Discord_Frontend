import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../../../Shared/components/Avatar";
import { Typography } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";
import { useDispatch } from "react-redux";
import { chatTypes, setChosenChatDetails } from "../../../../store/chatSlice";

const FriendListItem = ({ isOnline, username, id }) => {
  const dispatch = useDispatch();
  const handleChooseActiveConservation = () => {
    dispatch(
      setChosenChatDetails({
        chatDetails: {
          id,
          name: username,
        },
        chatType: chatTypes.DIRECT,
      })
    );
  };
  return (
    <Button
      onClick={() => handleChooseActiveConservation()}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: "700",
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendListItem;
