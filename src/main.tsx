import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { UserNameProvider } from "./context/UserNameContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserNameProvider>
      <RouterProvider router={router} />
    </UserNameProvider>
  </React.StrictMode>
);
