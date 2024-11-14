import { SigninForm } from "@src/widgets/signin-form";
import React from "react";
import { useLogin } from "../hooks";

export function LoginPage() {
  const { handleLoginUser, isLoading, contextHolder } = useLogin();
  return (
    <>
      {contextHolder}
      <SigninForm
        login={true}
        isLoading={isLoading}
        handleAction={handleLoginUser}
      />
    </>
  );
}
