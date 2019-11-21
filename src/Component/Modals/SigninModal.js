import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { cssVar } from '../../vars';
import OAuth from '../OAuth';

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
            this.setState({ display: true });
        },
        closeModal: () => {
            this.setState({ display: false });
        }
    };

    render() {
        const { display } = this.state;
        const { showModal, closeModal } = this.actions;
        const { signIn, socket } = this.props;
        return (
            <Container>
                {signIn && signIn({ showModal })}
                {display && (
                    <Modal closeModal={closeModal}>
                        <ChildrenContainer>
                            <Title>Sign In</Title>
                            {providers.map(provider =>
                                provider === 'facebook' ? (
                                    <OAuth
                                        provider={provider}
                                        key={provider}
                                        socket={socket}
                                        clickable={false}
                                    />
                                ) : (
                                    <OAuth
                                        provider={provider}
                                        key={provider}
                                        socket={socket}
                                        clickable
                                    />
                                )
                            )}
                        </ChildrenContainer>
                    </Modal>
                )}
            </Container>
        );
    }
}

export default SignInModal;
