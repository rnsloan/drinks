import * as ReactDOM from "react-dom";
import * as React from "react";
import * as firebase from "firebase/app";
import { RouterProvider } from "react-router5";
import createRouter from "./router/create-router";
import App from "./App";

const config = {
  apiKey: "AIzaSyA3v721P1yBhgWP8RF_lvESQY3__ujs3Bs",
  authDomain: "drinks-9dce7.firebaseapp.com",
  databaseURL: "https://drinks-9dce7.firebaseio.com",
  projectId: "drinks-9dce7",
  storageBucket: "",
  messagingSenderId: "1000237432325"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const router = createRouter(true);
router.start(() => {
  ReactDOM.render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>,
    document.getElementById("root")
  );
});
