import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePageLayout } from "../layout/HomePageLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail";
import { AuthPageLayout } from "../layout/AuthPageLayout";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const router = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/",
        element: <AuthPageLayout />,
        children: [
          {
            index: true,
            element: <SignInPage />,
          },
          {
            path: "signup",
            element: <SignUpPage />,
          },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/main",
        element: <HomePageLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "products",
            element: <ProductPage />,
          },
          {
            path: "product/:id",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;