import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
import Router from './Router';
import Footer from './Footer';
import AuthContext from './AuthContext';

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
