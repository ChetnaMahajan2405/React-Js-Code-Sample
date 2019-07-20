
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { MainLayout } from "./layouts";
import App from "./App";
import store from "./redux/store/configStore";


const wrapApp = reduxStore => (
  <MainLayout>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MainLayout>
);

const rootEl = document.getElementById("root");

ReactDOM.render(wrapApp(store), rootEl);
