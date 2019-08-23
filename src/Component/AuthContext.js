import React, { createContext } from 'react';
import { userInfo } from 'os';
import { serverApi } from '../api';

const { Provider, Consumer: AuthConsumer } = createContext();

class AuthProvider extends React.Component {
    state = {
        tokenId: '',
        userInfo: null
    };

    actions = {
        onInit: () => {
            this.setState({ tokenId: '' });
        },
        onSuccess: response => {
            const { id_token: tokenId } = response.getAuthResponse();
            serverApi.login(tokenId).then(({ results }) => {
                const userInfo = results;
                sessionStorage.setItem('tokenId', tokenId);
                this.setState({ tokenId, userInfo });
            });
        },
        onFailure: response => {}
    };

    componentDidMount() {
        const tokenId = sessionStorage.getItem('tokenId');
        console.log(tokenId);
        if (tokenId) this.setState({ tokenId });
    }

    render = () => {
        const { state, actions } = this;
        const value = { state, actions };
        const { children } = this.props;
        return <Provider value={value}>{children}</Provider>;
    };
}

const HoCAuth = WrappedComponent => {
    return props => {
        return (
            <AuthConsumer>
                {({ state, actions }) => {
                    return <WrappedComponent {...props} />;
                }}
            </AuthConsumer>
        );
    };
};

export default { AuthProvider, AuthConsumer, HoCAuth };
