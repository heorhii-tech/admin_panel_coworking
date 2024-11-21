interface isReservationPast {
  seconds: number;
  nanoseconds: number;
}
interface timestampToDate {
  seconds: number;
  nanoseconds: number;
}

export const isReservationPast = (endTime: isReservationPast) => {
  const endTimeMilliseconds =
    endTime.seconds * 1000 + Math.floor(endTime.nanoseconds / 1000000);

  if (endTimeMilliseconds < new Date().getTime()) {
    return endTime;
  }
};

export function timestampToDate(timestamp: {
  seconds: number;
  nanoseconds: number;
}) {
  const milliseconds =
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1_000_000;
  const date = new Date(milliseconds);
  return date.toLocaleString();
}
