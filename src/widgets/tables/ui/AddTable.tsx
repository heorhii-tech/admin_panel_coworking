import React, { useState } from "react";
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
  const label = "ADD NEW TABLE";
  const [activeKey, setActiveKey] = useState<string | string[]>("");

  const toggleCollapse = (key: string | string[]) => {
    const activeKey = Array.isArray(key) ? key[0] : key;
    setActiveKey((prev) => (prev === activeKey ? "1" : activeKey));
  };

  const closeCollapse = () => {
    setActiveKey(""); // Закрыть коллапс
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <p style={{ fontWeight: "bold" }}>{label}</p>,
      children: (
        <AddTableForm
          tablesActions={tablesActions}
          onFormSubmit={closeCollapse}
        />
      ),
    },
  ];

  return (
    <Collapse
      items={items}
      activeKey={activeKey}
      onChange={toggleCollapse}
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
    />
  );
};
