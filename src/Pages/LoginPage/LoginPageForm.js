import React from "react";
import InputWithLabel from "../../Shared/components/InputWithLabel";

const LoginPageForm = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="E-mail"
        type={"text"}
        placeholder={"Enter e-mail address"}
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type={"password"}
        placeholder={"Enter password"}
      />
    </>
  );
};

export default LoginPageForm;
