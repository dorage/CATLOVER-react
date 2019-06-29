import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    width: 100%;
`;
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
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 10px;
`;

const Gallery = ({ children }) => (
    <Container>
        <Section>Recommended For You</Section>
        <Grid>{children}</Grid>
    </Container>
);

export default Gallery;
