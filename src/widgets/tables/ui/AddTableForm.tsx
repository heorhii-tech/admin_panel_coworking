import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Table } from "@src/shared/types";

type AddTableFormProps = {
  tablesActions: {
    handleAddNewTable: (tableData: Table) => Promise<void>;
  };
  onFormSubmit: () => void;
};

export const AddTableForm: React.FC<AddTableFormProps> = ({
  tablesActions,
  onFormSubmit,
}) => {
  const { handleAddNewTable } = tablesActions;
  const [form] = Form.useForm();
  const onFinish: FormProps<Table>["onFinish"] = async (values) => {
    await handleAddNewTable(values);
    form.resetFields();
    onFormSubmit();
  };

  const onFinishFailed: FormProps<Table>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="addTable"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 32 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item<Table>
        label="Table name"
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
