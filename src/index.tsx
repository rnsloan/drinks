import * as ReactDOM from "react-dom";
import * as React from "react";
import { RouterProvider } from "react-router5";
import createRouter from "./router/create-router";
import App from "./App";

const router = createRouter(true);
router.start(() => {
  ReactDOM.render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>,
    document.getElementById("root")
  );
});
