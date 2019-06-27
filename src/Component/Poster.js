import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.div`
    background-image: url(${props => props.src});
    width: 300px;
    height: 300px;
    background-position: center center;
    background-size: cover;
`;

const Poster = ({ src }) => (
    <Container>
        <Image src={src} />
    </Container>
);

export default Poster;
