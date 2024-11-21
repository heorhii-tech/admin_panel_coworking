import React from "react";
import { Table } from "@src/shared/types";
import { List } from "antd";
import TableItem from "./TableItem";

interface TablesListProps {
  tables: Table[];
}

export const TablesList: React.FC<TablesListProps> = ({ tables }) => {
  return tables.length ? (
    <List
      className="tables-list"
      itemLayout="vertical"
      size="small"
      dataSource={tables}
      renderItem={(table) => <TableItem key={table.tableID} table={table} />}
    />
  ) : (
    <>No tables</>
  );
};
