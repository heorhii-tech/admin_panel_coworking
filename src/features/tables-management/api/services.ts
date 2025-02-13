import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  getFirestore,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
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

  deleteTable: async (tableID: string) => {
    const db = getFirestore();
    const tablesCollectionRef = collection(db, "tables");
    const q = query(tablesCollectionRef, where("tableID", "==", tableID));

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.error(`No table found with ID ${tableID}`);
        return false;
      }

      const docRef = querySnapshot.docs[0].ref;
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error("Error deleting table:", error);
      throw error;
    }
  },
  editTable: async (data: Table) => {
    const db = getFirestore();
    const tablesCollectionRef = collection(db, "tables");
    const q = query(tablesCollectionRef, where("tableID", "==", data.tableID));
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.error(`No table found with ID ${data.tableID}`);
        return false;
      }

      // Получаем ссылку на документ
      const docRef = querySnapshot.docs[0].ref;
      console.log(docRef);

      // Обновляем данные в документе
      await updateDoc(docRef, {
        tableID: data.tableID,
        title: data.title,
        price: data.price,
        img: data.img,
      });

      console.log(`Table with ID ${data.tableID} updated successfully.`);
      return true;
    } catch (error) {
      console.error("Error updating table:", error);
      throw error;
    }
  },
};
