import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '../../Component/Grid';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
`;
const SLink = styled(Link)`
    display: block;
    width: 100%;
`;
const Post = styled.img`
    width: 100%;
`;

const TagPresent = ({ name, page, pics, results, endOfResults, loading }) => (
    <Container>
        <Grid title={`tag : ${name}`}>
            {loading ? (
                <></>
            ) : (
                results.posts.map(elem => (
                    <SLink key={elem._id} to={`/post/${elem._id}`}>
                        <Post key={elem._id} src={elem.images[0]} />
                    </SLink>
                ))
            )}
        </Grid>
    </Container>
);

export default withRouter(TagPresent);
