import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../../vars';

const Container = styled.div`
    background-color: ${cssVar.black};
    text-align: center;
    outline: solid 1px;
    outline-color: ${cssVar.gold};
    padding: 5px;
    width: 20%;
`;

const CategoryContainer = styled.div`
    display: flex;
    font-size: 20px;
    height: 40px;
`;
const Category = styled.div`
    width: 50%;
    height: 40px;
    line-height: 40px;
    background-color: ${cssVar.charcoal};
    cursor: pointer;
    :nth-child(1) {
        ${props => !props.girlRank && `background-color:${cssVar.gold}`}
    }
    :nth-child(2) {
        ${props => props.girlRank && `background-color:${cssVar.gold}`}
    }
    :hover {
        background-color: ${cssVar.purple};
    }
`;
const RankContainer = styled.div``;
const RankBox = styled.div`
    display: flex;
    font-size: 14px;
    margin: 10px 0px;
    :nth-child(1) {
        font-size: 10px;
        color: ${cssVar.gold};
    }
`;
const Rank = styled.div`
    width: 10%;
`;
const Name = styled.div`
    width: 80%;
`;
const Likes = styled.div`
    width: 10%;
`;

// component 형식으로 나누기
export default ({ girlRank, results, loading, error, isGirlRank }) => (
    <Container>
        <CategoryContainer>
            <Category girlRank={girlRank} onClick={() => isGirlRank(false)}>
                Post
            </Category>
            <Category girlRank={girlRank} onClick={() => isGirlRank(true)}>
                Girl
            </Category>
        </CategoryContainer>
        {girlRank ? (
            <RankContainer>
                <RankBox>
                    <Rank>RANK</Rank>
                    <Name>NAME</Name>
                    <Likes>LIKES</Likes>
                </RankBox>
                {loading
                    ? Array(10).map((elem, index) => (
                          <RankBox>
                              <Rank>{index}</Rank>
                              <Name>loading</Name>
                              <Likes>0</Likes>
                          </RankBox>
                      ))
                    : results.girl.map((elem, index) => (
                          <RankBox key={elem._id}>
                              <Rank>{index + 1}</Rank>
                              <Name>{elem.name}</Name>
                              <Likes>{elem.like}</Likes>
                          </RankBox>
                      ))}
            </RankContainer>
        ) : (
            // Post Ranking
            <RankContainer>
                <RankBox>
                    <Rank>RANK</Rank>
                    <Name>LINK</Name>
                    <Likes>LIKES</Likes>
                </RankBox>
                {loading
                    ? Array(10).map((elem, index) => (
                          <RankBox>
                              <Rank>{index}</Rank>
                              <Name>loading</Name>
                              <Likes>0</Likes>
                          </RankBox>
                      ))
                    : results.post.map((elem, index) => (
                          <RankBox key={elem._id}>
                              <Rank>{index + 1}</Rank>
                              <Name>{elem.link}</Name>
                              <Likes>{elem.like}</Likes>
                          </RankBox>
                      ))}
            </RankContainer>
        )}
    </Container>
);
