import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    position: absolute;
    top: 430px;
    width: 100%;
`;
const Section = styled.div``;
const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 30px;
`;

const Gallery = ({ children }) => (
    <Container>
        <Section>Recommended For You</Section>
        <Grid>{children}</Grid>
    </Container>
);

export default Gallery;
