import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Reservation } from "@src/shared/types";

interface SearchFormProps {
  currentReservations: Reservation[];
  reservationsActions: {
    handleSearchChange: (data: string) => void;
  };
}

type Inputs = {
  data: string;
};

export const SearchForm: React.FC<SearchFormProps> = ({
  reservationsActions,
  currentReservations,
}) => {
  const { handleSearchChange } = reservationsActions;

  const { register, watch } = useForm<Inputs>();

  // Watch for changes in the "data" field
  const searchData = watch("data");

  // Use useEffect to trigger the search function on change
  useEffect(() => {
    if (searchData !== undefined) {
      console.log(searchData);
      handleSearchChange(searchData);
    }
  }, [searchData]);

  return (
    <form className="search-form">
      <input
        {...(register("data"), { placeholder: "serach by email or table" })}
      />
    </form>
  );
};
