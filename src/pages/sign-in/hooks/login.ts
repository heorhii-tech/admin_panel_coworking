import { useState, useEffect } from "react";
import { AuthTypes } from "@src/shared/types";
import { loginServices } from "../api/index";
import { message } from "antd";
import { useUser } from "@src/features/user/contexts/UserContext";
import { auth, db } from "@configs/firebaseConfig"; // импортируйте db для доступа к Firestore
import { doc, getDoc } from "firebase/firestore"; // для получения данных из Firestore

export const useLogin = (): {
  handleLoginUser: (data: AuthTypes["LoginData"]) => Promise<void>;
  isLoading: boolean;
  contextHolder: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
} => {
  const [isLoading, setIsloading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [error, setError] = useState<string | boolean>(false);
  const { setUser } = useUser();

  // useEffect sets error message and shows it on screen
  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }, [error, messageApi]);

  // login function with role check
  const handleLoginUser = async (data: AuthTypes["LoginData"]) => {
    setIsloading(true);
    try {
      await loginServices.loginUser(data).then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          const token = await user.getIdToken();

          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();

            // Проверяем роль пользователя
            if (userData?.role === "admin") {
              const loggedUser = {
                token,
                email: user.email,
                displayName: userData?.displayName || "",
                role: userData?.role || "",
              };
              setUser(loggedUser);
              localStorage.setItem("user", JSON.stringify(loggedUser));
            } else {
              setError("You don't have admin access");
            }
          } else {
            setError("User data not found in Firestore");
          }
        }
      });
    } catch (error: any) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("Invalid e-mail or password");
      } else {
        setError("An error occurred");
      }
    } finally {
      setIsloading(false);
    }
  };

  return { handleLoginUser, isLoading, contextHolder };
};
