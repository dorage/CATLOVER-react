import React from 'react';
import styled from 'styled-components';
import Ranking from './Ranking';
import { Assets } from '../vars';
import Tags from './Tags';

const Container = styled.div`
    display: flex;
    width: 100%;
    color: white;
    @media (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
    }
    @media (min-width: 1025px) {
        height: 400px;
    }
`;
const RankingContainer = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    @media (min-width: 320px) and (max-width: 1024px) {
        display: none;
    }
    @media (min-width: 1025px) {
    }
`;

const ManipulateContainer = styled.div`
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 1025px) {
        width: 80%;
    }
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
    @media (min-width: 320px) and (max-width: 1024px) {
        margin: 50px;
        width: 80%;
        height: auto;
    }
    @media (min-width: 1025px) {
        margin: 50px;
        height: 50%;
        width: auto;
    }
`;

const MenuContainer = styled.div`
    width: 100%;
    height: 25%;
`;

const Splash = ({ tags, loading }) => (
    <Container>
        <ManipulateContainer>
            <LogoContainer>
                <Title src={Assets.imgHottieLogo}></Title>
            </LogoContainer>
            {loading ? <></> : <Tags tags={tags} />}
            <MenuContainer></MenuContainer>
        </ManipulateContainer>
        <RankingContainer>
            <Ranking />
        </RankingContainer>
    </Container>
);

export default Splash;
