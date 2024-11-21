import React from "react";
import { Reservation } from "@src/shared/types";
import { Collapse, List, Button, Typography } from "antd";
import { timestampToDate } from "@src/shared/utils";

const { Panel } = Collapse;
const { Text } = Typography;

// Определяем интерфейс для пропсов
interface CurrentReservationsItemProps {
  reservation: Reservation;
}

// Компонент для отображения отдельной резервации
export const CurrentReservationsItem: React.FC<
  CurrentReservationsItemProps
> = ({ reservation }) => {
  return (
    <List size="small">
      <List.Item>
        <Text strong>Table ID:</Text> {reservation.tableID}
      </List.Item>
      <List.Item>
        <Text strong>User Email:</Text> {reservation.userEmail}
      </List.Item>
      <List.Item>
        <Text strong>Payment Method:</Text> {reservation.paymentMethod}
      </List.Item>
      <List.Item>
        <Text strong>Approved:</Text> {reservation.approved ? "Yes" : "No"}
      </List.Item>
      <List.Item>
        <Text strong>Paid:</Text> {reservation.paid ? "Yes" : "No"}
      </List.Item>
      <List.Item>
        <Text strong>Price:</Text> ${reservation.price}
      </List.Item>
      <List.Item>
        <Text strong>Start Time:</Text> {timestampToDate(reservation.startTime)}
      </List.Item>
      <List.Item>
        <Text strong>End Time:</Text>
        {timestampToDate(reservation.endTime)}
      </List.Item>
    </List>
  );
};
