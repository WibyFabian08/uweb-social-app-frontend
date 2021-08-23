import React from "react";
import "./assets/css/style.css";
import Routes from "./config/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    </div>
  );
}

export default App;
