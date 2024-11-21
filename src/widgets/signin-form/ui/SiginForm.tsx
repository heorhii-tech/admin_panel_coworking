import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { SignUpFormInputs } from "@src/shared/types/index";
import { SpinLoader } from "@src/shared/ui";

interface SigninFormProps {
  login: boolean;
  isLoading: boolean;

  handleAction: (data: SignUpFormInputs) => Promise<void>;
}

export const SigninForm: React.FC<SigninFormProps> = ({
  login,
  isLoading,

  handleAction,
}) => {
  const [form] = Form.useForm();
  const onFinish: FormProps<SignUpFormInputs>["onFinish"] = (values) => {
    if (login) {
      const { displayName, ...loginValues } = values;
      handleAction(loginValues); // Pass only the relevant fields (email, password)
      form.resetFields();
    } else {
      handleAction(values); // For registration, all fields are passed
      form.resetFields();
    }
  };

  const onFinishFailed: FormProps<SignUpFormInputs>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="signin-form"
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      {isLoading && <SpinLoader fullscreen={true} />}

      {!login && (
        <Form.Item<SignUpFormInputs>
          label="Username"
          name="displayName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
      )}
      <Form.Item<SignUpFormInputs>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email address." },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<SignUpFormInputs>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 6, message: "Password must be at least 6 characters long." },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
