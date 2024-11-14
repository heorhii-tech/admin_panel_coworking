import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import useRegister from "@src/pages/sign-in/hooks/register";

export const App = () => {
  const { registerNewUser } = useRegister();
  return <RouterProvider router={router} />;
};
