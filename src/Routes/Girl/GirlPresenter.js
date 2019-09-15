import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import InstaLink from '../../Component/InstaLink';
import LikeButton from '../../Component/LikeButton';
import Tags from '../../Component/Tags';
import { cssVar } from '../../vars';

const Container = styled.div`
    color: ${cssVar.white};
    display: flex;
    flex-direction: column;
`;
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;
const Profile = styled.div`
    background: url(${props => props.bgUrl});
    background-color: ${cssVar.purple};
    background-position: center;
    background-size: contain;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 30px;
`;
const Nickname = styled.div`
    text-decoration: none;
    color: ${cssVar.white};
    font-size: 48px;
    font-weight: 700;
    margin: 30px;
`;

const PostContainer = styled.div``;
const ContainerHeader = styled.div`
    font-size: 50px;
    font-weight: 600;
    margin-bottom: ${cssVar.headerH};
`;

const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: auto auto auto auto auto;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-column-start: 1;
    grid-column-end: 5;
`;
const SLink = styled(Link)`
    display: block;
    width: 100%;
`;
const Post = styled.img`
    width: 100%;
`;

const GirlPresenter = ({ id, results, loading, error }) => (
    <Container>
        {loading ? (
            <></>
        ) : (
            <Container>
                <InstaLink mark="@" link={results.instagram[0].id} />
                <ProfileContainer>
                    <Profile bgUrl={results.instagram[0].profile} />
                    <Nickname>{results.girl.name}</Nickname>
                    <LikeButton type="girl" id={id} />
                    <Tags tags={results.girl.tags.tags} />
                </ProfileContainer>
                <PostContainer>
                    <ContainerHeader>Post</ContainerHeader>
                    <Grid>
                        {loading
                            ? ''
                            : results.post.map(elem => (
                                  <SLink
                                      key={elem._id}
                                      to={`/post/${elem._id}`}
                                  >
                                      <Post
                                          key={elem._id}
                                          id={elem._id}
                                          src={elem.images[0]}
                                      />
                                  </SLink>
                              ))}
                    </Grid>
                </PostContainer>
            </Container>
        )}
    </Container>
);

export default withRouter(GirlPresenter);
