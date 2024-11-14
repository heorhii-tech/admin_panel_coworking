import { useState, useEffect } from "react";
import { RegisterData } from "@src/shared/types";
import { registerServices } from "../api/index";
import { message } from "antd";

const useRegister = (): {
  registerNewUser: (data: RegisterData) => Promise<void>;
  isLoading: boolean;
  isSuccessRegistered: boolean;
  contextHolder: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
} => {
  const [isLoading, setIsloading] = useState(false);
  const [isSuccessRegistered, setIsSuccessRegistered] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [error, setError] = useState<string | boolean>(false);

  // useEffect sets error message and shows it on screen
  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }, [error, messageApi]);

  // register new user function. Used func registerUser from api-services
  const registerNewUser = async (data: RegisterData) => {
    setIsloading(true);
    try {
      await registerServices.registerUser(data);
      setIsSuccessRegistered(true);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already is used");
        setIsloading(false);
      } else {
        console.log(error);
        setError("An error occurred during sign up");
        setIsloading(false);
      }
    } finally {
      setIsloading(false);
    }
  };

  return { registerNewUser, isLoading, isSuccessRegistered, contextHolder };
};
export default useRegister;
