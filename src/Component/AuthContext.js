import React, { createContext } from 'react';
import { serverApi } from '../api';

const { Provider, Consumer: AuthConsumer } = createContext();

class AuthProvider extends React.Component {
    state = {
        tokenId: '',
        results: null
    };

    actions = {
        onSuccess: async response => {
            const { id_token: tokenId } = response.getAuthResponse();
            console.log(tokenId);
            const {
                data: { results }
            } = await serverApi.login(tokenId);
            localStorage.setItem('tokenId', tokenId);
            this.setState({ tokenId, results });
        },
        onFailure: response => {}
    };

    // 새 페이지 불러올때마다 로컬스토리지에서 가져오기 -> 가져와서 확인하기
    // 틀리면 삭제하기
    async componentDidMount() {
        try {
            const tokenId = localStorage.getItem('tokenId');
            if (tokenId) {
                const {
                    data: { results }
                } = await serverApi.auth(tokenId);
                if (tokenId) this.setState({ tokenId, results });
            }
        } catch (e) {
            localStorage.removeItem('tokenId');
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
