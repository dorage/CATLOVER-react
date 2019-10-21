import React from 'react';
import styled from 'styled-components';
import { cssVar, Assets } from '../vars';
import SignInModal from './Modals/SigninModal';

const Container = styled.div`
    position: relative;
    bottom: ${cssVar.headerH};
    height: ${cssVar.headerH};
    background-color: ${cssVar.black};
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    z-index: 10;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: ${cssVar.gold};
`;

const Link = styled.a`
    margin-left: 30px;
`;
const Home = styled.div`
    background: url(${Assets.imgHottieLogo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: ${cssVar.headerH};
    color: white;
`;

const Greeting = styled.div`
    color: ${cssVar.white};
    height: 100%;
`;
const Name = styled.div`
    color: ${cssVar.gold};
    height: 100%;
`;

const Header = () => (
    <Container>
        <SignInModal />
        <Link href="/">
            <Home />
        </Link>
    </Container>
);

export default Header;
