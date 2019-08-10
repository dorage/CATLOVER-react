import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../../vars';

const Container = styled.div``;
const PostContainer = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    border-color: ${cssVar.gold};
`;
const ImageBox = styled.div`
    width: 50%;
    height: 100%;
    padding: 20px;
`;
const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;
const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 20px;
`;
const InstagramInfo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const Profile = styled.div`
    background: url(${props => props.bgUrl});
    background-position: center;
    background-size: contain;
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;
const Nickname = styled.div`
    color: ${cssVar.white};
    font-size: 30px;
    font-weight: 700;
`;
const Line = styled.hr`
    width: 100%;
    color: ${cssVar.gold};
    border: solid 0.5px;
`;
const PostInfo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
const TagContainer = styled.div`
    color: ${cssVar.white};
`;
const RealtedContainer = styled.div`
    width: 100%;
    height: 50%;
    font-size: 30px;
    font-weight: 600;
    margin-top: ${cssVar.headerH};
    color: ${cssVar.white};
`;
const RelatedInfo = styled.div``;

export default ({ detail, loading, error }) => (
    <Container>
        {loading ? (
            'Loading'
        ) : (
            <>
                <PostContainer>
                    <ImageBox>
                        <Image bgUrl={detail.post.images[0]} />
                    </ImageBox>
                    <PostBox>
                        <InstagramInfo>
                            <Profile bgUrl={detail.post.images[0]} />
                            <Nickname>{detail.instagram.id}</Nickname>
                            <Line />
                        </InstagramInfo>
                        <PostInfo>
                            <LikeContainer>
                                Likes:1236
                                <LikeButton name="like">❤</LikeButton>
                            </LikeContainer>
                            <TagContainer>Tags</TagContainer>
                        </PostInfo>
                    </PostBox>
                </PostContainer>
                <RealtedContainer>
                    Related
                    <RelatedInfo />
                </RealtedContainer>
            </>
        )}
    </Container>
);
