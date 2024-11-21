import {
  getFirestore,
  collection,
  query,
  where,
  addDoc,
  updateDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const reservationsServices = {
  fetchreservations: async () => {
    const db = getFirestore();

    try {
      const q = query(collection(db, "reservations"));
      const querySnapshot = await getDocs(q);
      const currentReservations = querySnapshot.docs;
      return currentReservations;
    } catch (error) {
      console.log(error);
    }
  },
  deleteReservation: async (reservationID: string) => {
    const db = getFirestore();
    try {
      const reservationRef = doc(db, "reservations", reservationID);
      await deleteDoc(reservationRef);
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  },
  disapproveReservation: async (reservationID: string) => {
    const db = getFirestore();
    try {
      await updateDoc(doc(db, "reservations", reservationID), {
        approved: false,
      });
    } catch (error) {
      console.error("Error disapproving reservation:", error);
    }
  },
};
