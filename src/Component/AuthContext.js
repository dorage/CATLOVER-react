import React, { createContext } from 'react';

const { Provider, Consumer: AuthConsumer } = createContext();

class AuthProvider extends React.Component {
    state = {
        user: {}
    };

    actions = {
        onSignIn: user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({ user });
            window.location.reload();
        },
        onSignOut: () => {
            console.log('logout');
            localStorage.removeItem('user');
            this.setState({ user: {} });
        }
    };

    // 로그인 체크
    componentWillMount() {
        try {
            const user =
                localStorage.getItem('user') === null
                    ? {}
                    : JSON.parse(localStorage.getItem('user'));
            this.setState({ user });
            console.log(user);
        } catch (e) {
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
