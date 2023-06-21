import { useState } from "react";
import { Header } from "./components/UI/Header";
import { Footer } from "./components/UI/Footer";
import { Main } from "./components/UI/Main";
import { Aside } from "./components/UI/Aside";
import { AddUser } from "./components/User/AddUser";

import { Card } from "./components/Card/Card";

export interface UserProps {
  name: string;
  surname: string;
  company: string;
  position: string;
  email: string;
  social: string;
  id: string;
}
const INITIAL_STATE: UserProps = {
  name: "",
  surname: "",
  email: "",
  company: "",
  position: "",
  social: "",
  id: "",
};

const MOCK_USER: UserProps = {
  name: "Jennifer",
  surname: "Magpantay",
  email: "jen@publicissapient.com",
  company: "Publicis Sapient",
  position: "Front End | React",
  social: "",
  id: "XXXXX",
};
// https://github.com/jennifer-magpantay
export const App = () => {
  const [user, setUser] = useState<UserProps>(MOCK_USER);

  const saveNewUser = (value: UserProps) => {
    setUser(value);
  };

  const hasUserRegistered = Object.values(user).some((item) => item === "");

  return (
    <>
      <Header />
      <div className="container">
        <Main customClasses="">
          <AddUser onSubmitNewUser={saveNewUser} initialState={INITIAL_STATE} />
        </Main>
        <Aside customClasses="">
          {!hasUserRegistered ? (
            <Card user={user} />
          ) : (
            <Card user={MOCK_USER} />
          )}
        </Aside>
      </div>
      <Footer />
    </>
  );
};
