import React from "react";
import { Table } from "@src/shared/types";
import { List } from "antd";
import TableItem from "./TableItem";

interface TablesListProps {
  tables: Table[];
  tablesActions: {
    handleDeleteTable: (tableID: string) => Promise<void>;
  };
}

export const TablesList: React.FC<TablesListProps> = ({
  tables,
  tablesActions,
}) => {
  return tables.length ? (
    <List
      className="tables-list"
      itemLayout="vertical"
      size="small"
      dataSource={tables}
      renderItem={(table) => (
        <TableItem
          tablesActions={tablesActions}
          key={table.tableID}
          table={table}
        />
      )}
    />
  ) : (
    <>No tables</>
  );
};
