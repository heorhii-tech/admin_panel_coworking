import React from "react";
import { Button, Spin } from "antd";
interface SpinLoaderProps {
  fullscreen: boolean;
}
export const SpinLoader: React.FC<SpinLoaderProps> = ({ fullscreen }) => {
  const [spinning, setSpinning] = React.useState(true);
  const [percent, setPercent] = React.useState(0);

  return <Spin spinning={spinning} percent={percent} fullscreen={fullscreen} />;
};
