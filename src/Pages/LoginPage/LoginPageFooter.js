import React from "react";
import CustomPrimaryButton from "../../Shared/components/CustomPrimaryButton";
import RedirectInfo from "../../Shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegister = () => {
    navigate("/register");
  };
  const getFormValidMessage = () => {
    return "Press to log in!";
  };
  const getFormNotValidMessage = () => {
    return "Enter correct e-mail address and password should contains between 6 and 12 characters";
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText={"Create an account"}
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegister}
      />
    </>
  );
};

export default LoginPageFooter;
