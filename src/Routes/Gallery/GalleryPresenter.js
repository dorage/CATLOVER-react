import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Splash from '../../Component/Splash';
import Grid from '../../Component/Grid';
import ScrollToTop from '../../Component/ScrollToTop';

const Container = styled.div``;
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
            <Grid title="Today Pick">
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
