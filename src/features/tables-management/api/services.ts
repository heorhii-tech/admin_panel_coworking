import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@configs/firebaseConfig";
import { Table } from "@src/shared/types";
export const tablesServices = {
  getTables: async (): Promise<Table[]> => {
    const tablesCollectionRef = collection(db, "tables");
    try {
      const tablesDoc = await getDocs(tablesCollectionRef);
      const tablesList: Table[] = tablesDoc.docs.map((doc) => {
        const data = doc.data() as Table;
        return data;
      });
      return tablesList;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  addTable: async (tableData: Table) => {
    const tablesCollectionRef = collection(db, "tables");
    try {
      const tablesDoc = await addDoc(tablesCollectionRef, tableData);
      return tablesDoc;
    } catch (error) {
      console.log(error);
    }
  },
};
