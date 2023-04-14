import React from "react";
import { GoogleLogin } from "react-google-login";

function DemoLogin() {
  const onSuccess = (res) => {
    console.log("[LoginSuccess] CurrentUser:", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login Failed] res: ", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId="337674150523-7gqdle97ar6f4hieq28n618a680rheqc.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default DemoLogin;
