import React, { useEffect, useState } from "react";
import AuthBox from "../../Shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageForm from "./RegisterPageForm";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../Shared/utils/validator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerActions } from "../../store/asyncActions";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch(registerActions({ email, password, username }, navigate));
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, username, password }));
  }, [email, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
}
