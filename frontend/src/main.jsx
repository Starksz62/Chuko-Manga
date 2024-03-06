import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MangaDetails from "./pages/MangaDetails";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import ProfilUser from "./pages/ProfilUser";

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
        path: "manga/:id",
        element: <MangaDetails />,
      },
      {
        path: "/paymentPage/:id",
        element: <PaymentPage />,
      },
      {
        path: "/profilUser/:id",
        element: <ProfilUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
