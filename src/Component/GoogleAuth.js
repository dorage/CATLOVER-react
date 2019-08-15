import React from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import { cssVar } from '../vars';

const responseGoogle = response => {
    const profile = response.getBasicProfile();
    const { id_token } = response.getAuthResponse();
    console.log(profile);
    console.log(id_token);
};

const GoogleSigninButton = styled.button`
    background-color: ${cssVar.gold};
    border: none;
    color: ${cssVar.white};
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
`;

export default () => (
    <GoogleLogin
        clientId="227749968988-unq87uumj8k65hjg6fc7c36ir46aj0vo.apps.googleusercontent.com"
        render={renderProps => (
            <GoogleSigninButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
            >
                Google Login
            </GoogleSigninButton>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
    />
);
