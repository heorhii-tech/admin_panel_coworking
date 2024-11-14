import { useState, useEffect } from "react";
import { RegisterData } from "@src/shared/types";
import { services } from "../api/register";

const useRegister = (): {
  registerNewUser: (data: RegisterData) => Promise<void>;
  isLoading: boolean;
  isSuccessRegistered: boolean;
} => {
  const [isLoading, setIsloading] = useState(false);
  const [isSuccessRegistered, setIsSuccessRegistered] = useState(false);

  useEffect(() => {
    console.log(isLoading, isSuccessRegistered);
  }, [isLoading, isSuccessRegistered]);

  const registerNewUser = async (data: RegisterData) => {
    setIsloading(true);
    try {
      await services.registerUser(data);
      setIsSuccessRegistered(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  return { registerNewUser, isLoading, isSuccessRegistered };
};
export default useRegister;
