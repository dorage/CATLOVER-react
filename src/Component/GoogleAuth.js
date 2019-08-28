import React from 'react';
import GoogleLogin from 'react-google-login';
import AuthContext from './AuthContext';

const HOCGoogleLogin = AuthContext.HoCAuth(GoogleLogin);

export default props => {
    const { renderer } = props;
    return (
        <HOCGoogleLogin
            clientId="227749968988-unq87uumj8k65hjg6fc7c36ir46aj0vo.apps.googleusercontent.com"
            render={renderProps => renderer(renderProps)}
            buttonText="Login"
            cookiePolicy="single_host_origin"
            {...props}
        />
    );
};
