import { useState, useEffect } from "react";
import { reservationsServices } from "../api";
import { isReservationPast } from "@src/shared/utils/index";
import { Reservation } from "@src/shared/types";
interface UseReservationsResult {
  currentReservations: Reservation[];
  passedReservations: Reservation[];
  filteredCurrentReservs: Reservation[];

  isLoading: boolean;

  reservationsActions: {
    handleDeleteReservation: (reservationID: string) => Promise<void>;
    handleDisapproveReservations: (reservationID: string) => Promise<void>;

    handleSearchChange: (data: string) => void;
  };
}
export const useReservations = (): UseReservationsResult => {
  const [currentReservations, setCurrentReservations] = useState<Reservation[]>(
    []
  );
  const [passedReservations, setPassedReservations] = useState<Reservation[]>(
    []
  );
  const [filteredCurrentReservs, setFilteredCurrentReserv] = useState<
    Reservation[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchReservations = async () => {
    try {
      const reservations = await reservationsServices.fetchreservations();

      const current = reservations
        ?.filter((doc: any) => {
          const data = doc.data();
          return (
            !isReservationPast(data.endTime) && data.approved // Проверка текущих
          );
        })
        .map((doc: any) => {
          const data = doc.data();
          return {
            reservationID: doc.id,
            tableID: data.tableID,
            userEmail: data.userID,
            paymentMethod: data.paymentMethod,
            paid: data.paid,
            price: data.price,
            endTime: data.endTime,
            startTime: data.startTime,
            id: doc.id,
            approved: data.approved,
          };
        });

      const passed = reservations
        ?.filter((doc: any) => {
          const data = doc.data();
          return isReservationPast(data.endTime) && data.approved; // Проверка завершённых
        })
        .map((doc: any) => {
          const data = doc.data();
          return {
            reservationID: doc.id,
            tableID: data.tableID,
            userEmail: data.userID,
            paymentMethod: data.paymentMethod,
            paid: data.paid,
            price: data.price,
            endTime: data.endTime,
            startTime: data.startTime,
            id: doc.id,
            approved: data.approved,
          };
        });

      setCurrentReservations(current || []);
      setFilteredCurrentReserv(current || []);
      setPassedReservations(passed || []);
    } catch (error: any) {
      console.error("Failed to fetch reservations:", error);
    }
  };

  const reservationsActions = {
    handleDeleteReservation: async (reservationID: string) => {
      setIsLoading(true);
      try {
        await reservationsServices.deleteReservation(reservationID);

        await fetchReservations();
      } catch (error) {
        console.error("Error deleting reservation:", error);
      } finally {
        setIsLoading(false);
      }
    },
    handleDisapproveReservations: async (reservationID: string) => {
      setIsLoading(true);
      try {
        await reservationsServices.disapproveReservation(reservationID);
        await fetchReservations();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    },

    handleSearchChange: (data: string) => {
      setSearchQuery(data);
    },
  };
  const filterReservations = (
    reservations: Reservation[],
    query: string
  ): Reservation[] => {
    const searchData = query.toLowerCase();
    return reservations.filter((reserv) => {
      const email = reserv.userEmail.toLowerCase();
      const table = reserv.tableID.toLowerCase();
      return email.includes(searchData) || table.includes(searchData);
    });
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  useEffect(() => {
    setFilteredCurrentReserv(
      filterReservations(currentReservations, searchQuery)
    );
  }, [currentReservations, searchQuery]);

  useEffect(() => {
    if (filteredCurrentReservs.length && searchQuery !== "") {
      console.log("no items");
    }
  }, [filteredCurrentReservs, searchQuery]);

  return {
    currentReservations,
    passedReservations,
    reservationsActions,
    isLoading,
    filteredCurrentReservs,
  };
};
