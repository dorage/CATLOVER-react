import React from 'react';
import styled from 'styled-components';
import { cssVar, Assets } from '../../vars';

const Container = styled.div`
    color: ${cssVar.white};
`;
const InstagramContainer = styled.div`
    display: flex;
    color: ${cssVar.charcoal};
`;
const Instagram = styled.div`
    background: url(${Assets.imgInstagramIcon});
    background-position: center;
    background-size: contain;
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;
const InstagramLink = styled.div``;
const Link = styled.a`
    display: inline-block;
    line-height: 25px;
    font-size: 20px;
    text-decoration: solid;
    color: grey;
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
const LikeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    color: ${cssVar.white};
    font-size: 20px;
    align-items: center;
`;
const LikeButton = styled.button`
    margin: 20px;
    width: 60px;
    height: 40px;
    font-size: 20px;
    color: white;
    background-color: ${cssVar.gold};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        background-color: ${cssVar.purple};
    }
    :focus {
        outline: none;
    }
`;
const TagContainer = styled.div``;

const PostContainer = styled.div`
    font-size: 30px;
    font-weight: 600;
`;

export default ({ results, loading, error }) => (
    <Container>
        {loading ? (
            <></>
        ) : (
            <>
                <InstagramContainer>
                    <Instagram />
                    <InstagramLink>
                        <Link
                            href={`http://www.instagram.com/${results.girl.instagram[0].id}`}
                        >
                            @{results.girl.instagram[0].id}
                        </Link>
                    </InstagramLink>
                </InstagramContainer>
                <ProfileContainer>
                    <Profile />
                    <Nickname>뭉이</Nickname>
                </ProfileContainer>
                <LikeContainer>
                    Likes : {results.girl.like}
                    <LikeButton name="like">❤</LikeButton>
                </LikeContainer>
                <PostContainer>Post</PostContainer>
            </>
        )}
    </Container>
);
