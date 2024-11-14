import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { SignUpFormInputs } from "@src/shared/types/index";
import useRegister from "@src/pages/sign-in/hooks/register";

export const SigninForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish: FormProps<SignUpFormInputs>["onFinish"] = (values) => {
    registerNewUser(values);
    form.resetFields();
  };

  const onFinishFailed: FormProps<SignUpFormInputs>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const { registerNewUser } = useRegister();
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<SignUpFormInputs>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<SignUpFormInputs>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item<SignUpFormInputs>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
