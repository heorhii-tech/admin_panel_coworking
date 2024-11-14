import { auth, db } from "@configs/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { RegisterData } from "@src/shared/types";

export const registerServices = {
  registerUser: async (data: RegisterData): Promise<void> => {
    const { email, password, displayName } = data;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user && displayName) {
      await updateProfile(user, { displayName });
    }

    await sendEmailVerification(user);

    await setDoc(doc(db, "users", user.uid), {
      email,
      displayName,
      role: "",
    });
  },
};
