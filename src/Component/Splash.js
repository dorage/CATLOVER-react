import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    position: absolute;
    display: flex;
    top: 30px;
    width: 100%;
    height: 400px;
`;

const SplashImage = styled.img`
    width: 30%;
    object-fit: cover;
`;

const ManipulateContainer = styled.div`
    width: 100%;
`;

const LogoContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: ${cssVar.bgColor01};
    font-size: 100px;
    color: white;
`;
const Title = styled.span`
    display: inline-block;
    justify-content: center;
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 25%;
    background-color: brown;
`;
const SearchBar = styled.input`
    display: inline-block;
    width: 60%;
    border: none;
    background-color: ${cssVar.bgColor04};
`;
const MenuContainer = styled.div`
    width: 100%;
    height: 25%;
    background-color: greenyellow;
`;

const Splash = () => (
    <Container>
        <SplashImage src="https://lovethereum-local.s3.ap-northeast-2.amazonaws.com/marvin-meyer-672573-unsplash.png" />
        <ManipulateContainer>
            <LogoContainer>
                <Title>HOTTIE-F</Title>
            </LogoContainer>
            <SearchContainer>
                <div>searchbar</div>
                <SearchBar placeholder="search term..." />
                <div>Hot Terms</div>
            </SearchContainer>
            <MenuContainer>HotGirls</MenuContainer>
        </ManipulateContainer>
    </Container>
);

export default Splash;
