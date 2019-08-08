import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.div`
    background-image: url(${props => props.src});
    height: 300px;
    width: auto;
    background-position: center center;
    background-size: cover;
`;

const Link = styled.a`
    width: 100%;
    height: 100%;
`;

const Poster = ({ id, src }) => (
    <Container>
        <Link href={`http://localhost:3000/post/${id}`}>
            <Image src={src} />
        </Link>
    </Container>
);

export default Poster;
