import React from 'react';
import styled from 'styled-components';
import { API_URL } from '../config';

const Container = styled.div`
    margin: 20px;
    width: 250px;
    height: 250px;
`;
const SigninBox = styled.div`
    width: 100%;
    height: 100%;
`;
const Button = styled.button`
    width: 100%;
    height: 100%;
`;

class OAuth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            disabled: ''
        };
    }

    componentDidMount() {
        const { socket, provider } = this.props;

        socket.on(provider, user => {
            console.log('get!');
            this.popup.close();
            this.setState({ user });
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

    closeCard = () => {
        this.state({ user: {} });
    };

    render() {
        const { provider } = this.props;
        const {
            user: { name, photo }
        } = this.state;
        return (
            <Container>
                {name ? (
                    <SigninBox>
                        <img src={photo} alt={name} />
                        <div onClick={this.closeCard}>x</div>
                        <h4>{name}</h4>
                    </SigninBox>
                ) : (
                    <SigninBox>
                        <Button type="submit" onClick={this.startAuth}>
                            {provider}
                        </Button>
                    </SigninBox>
                )}
            </Container>
        );
    }
}

export default OAuth;
