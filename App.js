import React from "react";
import Router from "./src/Router";
import store from "./src/store/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
