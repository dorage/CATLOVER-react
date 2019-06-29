import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    display: flex;
    top: 30px;
    width: 100%;
    height: 400px;
    background-color: ${cssVar.color03};
    color: white;
`;

const SplashImage = styled.img`
    height: 400px;
    width: auto;
    object-fit: cover;
`;

const ManipulateContainer = styled.div`
    width: 100%;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 50%;
    font-size: 100px;
    color: white;
`;
const Title = styled.img`
    display: block;
    margin: 50px;
    height: 50%;
    width: auto;
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 25%;
`;
const Form = styled.form`
    display: flex;
    vertical-align: center;
    align-content: center;
    align-items: center;
`;
const SearchBar = styled.input`
    display: block;
    width: 60%;
    height: 30px;
    margin: 0 auto;
    margin-top: 30px;
    border-style: solid;
    border-color: ${cssVar.color04};
    background-color: rgb(80, 80, 80);
    background-color: ${cssVar.color03};
`;
const MenuContainer = styled.div`
    width: 100%;
    height: 25%;
`;

const Splash = () => (
    <Container>
        <SplashImage src="https://lovethereum-local.s3.ap-northeast-2.amazonaws.com/swimwear_zoomin2.png" />
        <ManipulateContainer>
            <LogoContainer>
                <Title src="https://lovethereum-local.s3.ap-northeast-2.amazonaws.com/splash-logo-white.png"></Title>
            </LogoContainer>
            <SearchContainer>
                <Form>
                    <SearchBar placeholder="  search term..." />
                </Form>
            </SearchContainer>
            <MenuContainer></MenuContainer>
        </ManipulateContainer>
    </Container>
);

export default Splash;
