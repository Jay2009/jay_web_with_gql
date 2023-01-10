import React from "react";
import { Spin } from "antd";

function Loading() {
  return (
    <div
      style={{
        padding: 11.2,
      }}
    >
      <Spin size="large" />
    </div>
  );
}

export default Loading;
