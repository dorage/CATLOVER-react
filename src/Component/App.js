import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
import Splash from './Splash';
import Gallery from './Gallery';
import Poster from './Poster';
import TestDB from '../db';
import Footer from './Footer';

const Container = styled.div`
    padding: 50px;
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Container>
                <Splash />
                <Gallery>
                    {TestDB.imgs2.map(src => (
                        <Poster src={src} />
                    ))}
                </Gallery>
            </Container>
            <Footer />
        </>
    );
};

export default App;
