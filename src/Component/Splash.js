import React from 'react';
import styled from 'styled-components';
import Ranking from './Ranking';
import { Assets } from '../vars';
import Tags from './Tags';

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

const TagContainer = styled.div`
    display: flex;
    height: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TagContainerMiddle = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 50%;
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
            <TagContainer>
                <TagContainerMiddle>
                    {loading ? <></> : <Tags tags={tags} />}
                </TagContainerMiddle>
            </TagContainer>
            <MenuContainer></MenuContainer>
        </ManipulateContainer>
        <RankingContainer>
            <Ranking />
        </RankingContainer>
    </Container>
);

export default Splash;
