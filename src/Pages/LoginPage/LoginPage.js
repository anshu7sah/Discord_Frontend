import React, { useEffect, useState } from "react";
import AuthBox from "../../Shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageForm from "./LoginPageForm";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../Shared/utils/validator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../../store/asyncActions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    dispatch(loginActions({ email, password }, navigate));
  };
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
}
