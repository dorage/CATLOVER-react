import React from 'react';
import styled from 'styled-components';
import { API_URL } from '../config';
import { cssVar, Assets } from '../vars';
import AuthContext from './AuthContext';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const SigninBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
    display: flex;
    width: 60%;
    height: 40px;
    font-size: 18px;
    background-color: ${cssVar.charcoal};
    color: ${cssVar.white};
    box-shadow: 1px 2px ${cssVar.white};
    margin: 20px;
    border: solid 1px;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    :hover {
        background-color: ${cssVar.black};
        color: ${cssVar.purple};
        box-shadow: 1px 2px ${cssVar.purple};
    }
`;
const NoneClickable = styled.button`
    display: flex;
    width: 60%;
    height: 40px;
    font-size: 18px;
    background-color: ${cssVar.charcoal};
    color: ${cssVar.white};
    box-shadow: 1px 2px ${cssVar.white};
    margin: 20px;
    border: solid 1px;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    :hover {
        background-color: ${cssVar.black};
        color: ${cssVar.purple};
        box-shadow: 1px 2px ${cssVar.purple};
    }
`;
const LogoSection = styled.div`
    width: 30%;
`;
const Logo = styled.img`
    height: 20px;
`;
const TextSection = styled.div`
    text-align: left;
    width: 70%;
`;

class OAuth extends React.Component {
    state = {
        disabled: ''
    };

    componentDidMount() {
        const { socket, provider, onSignIn } = this.props;

        socket.on(provider, user => {
            this.popup.close();
            console.log(user);
            onSignIn(user);
        });
    }

    checkPopup = () => {
        const check = setInterval(() => {
            const { popup } = this;
            if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check);
                this.setState({ disabled: '' });
            }
        }, 1000);
    };

    openPopup = () => {
        const { provider, socket } = this.props;
        const width = 600;
        const height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const url = `${API_URL}/${provider}?socketId=${socket.id}`;

        return window.open(
            url,
            '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
          scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
          height=${height}, top=${top}, left=${left}`
        );
    };

    startAuth = e => {
        const { disabled } = this.state;
        if (!disabled) {
            e.preventDefault();
            this.popup = this.openPopup();
            this.checkPopup();
            this.setState({ disabled: 'disabled' });
        }
    };

    render() {
        const { provider, clickable } = this.props;
        return (
            <Container>
                <SigninBox>
                    {clickable ? (
                        <Button type="submit" onClick={this.startAuth}>
                            <LogoSection>
                                <Logo src={Assets[provider]} />
                            </LogoSection>
                            <TextSection>{`Sign in with ${provider}`}</TextSection>
                        </Button>
                    ) : (
                        <NoneClickable type="submit">
                            <LogoSection>
                                <Logo src={Assets[provider]} />
                            </LogoSection>
                            <TextSection>{`${provider} is not working yet`}</TextSection>
                        </NoneClickable>
                    )}
                </SigninBox>
            </Container>
        );
    }
}

export default AuthContext.HoCAuth(OAuth);
