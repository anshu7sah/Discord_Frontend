import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationsList = () => {
  const { pendingFriendsInvitations } = useSelector((e) => e.friends);
  console.log(pendingFriendsInvitations);

  return (
    <MainContainer>
      {pendingFriendsInvitations.map((i) => (
        <PendingInvitationsListItem
          key={i._id}
          id={i._id}
          username={i.senderId.username}
          email={i.senderId.email}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
