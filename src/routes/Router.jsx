import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import SignUp from "../pages/SignUp";

const myCreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "my-cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default myCreatedRoutes;
