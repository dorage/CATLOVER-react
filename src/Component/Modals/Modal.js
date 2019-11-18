import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../../vars';

const Container = styled.div`
    position: fixed;
    display: 'block';
    z-index: 99;
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
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        height: 100%;
    }
    @media (min-width: 1025px) {
        width: 30%;
        height: 300px;
        margin: 150px auto;
    }
`;
const ControlSection = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;
const ContentSection = styled.div``;
const CloseButton = styled.button`
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 40px;
        height: 40px;
        font-weight: 700;
    }
    @media (min-width: 1025px) {
        width: 20px;
        height: 20px;
        font-weight: 700;
    }
    border: none;
    background-color: transparent;
    color: ${cssVar.gold};
    cursor: pointer;
`;

const Modal = props => {
    const { closeModal, children } = props;
    return (
        <Container>
            <Window>
                <ControlSection>
                    <CloseButton onClick={closeModal}>X</CloseButton>
                </ControlSection>
                <ContentSection>{children}</ContentSection>
            </Window>
        </Container>
    );
};

export default Modal;
