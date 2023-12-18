import React, { useState } from "react";
import { Tooltip, Typography, Box } from "@mui/material";
import Avatar from "../../../../Shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import { useDispatch } from "react-redux";
import {
  acceptFriendInvitation,
  rejectFriendInvitation,
} from "../../../../store/asyncActions";
const PendingInvitationsListItem = ({ id, username, email }) => {
  console.log(id);
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleAcceptInvitation = () => {
    dispatch(acceptFriendInvitation({ id }));
    setButtonDisabled(true);
  };
  const handleRejectInvitation = () => {
    dispatch(rejectFriendInvitation({ id }));
    setButtonDisabled(true);
  };
  return (
    <Tooltip title={email}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            handleAcceptInvitation={handleAcceptInvitation}
            handleRejectInvitation={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
