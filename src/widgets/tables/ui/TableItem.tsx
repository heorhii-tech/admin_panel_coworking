import React from "react";
import { Table } from "@src/shared/types";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space, Typography, Flex, Button } from "antd";
import { NavLink } from "react-router-dom";

interface TableItemProps {
  table: Table;
  tablesActions: {
    handleDeleteTable: (tableID: string) => Promise<void>;
  };
}
const { Text } = Typography;
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
export const TableItem: React.FC<TableItemProps> = ({
  table,
  tablesActions,
}) => {
  const { handleDeleteTable } = tablesActions;
  return (
    <List.Item
      className="table"
      key={"item.title"}
      extra={<img width={272} alt="logo" src={table.img} />}
    >
      <div className="table-info">
        <p>
          Table: <span>{table.tableID}</span>
        </p>
        <p>
          Title: <span>{table.title}</span>
        </p>
        <p>
          Price: <span>{table.price} €</span>
        </p>
      </div>
      <Flex className="buttons" wrap gap="small">
        <Button>
          <NavLink to={`/tables/${table.tableID}`}>EDIT</NavLink>
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => handleDeleteTable(table.tableID)}
        >
          DELETE
        </Button>
      </Flex>
    </List.Item>
  );
};

export default TableItem;
