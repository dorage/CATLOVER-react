import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import InstaLink from '../../Component/InstaLink';
import LikeButton from '../../Component/LikeButton';
import Tags from '../../Component/Tags';
import { cssVar } from '../../vars';
import Grid from '../../Component/Grid';

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
`;
const Profile = styled.div`
    background: url(${props => props.bgUrl});
    background-color: ${cssVar.purple};
    background-position: center;
    background-size: contain;
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 200px;
        height: 200px;
    }
    @media (min-width: 1025px) {
        width: 150px;
        height: 150px;
    }
    border-radius: 50%;
    margin: 30px;
`;
const Nickname = styled.div`
    text-decoration: none;
    color: ${cssVar.white};
    @media (min-width: 320px) and (max-width: 1024px) {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        margin: 30px;
    }
    @media (min-width: 1025px) {
        font-size: 48px;
        font-weight: 700;
        margin: 30px;
    }
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
                    <Tags tags={results.girl.tags} />
                </ProfileContainer>
                <Grid title="Posts">
                    {loading
                        ? ''
                        : results.post.map(elem => (
                              <SLink key={elem._id} to={`/post/${elem._id}`}>
                                  <Post
                                      key={elem._id}
                                      id={elem._id}
                                      src={elem.images[0]}
                                  />
                              </SLink>
                          ))}
                </Grid>
            </Container>
        )}
    </Container>
);

export default withRouter(GirlPresenter);
