import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import MangaDetails from "./pages/MangaDetails";
import Explore from "./pages/Explore";
import NewAdvert from "./pages/NewAdvert";
import UpdateAdvert from "./pages/UpdateAdvert";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import AnnouncementDetail from "./pages/AnnouncementDetails";
import ProfilUser from "./pages/ProfilUser";
import CreateProfil from "./pages/CreateProfil";
import NotFoundPage from "./pages/NotFoundPage";
import Favorites from "./pages/Favorites";
import Catalog from "./pages/Catalog";
import MyAnounces from "./pages/MyAnounces";
import ProfilSeller from "./pages/ProfilSeller";

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
        path: "/createprofil/:id",
        element: <CreateProfil />,
      },
      {
        path: "/profiluser/:id",
        element: <ProfilUser />,
      },
      {
        path: "/profilseller/:id",
        element: <ProfilSeller />,
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
        path: "/myAnounces/:id",
        element: <MyAnounces />,
      },
      {
        path: "/update-advert/:id",
        element: <UpdateAdvert />,
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
