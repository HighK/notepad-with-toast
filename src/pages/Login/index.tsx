import React from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import logo from "./logo.png";

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 50px;
  }
`;

const LoginPage = ({ onLogin }: any) => {
  return (
    <LoginWrapper>
      <img height={300} alt="logo" src={logo} />
      <GoogleLogin
        clientId="301535444386-bnb7lk2v37t5qhhqa1f97o97hcpsfcou.apps.googleusercontent.com"
        onSuccess={(e) => onLogin(true)}
      />
    </LoginWrapper>
  );
};

export default LoginPage;
