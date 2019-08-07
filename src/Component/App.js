import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
import Splash from './Splash';
import Gallery from '../Routes/Gallery';
import Router from './Router';
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
                <Router />
            </Container>
            <Footer />
        </>
    );
};

export default App;
