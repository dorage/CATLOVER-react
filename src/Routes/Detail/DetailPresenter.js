import React from 'react';
import styled from 'styled-components';
import ImageViewer from '../../Component/ImageViewer';
import LikeButton from '../../Component/LikeButton';
import Tags from '../../Component/Tags';
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
const ProfileLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
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
const TagContainer = styled.div`
    display: flex;
    color: ${cssVar.white};
`;
const Tag = styled.div`
    background-color: ${cssVar.black};
    color: ${cssVar.white};
    box-shadow: 1px 2px ${cssVar.white};
    margin: 5px;
    border: solid 1px;
    border-radius: 10px;
    padding: 5px 10px;
    max-width: 110px;
    :hover {
        background-color: ${cssVar.black};
        color: ${cssVar.purple};
        box-shadow: 1px 2px ${cssVar.purple};
    }
`;
const RealtedContainer = styled.div`
    width: 100%;
    height: 50%;
    font-size: 30px;
    font-weight: 600;
    margin-top: ${cssVar.headerH};
    color: ${cssVar.white};
    display: flex;
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
                            <LikeButton like={results.post.like} />
                            <Tags tags={results.girl.tags} />
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
