import { useTables } from "@src/features/tables-management/hooks/useTables";
import { AddTable, TablesList } from "@src/widgets/tables/ui";
import React from "react";

export const TablesPage = () => {
  const { tables, tablesActions } = useTables();
  return (
    <div>
      <AddTable tablesActions={tablesActions} />
      <TablesList tables={tables} />
    </div>
  );
};
