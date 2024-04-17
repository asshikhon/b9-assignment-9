import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
