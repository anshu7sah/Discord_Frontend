export const validateLoginForm = ({ email, password }) => {
  const isMailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, username, password }) => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateUsername(username)
  );
};

const validatePassword = (password) => {
  return password.length > 5 && password.length < 12;
};
export const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
};

const validateUsername = (username) => {
  return username.length > 2 && username.length < 13;
};
