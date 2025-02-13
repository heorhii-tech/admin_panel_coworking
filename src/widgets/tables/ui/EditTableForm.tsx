import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Table } from "@src/shared/types";
import { SpinLoader } from "@src/shared/ui";

interface EditTableFormProps {
  currentTable: Table | undefined;
  tablesActions: {
    handleEditTable: (data: Table) => Promise<void>;
  };
}

type FieldType = {
  table?: string;
  title?: string;
  price?: string;
  img?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const EditTableForm: React.FC<EditTableFormProps> = ({
  currentTable,
  tablesActions,
}) => {
  const { handleEditTable } = tablesActions;
  return currentTable ? (
    <Form
      name="edit-table-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        table: currentTable.tableID, // Предзаполняем значениями из currentTable
        title: currentTable.title,
        price: currentTable.price,
        img: currentTable.img,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Table Name"
        name="table"
        rules={[{ required: true, message: "Please enter the table name!" }]}
      >
        <Input placeholder="Enter table name" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter the title!" }]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please enter the price!" }]}
      >
        <Input placeholder="Enter price" type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Image URL"
        name="img"
        rules={[{ required: true, message: "Please enter the image URL!" }]}
      >
        <Input placeholder="Enter image URL" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <SpinLoader fullscreen />
  );
};
