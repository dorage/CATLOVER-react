import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../../vars';

const Container = styled.div`
    position: fixed;
    display: ${props => `${props.display ? 'block' : 'none'}`};
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`;
const Window = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${cssVar.charcoal};
    border: solid 2px ${cssVar.gold};
    color: ${cssVar.gold};
    padding: 5px;
    width: 30%;
    height: 300px;
    margin: 150px auto;
`;
const ControlSection = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;
const ContentSection = styled.div``;
const CloseButton = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    color: ${cssVar.gold};
    cursor: pointer;
`;

class Modal extends React.Component {
    constructor(props) {
        super(props);
        const { display } = this.props;
        this.state = { display };
    }

    onClickExitButton = () => {
        this.setState({ display: false });
    };

    render() {
        const { display } = this.state;
        const { children } = this.props;
        return (
            <Container display={display}>
                <Window>
                    <ControlSection>
                        <CloseButton onClick={this.onClickExitButton}>
                            X
                        </CloseButton>
                    </ControlSection>
                    <ContentSection>{children}</ContentSection>
                </Window>
            </Container>
        );
    }
}

export default Modal;
