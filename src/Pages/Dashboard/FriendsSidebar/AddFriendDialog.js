import React, { useEffect, useState } from "react";
import { validateEmail } from "../../../Shared/utils/validator";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Typography } from "@mui/material";
import InputWithLabel from "../../../Shared/components/InputWithLabel";
import CustomPrimaryButton from "../../../Shared/components/CustomPrimaryButton";
import { sendFriendInvitation } from "../../../store/asyncActions";
import { useDispatch } from "react-redux";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");
  const dispatch = useDispatch();
  const handleSendInvitation = () => {
    dispatch(
      sendFriendInvitation(
        {
          targetMailAddress: email,
        },
        handleCloseDialog
      )
    );
  };
  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail("");
  };
  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);
  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
            <InputWithLabel
              label="Email"
              type="text"
              value={email}
              setValue={setEmail}
              placeholder={"Enter email address"}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
