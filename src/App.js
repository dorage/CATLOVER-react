import React from 'react';
import styled from 'styled-components';
import Header from './Component/Header';
import GlobalStyles from './Component/GlobalStyles';
import Router from './Component/Router';
import Footer from './Component/Footer';
import AuthContext from './Component/AuthContext';
import ScrollToTop from './Component/ScrollToTop';

const Container = styled.div`
    @media (min-width: 320px) and (max-width: 1024px) {
        padding: 20px;
    }
    @media (min-width: 1025px) {
        padding: 50px;
    }
`;

const App = () => {
    return (
        <AuthContext.AuthProvider>
            <GlobalStyles />
            <Header />
            <Container>
                <Router />
                <ScrollToTop />
            </Container>
            <Footer />
        </AuthContext.AuthProvider>
    );
};

export default App;
