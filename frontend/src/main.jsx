import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Explore from "./pages/Explore";
import Home from "./pages/home";
import PaymentPage from "./pages/PaymentPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/explore/:searchQuery",
        element: <Explore />,
      },
      {
        path: "/paymentPage/:id",
        element: <PaymentPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
