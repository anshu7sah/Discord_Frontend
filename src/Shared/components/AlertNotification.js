import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { Close_Alert_Message } from "../../store/alertSlice";

const AlertNotification = () => {
  const { alertMessageContent, showAlert } = useSelector((e) => e.alert);
  const dispatch = useDispatch();
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlert}
      onClose={() => {
        dispatch(Close_Alert_Message());
      }}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
