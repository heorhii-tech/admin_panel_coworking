// CurrentReservationsPage.tsx
import { useReservations } from "@src/features/reservations-menegment/hooks";
import { CurrentReservationsList } from "@src/widgets/reservations/index";

import { SpinLoader } from "@src/shared/ui";
import { SearchForm } from "@src/widgets/search-form/ui";

export function CurrentReservationsPage() {
  const {
    currentReservations,
    reservationsActions,
    isLoading,
    filteredCurrentReservs,
  } = useReservations();

  return (
    <>
      {isLoading && <SpinLoader fullscreen />}
      <SearchForm
        reservationsActions={reservationsActions}
        currentReservations={currentReservations}
      />
      {currentReservations.length ? (
        filteredCurrentReservs.length ? (
          <CurrentReservationsList
            currentReservations={filteredCurrentReservs}
            reservationsActions={reservationsActions}
          />
        ) : (
          <>not found for your request</>
        )
      ) : (
        <>No current reservations</>
      )}
    </>
  );
}
