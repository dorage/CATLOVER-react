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
    state = {
        display: false
    };

    actions = {
        showModal: () => {
            console.log('open');
            this.setState({ display: true });
        },
        closeModal: () => {
            console.log('close');
            this.setState({ display: false });
        }
    };

    render() {
        const { display } = this.state;
        const { showModal, closeModal } = this.actions;
        const { signIn } = this.props;
        return (
            <Container>
                {signIn && signIn({ showModal })}
                {display && (
                    <Modal closeModal={closeModal}>
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
