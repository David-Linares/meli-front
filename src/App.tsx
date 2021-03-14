import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { AppRoutes } from "./routes/index";
import { appStore } from "./@shared/store/index";

function App() {
  return (
    <Provider store={appStore}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
