import React from 'react';
import styled from 'styled-components';
import { cssVar, Assets } from '../vars';

const Container = styled.button`
    display: flex;
    background-color: ${cssVar.black};
    border: none;
    color: ${cssVar.white};
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    :hover {
        background-color: ${cssVar.purple};
    }
`;
const GoogleIcon = styled.img`
    background-size: contain;
    height: 40px;
    width: auto;
    margin-right: 15px;
`;
const Text = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-shadow: 2px 2px 4px #000000;
`;

export default renderProps => (
    <Container onClick={renderProps.onClick} disabled={renderProps.disabled}>
        <GoogleIcon src={Assets.imgGoogleLogo} />
        <Text>
            Google
            <br />
            Login
        </Text>
    </Container>
);
