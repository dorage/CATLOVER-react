import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { cssVar } from '../../vars';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
`;

const TagName = styled.div`
    width: 100%;
    font-size: 70px;
    font-weight: 700;
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

const TagPresent = ({ name, page, pics, results, endOfResults, loading }) => (
    <Container>
        <TagName>tag : {name}</TagName>
        <Grid>
            {loading ? (
                <></>
            ) : (
                results.posts.map(element => (
                    <SLink to={`/post/${element._id}`}>
                        <Post src={element.images[0]} />
                    </SLink>
                ))
            )}
        </Grid>
    </Container>
);

export default withRouter(TagPresent);
