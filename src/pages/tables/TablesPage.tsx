import { useTables } from "@src/features/tables-management/hooks/useTables";
import { SpinLoader } from "@src/shared/ui";
import { AddTable, TablesList } from "@src/widgets/tables/ui";
import React from "react";

export const TablesPage = () => {
  const { tables, tablesActions, isLoading, contextHolder } = useTables();
  return (
    <div>
      {isLoading && <SpinLoader fullscreen />}
      {contextHolder}
      <AddTable tablesActions={tablesActions} />
      <TablesList tables={tables} tablesActions={tablesActions} />
    </div>
  );
};
