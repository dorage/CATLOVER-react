import React from 'react';
import styled from 'styled-components';
import Ranking from './Ranking';
import { cssVar } from '../vars';

const Container = styled.div`
    display: flex;
    top: 30px;
    width: 100%;
    height: 400px;
    color: white;
`;
const RankingContainer = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
`;

const ManipulateContainer = styled.div`
    width: 80%;
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
    color: ${cssVar.white};
    padding-left: 10px;
    padding-right: 10px;
    border-style: solid;
    border-color: ${cssVar.gold};
    background-color: rgb(80, 80, 80);
    background-color: ${cssVar.charcoal};
`;
const MenuContainer = styled.div`
    width: 100%;
    height: 25%;
`;

const Splash = () => (
    <Container>
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
        <RankingContainer>
            <Ranking />
        </RankingContainer>
    </Container>
);

export default Splash;
