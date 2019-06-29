import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.div`
    background-image: url(${props => props.src});
    height: 400px;
    width: auto;
    background-position: center center;
    background-size: cover;
    margin: 20px;
`;

const Poster = ({ src }) => (
    <Container>
        <Image src={src} />
    </Container>
);

export default Poster;
