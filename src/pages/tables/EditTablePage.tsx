import { useTables } from "@src/features/tables-management/hooks/useTables";
import { EditTableForm } from "@src/widgets/tables/ui";
import { useLocation, useParams } from "react-router-dom";

export const EditTablePage = () => {
  const { tablesActions } = useTables();
  const { tableID } = useParams();
  const { getTableById } = tablesActions;
  const currentTable = getTableById(tableID);

  return (
    <>
      <EditTableForm
        currentTable={currentTable}
        tablesActions={tablesActions}
      />
      ;
    </>
  );
};
