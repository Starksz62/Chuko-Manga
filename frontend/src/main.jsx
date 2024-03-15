import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import MangaDetails from "./pages/MangaDetails";
import Explore from "./pages/Explore";
import NewAdvert from "./pages/NewAdvert";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import AnnouncementDetail from "./pages/AnnouncementDetails";
import ProfilUser from "./pages/ProfilUser";
import NotFoundPage from "./pages/NotFoundPage";
import Favorites from "./pages/Favorites";
import Catalog from "./pages/Catalog";

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
        path: "/manga/catalog",
        element: <Catalog />,
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
        path: "/new-advert",
        element: <NewAdvert />,
      },
      {
        path: "/display-adverts/:id",
        element: <AnnouncementDetail />,
      },
      {
        path: "/profilUser/:id",
        element: <ProfilUser />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/404",
        element: <NotFoundPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
