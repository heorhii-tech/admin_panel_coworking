import React from "react";
import { Button, Result } from "antd";

interface SuccessResultPorps{
    title:string,
    subTitle:string
}

export const SuccessResult: React.FC<SuccessResultPorps> = ({title,subTitle}) => (
  <Result
    status="success"
    title={title}
    subTitle={subTitle}
   /*  extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]} */
  />
);

