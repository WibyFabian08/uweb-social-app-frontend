import React, { useState } from "react";
import "./assets/css/style.css";
import Routes from "./config/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [themeLight, setThemeLight] = useState(false);
  return (
    <div>
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    </div>
  );
}

export default App;
