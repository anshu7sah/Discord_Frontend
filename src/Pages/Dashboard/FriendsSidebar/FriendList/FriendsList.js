import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  const { friends, onlineUsers } = useSelector((s) => s.friends);
  return (
    <MainContainer>
      {friends.map((friend) => (
        <FriendListItem
          username={friend.username}
          id={friend.id}
          key={friend.id}
          isOnline={
            onlineUsers.find((f) => f.userId === friend.id) ? true : false
          }
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
