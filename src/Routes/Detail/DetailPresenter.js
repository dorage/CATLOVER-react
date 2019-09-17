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
const SLINK = styled(Link)`
    text-decoration: none;
`;
const Nickname = styled.p`
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
                            <SLINK to={`/cat/${results.girl._id}`}>
                                <Profile bgUrl={results.instagram.profile} />
                            </SLINK>
                            <SLINK to={`/cat/${results.girl._id}`}>
                                <Nickname>{results.girl.name}</Nickname>
                            </SLINK>
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
