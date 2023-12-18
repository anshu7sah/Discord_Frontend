import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ChoosenOptionLabel = () => {
  const { chosenChatDetails } = useSelector((e) => e.chats);
  let name = chosenChatDetails?.name;
  return (
    <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>
      {name ? `Choosen Conversation ${name}` : ""}
    </Typography>
  );
};

export default ChoosenOptionLabel;
