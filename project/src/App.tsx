import { Header } from "./components/UI/Header";
import { Footer } from "./components/UI/Footer";
import { Main } from "./components/UI/Main";
import { Aside } from "./components/UI/Aside";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Main customClasses="">
          <p>Main content</p>
        </Main>
        <Aside customClasses="">
          <p>Aside content</p>
        </Aside>
      </div>
      <Footer />
    </>
  );
};
