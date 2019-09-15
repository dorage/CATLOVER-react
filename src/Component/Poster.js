import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.div`
    background-image: url(${props => props.src});
    height: 300px;
    width: auto;
    background-position: center center;
    background-size: cover;
`;

const SLink = styled(Link)`
    width: 100%;
    height: 100%;
`;

const Poster = ({ id, src }) => (
    <Container>
        <SLink to={`/post/${id}`}>
            <Image src={src} />
        </SLink>
    </Container>
);

export default withRouter(Poster);
