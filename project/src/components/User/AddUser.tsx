import React from "react";
import { UserForm } from "./Form/UserForm";
import { UserInput } from "./Form/UserInput";

export const AddUser = () => {
  return (
    <>
      <UserForm onSubmit={}>
        <UserInput
          id="name"
          type="text"
          label="First name"
          placeholder="Add first name: Jennifer"
        />

        <UserInput
          id="surname"
          type="text"
          label="Surname"
          placeholder="Add surname: Magpantay"
        />

        <UserInput
          id="email"
          type="email"
          label="Email"
          placeholder="youremail@email..."
        />
      </UserForm>
    </>
  );
};
