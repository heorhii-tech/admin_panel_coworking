import React from "react";
import { Table } from "@src/shared/types";
import { Collapse, CollapseProps } from "antd";
import { AddTableForm } from "./AddTableForm";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
type AddTableProps = {
  tablesActions: {
    handleAddNewTable: (tableData: Table) => Promise<void>;
  };
};
export const AddTable: React.FC<AddTableProps> = ({ tablesActions }) => {
  const lable = "ADD NEW TABLE";
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <>{lable}</>,

      children: <AddTableForm tablesActions={tablesActions} />,
    },
  ];

  return (
    <Collapse
      items={items}
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
    />
  );
};
