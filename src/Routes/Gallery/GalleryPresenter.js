import React from 'react';
import styled from 'styled-components';
import Splash from '../../Component/Splash';
import Poster from '../../Component/Poster';

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
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 10px;
`;

export default ({ top20, loading, error }) => {
    return (
        <Container>
            <Splash />
            <Section>Recommended For You</Section>
            <Grid>
                {loading
                    ? ''
                    : top20.map(elem => (
                        <Poster key={elem._id} src={elem.images[0]} />
                    ))}
            </Grid>
        </Container>
    );
};
