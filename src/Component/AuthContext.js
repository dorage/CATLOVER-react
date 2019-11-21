import React, { createContext } from 'react';
import io from 'socket.io-client';
import { serverApi } from '../api';
import { API_URL } from '../config';

const { Provider, Consumer: AuthConsumer } = createContext();

class AuthProvider extends React.Component {
    state = {
        socket: null,
        user: {}
    };

    actions = {
        onSignIn: user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({ user });
            window.location.reload();
        },
        onSignOut: () => {
            localStorage.removeItem('user');
            this.setState({ user: {} });
        }
    };

    // 로그인 체크
    componentDidMount() {
        try {
            const user =
                localStorage.getItem('user') === null
                    ? {}
                    : JSON.parse(localStorage.getItem('user'));
            const socket = io(API_URL);
            this.setState({ user, socket });
        } catch (e) {
            console.log(e);
            localStorage.removeItem('user');
        }
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
                    return (
                        <WrappedComponent {...state} {...actions} {...props} />
                    );
                }}
            </AuthConsumer>
        );
    };
};

export default { AuthProvider, AuthConsumer, HoCAuth };
