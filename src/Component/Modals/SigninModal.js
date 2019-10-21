import React from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import Modal from './Modal';
import { cssVar } from '../../vars';
import OAuth from '../OAuth';
import { API_URL } from '../../config';
import AuthContext from '../AuthContext';

const socket = io(API_URL);

const providers = ['google', 'facebook'];

const Container = styled.div`
    color: ${cssVar.white};
`;

const SignInOutButton = styled.button`
    display: flex;
    background-color: ${cssVar.black};
    height: 100%;
    border: none;
    color: ${cssVar.white};
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 50px;
    font-size: 24px;
    font-weight: 600;
    :hover {
        background-color: ${cssVar.purple};
    }
`;

const ChildrenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.div`
    color: ${cssVar.white};
    text-align: center;
    font-size: 48px;
    margin-bottom: 50px;
`;

class SignInModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    showModal = () => {
        this.setState({ display: true });
    };

    closeModal = () => {
        this.setState({ display: false });
    };

    render() {
        const { display } = this.state;
        return (
            <Container>
                <AuthContext.AuthConsumer>
                    {({ state, actions }) =>
                        !state.user.id ? (
                            // sign in
                            <SignInOutButton onClick={this.showModal}>
                                sign in with sns
                            </SignInOutButton>
                        ) : (
                            // sign out
                            <SignInOutButton onClick={actions.onSignOut}>
                                Sign Out
                            </SignInOutButton>
                        )
                    }
                </AuthContext.AuthConsumer>
                {display && (
                    <Modal closeModal={this.closeModal}>
                        <ChildrenContainer>
                            <Title>Sign In</Title>
                            {providers.map(provider => (
                                <OAuth
                                    provider={provider}
                                    key={provider}
                                    socket={socket}
                                />
                            ))}
                        </ChildrenContainer>
                    </Modal>
                )}
            </Container>
        );
    }
}

export default SignInModal;
