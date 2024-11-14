import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../ui";
import { LoginPage, RegisterPage } from "@src/pages/sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "signup",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
