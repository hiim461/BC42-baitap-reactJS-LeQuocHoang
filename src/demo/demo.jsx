import React from "react";
import { GoogleLogin } from "react-google-login";
import DemoLogin from "./DemoLogin";
import DemoLogout from "./DemoLogout";

function Demo() {
  return (
    <div>
      <DemoLogin />
      <DemoLogout />
    </div>
  );
}

export default Demo;
