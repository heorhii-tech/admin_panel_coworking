import { SigninForm } from "@src/widgets/signin-form";
import useRegister from "../hooks/register";
import { SuccessResult } from "@src/shared/ui";
import { AutoRedirect } from "@src/shared/utils";

export function RegisterPage() {
  const { registerNewUser, isLoading, contextHolder, isSuccessRegistered } =
    useRegister();
  const title = '"You successfuly registered"';
  const subTitle = "After 4 seconds you will redirect to Login page";
  return (
    <>
      {contextHolder}
      {isSuccessRegistered && <AutoRedirect to="/login" delay={4000} />}
      {!isSuccessRegistered ? (
        <SigninForm
          login={false}
          handleAction={registerNewUser}
          isLoading={isLoading}
        />
      ) : (
        <SuccessResult title={title} subTitle={subTitle} />
      )}
    </>
  );
}
