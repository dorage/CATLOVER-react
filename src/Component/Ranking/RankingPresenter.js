import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { cssVar } from '../../vars';

const Container = styled.div`
    background-color: ${cssVar.black};
    text-align: center;
    outline: solid 1px;
    outline-color: ${cssVar.gold};
    padding: 5px;
    width: 100%;
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
    :nth-child(even) {
        background-color: ${cssVar.charcoal};
    }
`;
const Rank = styled.div`
    width: 10%;
`;
const NameTitle = styled.div`
    width: 80%;
`;
const Name = styled(Link)`
    width: 80%;
    color: white;
    text-decoration: none;
`;
const Likes = styled.div`
    width: 10%;
`;

// component 형식으로 나누기
const RankingPresenter = ({
    girlRank,
    results,
    loading,
    error,
    isGirlRank
}) => (
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
            // Girl Ranking
            <RankContainer>
                <RankBox>
                    <Rank>RANK</Rank>
                    <NameTitle>NAME</NameTitle>
                    <Likes>LIKES</Likes>
                </RankBox>
                {loading
                    ? Array(10)
                          .fill(0)
                          .map((elem, index) => (
                              <RankBox key={`loading-${index}`}>
                                  <Rank>{index + 1}</Rank>
                                  <Name to="/">loading</Name>
                                  <Likes>0</Likes>
                              </RankBox>
                          ))
                    : results.girls.map((elem, index) => (
                          <RankBox key={elem._id}>
                              <Rank>{index + 1}</Rank>
                              <Name to={`/cat/${elem._id}`}>{elem.name}</Name>
                              <Likes>{elem.like}</Likes>
                          </RankBox>
                      ))}
                {loading ? (
                    <></>
                ) : (
                    new Array(10 - results.girls.length)
                        .fill(0)
                        .map((elem, index) => (
                            <RankBox key={`untitled-${index}`}>
                                <Rank>{index + results.girls.length + 1}</Rank>
                                <Name to="/">-</Name>
                                <Likes>-</Likes>
                            </RankBox>
                        ))
                )}
            </RankContainer>
        ) : (
            // Post Ranking
            <RankContainer>
                <RankBox>
                    <Rank>RANK</Rank>
                    <NameTitle>LINK</NameTitle>
                    <Likes>LIKES</Likes>
                </RankBox>
                {loading
                    ? Array(10)
                          .fill(0)
                          .map((elem, index) => (
                              <RankBox key={`loading-${index}`}>
                                  <Rank>{index + 1}</Rank>
                                  <Name to="/">loading</Name>
                                  <Likes>0</Likes>
                              </RankBox>
                          ))
                    : results.posts.map((elem, index) => (
                          <RankBox key={elem._id}>
                              <Rank>{index + 1}</Rank>
                              <Name to={`/post/${elem._id}`}>{elem.link}</Name>
                              <Likes>{elem.like}</Likes>
                          </RankBox>
                      ))}
                {loading ? (
                    <></>
                ) : (
                    new Array(10 - results.posts.length)
                        .fill(0)
                        .map((elem, index) => (
                            <RankBox key={`untitled-${index}`}>
                                <Rank>{index + results.posts.length + 1}</Rank>
                                <Name to="/">-</Name>
                                <Likes>-</Likes>
                            </RankBox>
                        ))
                )}
            </RankContainer>
        )}
    </Container>
);

export default withRouter(RankingPresenter);
