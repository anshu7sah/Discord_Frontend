import React from "react";
import CustomPrimaryButton from "../../Shared/components/CustomPrimaryButton";
import RedirectInfo from "../../Shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate("/login");
  };
  const getFormValidMessage = () => {
    return "Press to register!";
  };
  const getFormNotValidMessage = () => {
    return "Username should contains should contain between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should be provided ";
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText={"Already have an account? "}
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
