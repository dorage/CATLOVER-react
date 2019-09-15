import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Splash from '../../Component/Splash';

const Container = styled.div``;
const Section = styled.div`
    color: white;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
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

const GalleryPresenter = ({ todayPick, tags, loading, error }) => {
    return (
        <Container>
            <Splash loading={loading} tags={tags} />
            <Section>Today Pick</Section>
            <Grid>
                {loading
                    ? ''
                    : todayPick.map(elem => (
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
    );
};

export default withRouter(GalleryPresenter);
