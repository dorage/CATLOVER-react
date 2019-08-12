import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { async } from 'q';
import { serverApi } from '../api';

const Container = styled.div`
    background-color: whitesmoke;
    color: black;
`;

const CategoryContainer = styled.div`
    display: flex;
`;
const Category = styled.div`
    width: 50%;
    cursor: pointer;
`;
const RankContainer = styled.div``;
const RankBox = styled.div``;
const Mark = styled.div``;
const Rank = styled.div``;
const Heart = styled.div``;

// component 형식으로 나누기
export default () => {
    const [girlRank, setGirlRank] = useState(0);
    const [results, setResults] = useState(null);

    useEffect(() => {
        const setRank = async () => {
            const {
                data: { results: ranks }
            } = await serverApi.totalRank();
            console.log(ranks);
            setResults(ranks);
        };
        setRank();
    }, []);

    return (
        <Container>
            <CategoryContainer>
                <Category
                    onClick={async () => {
                        setGirlRank(0);
                    }}
                >
                    Post
                </Category>
                <Category
                    onClick={async () => {
                        setGirlRank(1);
                    }}
                >
                    Girl
                </Category>
            </CategoryContainer>
            <RankContainer>
                {girlRank
                    ? results.girl.map(elem => (
                        <RankBox key={elem._id}>{elem.link}</RankBox>
                    ))
                    : results.post.map(elem => (
                        <RankBox key={elem._id}>{elem.link}</RankBox>
                    ))}
            </RankContainer>
        </Container>
    );
};
