import React from "react";
import { GoogleLogout } from "react-google-login";

function DemoLogout() {
    const responseGoogle = (response) => {
        console.log(response);
      };
  return <div>
    <GoogleLogout
        clientId="337674150523-7gqdle97ar6f4hieq28n618a680rheqc.apps.googleusercontent.com"
        buttonText="Logout with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
  </div>;
}

export default DemoLogout;
