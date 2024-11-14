import { auth, db } from "@configs/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { RegisterData } from "@src/shared/types";
export const services = {
  registerUser: async (data: RegisterData): Promise<void> => {
    console.log(data);
    const { email, password } = data;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await sendEmailVerification(user);
    await setDoc(doc(db, "users", user.uid), {});
  },
};
