import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div``;
const Line = styled.hr`
    border-color: ${cssVar.color04};
`;
const FooterBox = styled.div`
    display: flex;
    width: 100%;
    margin: 30px;
    justify-content: center;
`;
const Text = styled.span`
    font-size: 11px;
    color: ${cssVar.color02};
`;

const Footer = () => (
    <Container>
        <Line />
        <FooterBox>
            <Text>©2019 Hottie-F</Text>
        </FooterBox>
    </Container>
);

export default Footer;
