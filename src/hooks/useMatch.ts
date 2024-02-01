import React from "react";

const useMatch = (password1) => {
  const [password2,setPassword2] = React.useState('');
  const [match, setMatch] = React.useState<boolean>(false);
  const [matchError, setMatchError] = React.useState(null);

  function validate() {
    if (password2.length === 0) {
      setMatchError("Fill in a password confirmation value!");
      setMatch(false);
      return false;
    } else if (password1.value !== password2) {
      setMatchError("Passwords do not match!");
      setMatch(false);
      return false;
    } else {
      setMatchError(null);
      setMatch(true);
      return true;
    }
  }

  return {
    match,
    matchError,
    onChange: ({target}) => {
      setPassword2(target.value);
      validate();
    },
    onBlur: () => validate(),
  };
};

export default useMatch;
