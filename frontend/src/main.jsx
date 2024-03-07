import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import AnnouncementDetail from "./pages/AnnouncementDetails";

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
      {
        path: "/display-adverts/:id",
        element: <AnnouncementDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
