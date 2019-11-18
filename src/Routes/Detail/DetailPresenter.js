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
    @media (min-width: 320px) and (max-width: 1024px) {
        height: 900px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 1025px) {
        height: 600px;
        border-color: ${cssVar.gold};
    }
`;
const ImageBox = styled.div`
    height: 100%;
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin-bottom: 50px;
    }
    @media (min-width: 1025px) {
        width: 50%;
        padding: 20px;
    }
`;
const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 1025px) {
        width: 50%;
    }
`;
const InstagramInfo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const Profile = styled.div`
    background: url(${props => props.bgUrl});
    background-position: center;
    background-size: contain;
    width: 150px;
    height: 150px;
    border-radius: 50%;

    @media (min-width: 320px) and (max-width: 1024px) {
        margin-bottom: 20px;
    }
`;
const SLINK = styled(Link)`
    text-decoration: none;
`;
const Nickname = styled.p`
    display: inline-block;
    color: ${cssVar.white};
    font-weight: 700;

    @media (min-width: 320px) and (max-width: 1024px) {
        font-size: 20px;
    }
    @media (min-width: 1025px) {
        font-size: 30px;
    }
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
                            <SLINK to={`/cat/${results.girl._id}`}>
                                <Profile bgUrl={results.instagram.profile} />
                            </SLINK>
                            <SLINK to={`/cat/${results.girl._id}`}>
                                <Nickname>{results.girl.name}</Nickname>
                            </SLINK>
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
