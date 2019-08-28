import React from 'react';
import styled from 'styled-components';
import InstaLink from '../../Component/InstaLink';
import LikeButton from '../../Component/LikeButton';
import Tags from '../../Component/Tags';
import { cssVar, Assets } from '../../vars';

const Container = styled.div`
    color: ${cssVar.white};
`;
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Profile = styled.div`
    background: url(${props => props.bgUrl});
    background-color: ${cssVar.purple};
    background-position: center;
    background-size: contain;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 30px;
`;
const Nickname = styled.a`
    font-size: 48px;
    font-weight: 700;
    margin: 30px;
`;

const PostContainer = styled.div`
    font-size: 30px;
    font-weight: 600;
`;

export default ({ id, results, loading, error }) => (
    <Container>
        {loading ? (
            <></>
        ) : (
            <>
                <InstaLink mark="@" instagram={results.girl.instagram[0]} />
                <ProfileContainer>
                    <Profile />
                    <Nickname>뭉이</Nickname>
                </ProfileContainer>
                <LikeButton type="girl" id={id} />
                <Tags tags={results.girl.tags} />
                <PostContainer>Post</PostContainer>
            </>
        )}
    </Container>
);
