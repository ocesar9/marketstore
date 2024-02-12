import React from "react";

type FormType = {
  regex: RegExp;
  message: string;
};

const types : { [key: string]: FormType } = {
  email: {
    regex:
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, //eslint-disable-line
    message: "Set a valid email address!",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, //eslint-disable-line
    message:
      "The password must have 1 uppercase character, 1 lowercase character and 1 digit. With at least 8 characters",
  },
};

const useForm = (type : string | false) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);


  const validate = (value: string): boolean => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Fill in a value!");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
