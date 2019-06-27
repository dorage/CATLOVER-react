import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
import Splash from './Splash';
import Gallery from './Gallery';
import Poster from './Poster';
import TestDB from '../db';

const A = styled.div`
    height: 10000px;
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Splash />
            <Gallery>
                {TestDB.imgs.map(src => (
                    <Poster src={src} />
                ))}
            </Gallery>
            <A />
        </>
    );
};

export default App;
