import { collection, getDocs } from "firebase/firestore";
import { db } from "@configs/firebaseConfig";

export const services = {
  getTables: async () => {
    const tablesCollectionRef = collection(db, "tables");
    try {
      const tablesDoc = await getDocs(tablesCollectionRef);
      const tablesList = tablesDoc.docs.map((doc) => doc.data());
      return tablesList;
    } catch (error) {
      console.log(error);
    }
  },
};
