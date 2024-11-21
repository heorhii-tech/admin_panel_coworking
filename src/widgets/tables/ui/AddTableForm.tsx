import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Table } from "@src/shared/types";

type AddTableFormProps = {
  tablesActions: {
    handleAddNewTable: (tableData: Table) => Promise<void>;
  };
};

export const AddTableForm: React.FC<AddTableFormProps> = ({
  tablesActions,
}) => {
  const { handleAddNewTable } = tablesActions;
  const [form] = Form.useForm();
  const onFinish: FormProps<Table>["onFinish"] = (values) => {
    handleAddNewTable(values);
    form.resetFields();
  };

  const onFinishFailed: FormProps<Table>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
    form.resetFields();
  };

  return (
    <Form
      name="addTable"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item<Table>
        label="Table ID"
        name="tableID" // Используем name для значения
        rules={[{ required: true, message: "Please input the table ID!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<Table>
        label="Title"
        name="title" // Используем name для значения
        rules={[{ required: true, message: "Please input the title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<Table>
        label="Price"
        name="price" // Используем name для значения
        rules={[{ required: true, message: "Please input the price!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<Table>
        label="Image URL"
        name="img" // Используем name для значения
        rules={[{ required: true, message: "Please input the image URL!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        className="test"
        label={null}
        style={{ justifyContent: "flex-end", display: "flex" }}
      >
        <Button type="primary" htmlType="submit" style={{ width: "200px" }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
