import { createHashRouter } from "react-router-dom";
import { MainLayout } from "../ui";

import { RedirectIfAuthenticated, RequireAuth } from "@src/shared/utils/index";
import {
  CurrentReservationsPage,
  RegisterPage,
  LoginPage,
  TablesPage,
} from "@src/pages/index";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "signup",
        element: (
          <RedirectIfAuthenticated>
            <RegisterPage />
          </RedirectIfAuthenticated>
        ),
      },
      {
        path: "login",
        element: (
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        ),
      },
      {
        path: "",
        element: (
          <RequireAuth>
            <CurrentReservationsPage />
          </RequireAuth>
        ),
      },
      {
        path: "/tables",
        element: (
          <RequireAuth>
            <TablesPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);
