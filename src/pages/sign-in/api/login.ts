import { auth, db } from "@configs/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthTypes } from "@src/shared/types";

export const loginServices = {
  loginUser: async (data: AuthTypes["LoginData"]) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return userCredential; 
    } catch (error) {
      throw error; 
    }
  },
};