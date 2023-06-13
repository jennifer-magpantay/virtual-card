import { useState } from "react";

interface UserInputProps {
  id: string;
  type: "text" | "number" | "email";
  label: string;
  placeholder: string;
}
export const UserInput = ({ label, id, type, placeholder }: UserInputProps) => {
  const [state, setState] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState(value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={state}
        placeholder={placeholder}
        required
        onChange={(event) => handleInputChange(event)}
      />
    </>
  );
};
