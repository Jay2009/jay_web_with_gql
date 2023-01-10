import React from "react";

function Error({ msg }: { msg: string }) {
  console.log(msg, "msg");

  return (
    <div style={{ zIndex: 10, color: "white", fontSize: "20px" }}>{msg}</div>
  );
}

export default Error;
