// src/shared/types.ts
export interface Reservation {
  id: string;
  tableID: string;
  userEmail: string;
  paymentMethod: string;
  paid: boolean;
  price: number;
  startTime: { seconds: number; nanoseconds: number };
  endTime: { seconds: number; nanoseconds: number };
  approved: boolean;
}
export interface Table {
  img: string;
  price: string;
  tableID: string;
  title: string;
}