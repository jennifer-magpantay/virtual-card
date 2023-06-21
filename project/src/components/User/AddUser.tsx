import React, { useState } from "react";
import { UserForm } from "./Form/UserForm";
import { UserInput } from "./Form/UserInput";
import { UserProps } from "../../App";

interface AddUserProps {
  initialState: UserProps;
  onSubmitNewUser: (arg: UserProps) => void;
}

export const AddUser = ({ onSubmitNewUser, initialState }: AddUserProps) => {
  const [userInput, setUserInput] = useState<UserProps>(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleSubmitNewUSer = (event: React.FormEvent) => {
    event.preventDefault();
    // set prop as function to be run by the parent
    onSubmitNewUser(userInput);
    // then, reset form
    resetForm();
  };

  const resetForm = () => {
    setUserInput(initialState);
  };

  return (
    <>
      <UserForm onSubmit={(event) => handleSubmitNewUSer(event)}>
        <UserInput
          value={userInput.name}
          id="name"
          type="text"
          label="First name"
          placeholder="Add first name: Jennifer"
          onChange={(event) => handleInputChange(event)}
        />
        <UserInput
          value={userInput.surname}
          id="surname"
          type="text"
          label="Surname"
          placeholder="Add surname: Magpantay"
          onChange={(event) => handleInputChange(event)}
        />
        <UserInput
          value={userInput.email}
          id="email"
          type="email"
          label="Email"
          placeholder="youremail@email..."
          onChange={(event) => handleInputChange(event)}
        />
        <UserInput
          value={userInput.company}
          id="company"
          type="text"
          label="Work"
          placeholder="Working @"
          onChange={(event) => handleInputChange(event)}
        />
        <UserInput
          value={userInput.position}
          id="position"
          type="text"
          label="Position"
          placeholder="Working as"
          onChange={(event) => handleInputChange(event)}
        />
        <UserInput
          value={userInput.social}
          id="social"
          type="text"
          label="Social"
          placeholder="Social media url"
          onChange={(event) => handleInputChange(event)}
        />
      </UserForm>
    </>
  );
};
