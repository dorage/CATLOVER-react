import React from 'react';
import styled from 'styled-components';
import Header from './Component/Header';
import GlobalStyles from './Component/GlobalStyles';
import Router from './Component/Router';
import Footer from './Component/Footer';
import AuthContext from './Component/AuthContext';

const Container = styled.div`
    padding: 50px;
`;

const App = () => {
    return (
        <AuthContext.AuthProvider>
            <GlobalStyles />
            <Header />
            <Container>
                <Router />
            </Container>
            <Footer />
        </AuthContext.AuthProvider>
    );
};

export default App;
