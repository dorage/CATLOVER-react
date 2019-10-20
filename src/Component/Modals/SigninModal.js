import React from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import Modal from './Modal';
import { cssVar } from '../../vars';
import OAuth from '../OAuth';
import { API_URL } from '../../config';

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
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }

    showModal = () => {
        this.setState = true;
    };

    render() {
        const { display } = this.state;
        return (
            <Container>
                <Modal display={display}>
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
            </Container>
        );
    }
}

export default SignInModal;
