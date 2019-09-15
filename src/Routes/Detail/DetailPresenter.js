import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ImageViewer from '../../Component/ImageViewer';
import LikeButton from '../../Component/LikeButton';
import InstaLink from '../../Component/InstaLink';
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;
const ProfileLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
`;
const Nickname = styled(Link)`
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

const DetailPresenter = ({ id, results, loading, error }) => (
    <Container>
        {loading ? (
            'Loading'
        ) : (
            <>
                <PostContainer>
                    <ImageBox>
                        <InstaLink link={results.post.link} />
                        <ImageViewer post={results.post} />
                    </ImageBox>
                    <PostBox>
                        <InstagramInfo>
                            <Profile bgUrl={results.instagram.profile}>
                                <ProfileLink
                                    href={`http://localhost:3000/girl/${results.girl._id}`}
                                />
                            </Profile>
                            <Nickname to={`/girl/${results.girl._id}`}>
                                {results.girl.name}
                            </Nickname>
                            <Line />
                        </InstagramInfo>
                        <PostInfo>
                            <LikeButton type="post" id={id} />
                            <Tags tags={results.girl.tags} />
                        </PostInfo>
                    </PostBox>
                </PostContainer>
            </>
        )}
    </Container>
);

export default withRouter(DetailPresenter);
