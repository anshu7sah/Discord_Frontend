import React from "react";
import InputWithLabel from "../../Shared/components/InputWithLabel";

const RegisterPageForm = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  isFormValid,
}) => {
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
        value={username}
        setValue={setUsername}
        label="Username"
        type={"text"}
        placeholder={"Enter Username"}
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

export default RegisterPageForm;
