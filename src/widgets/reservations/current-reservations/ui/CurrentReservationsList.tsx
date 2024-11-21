import React from "react";
import { Reservation } from "@src/shared/types";
import { Button, Collapse, Flex } from "antd";
import { CurrentReservationsItem } from "@src/features/reservations-menegment/ui";

const { Panel } = Collapse;

interface CurrentReservationsListProps {
  currentReservations: Reservation[];
  reservationsActions: {
    handleDeleteReservation: (reservationID: string) => Promise<void>;
    handleDisapproveReservations: (reservationID: string) => Promise<void>;
  };
}
export const CurrentReservationsList: React.FC<
  CurrentReservationsListProps
> = ({ currentReservations, reservationsActions }) => {
  return (
    <Collapse accordion className="reservations-list">
      {currentReservations.map((reservation) => (
        <Panel
          header={`Reservation ID: ${reservation.id}`}
          key={reservation.id}
        >
          <CurrentReservationsItem reservation={reservation} />
          <Flex wrap gap="small" style={{ justifyContent: "flex-end" }}>
            <Button
              type="dashed"
              onClick={() =>
                reservationsActions.handleDisapproveReservations(reservation.id)
              }
              danger
            >
              DISAPPROVE
            </Button>
            <Button
              type="primary"
              onClick={() =>
                reservationsActions.handleDeleteReservation(reservation.id)
              }
              danger
            >
              DELETE
            </Button>
          </Flex>
        </Panel>
      ))}
    </Collapse>
  );
};
