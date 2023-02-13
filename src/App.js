import "./App.css";
import Header from "./components/Header";
import { Fragment } from "react";
import Todos from "./components/Todos";

const App = () => {
  return (
    <Fragment>
      <Header />
      <p>Đây là web react của tôi</p>
      <Todos />
    </Fragment>
  );
};

export default App;
