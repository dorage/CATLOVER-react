import React from 'react';
import styled from 'styled-components';
import { cssVar, Assets } from '../vars';
import GoogleAuth from './GoogleAuth';

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

const Home = styled.div`
    background: url(${Assets.imgHottieLogo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: ${cssVar.headerH};
    color: white;
    margin-left: 30px;
`;
const Link = styled.a`
    width: 100%;
    height: 100%;
`;

const UserMenu = styled.div`
    display: flex;
    text-align: center;
    font-size: 24px;
    height: 100%;
    margin-right: 20px;
`;

const Header = () => (
    <Container>
        <UserMenu>
            <GoogleAuth />
        </UserMenu>
        <Link href="/">
            <Home />
        </Link>
    </Container>
);

export default Header;
