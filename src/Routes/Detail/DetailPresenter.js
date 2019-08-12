import React from 'react';
import styled from 'styled-components';
import ImageViewer from '../../Component/ImageViewer';
import { cssVar } from '../../vars';
import Ranking from '../../Component/Ranking';

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
const ProfileLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
`;
const Profile = styled.div`
    background: url(${props => props.bgUrl});
    background-position: center;
    background-size: contain;
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;
const Nickname = styled.a`
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

export default ({ results, loading, error }) => (
    <Container>
        {loading ? (
            'Loading'
        ) : (
            <>
                <PostContainer>
                    <ImageBox>
                        <ImageViewer post={results.post} />
                    </ImageBox>
                    <PostBox>
                        <InstagramInfo>
                            <Profile bgUrl={results.post.images[0]}>
                                <ProfileLink
                                    href={`http://localhost:3000/girl/${results.girl._id}`}
                                />
                            </Profile>
                            <Nickname
                                href={`http://localhost:3000/girl/${results.girl._id}`}
                            >
                                {results.instagram.id}
                            </Nickname>
                            <Line />
                        </InstagramInfo>
                        <PostInfo>
                            <LikeContainer>
                                Likes : {results.post.like}
                                <LikeButton name="like">❤</LikeButton>
                            </LikeContainer>
                            <TagContainer>Tags</TagContainer>
                        </PostInfo>
                    </PostBox>
                </PostContainer>
                <RealtedContainer>
                    Related
                    <RelatedInfo />
                    <Ranking />
                </RealtedContainer>
            </>
        )}
    </Container>
);
