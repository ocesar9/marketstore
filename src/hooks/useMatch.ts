import React from "react";



const useMatch = (password1:string) => {
  const [password2,setPassword2] = React.useState<string>('');
  const [match, setMatch] = React.useState<boolean>(false);
  const [matchError, setMatchError] = React.useState<string | null>(null);

  function validate() {
    if (password2.length === 0) {
      setMatchError("Fill in a password confirmation value!");
      setMatch(false);
      return false;
    } else if (password1 !== password2) {
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
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword2(event.target.value);
      validate();
    },
    onBlur: () => validate(),
  };
};

export default useMatch;
