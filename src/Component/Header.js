import React from 'react';
import styled from 'styled-components';
import { cssVar, Assets } from '../vars';
import SignInModal from './Modals/SigninModal';
import AuthContext from './AuthContext';

const Container = styled.div`
    position: relative;
    bottom: ${cssVar.headerH};
    height: ${cssVar.headerH};
    background-color: ${cssVar.black};
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    z-index: 10;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: ${cssVar.gold};
`;

const Link = styled.a`
    margin-left: 30px;
`;
const Home = styled.div`
    background: url(${Assets.imgHottieLogo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: ${cssVar.headerH};
    color: white;
`;

const Greeting = styled.div`
    color: ${cssVar.white};
    height: 100%;
`;
const Name = styled.div`
    color: ${cssVar.gold};
    height: 100%;
`;

const SignInOutButton = styled.button`
    display: flex;
    background-color: ${cssVar.black};
    height: 100%;
    border: none;
    color: ${cssVar.white};
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 50px;
    font-size: 18px;
    font-weight: 600;
    :hover {
        background-color: ${cssVar.purple};
    }
`;

const SignInButton = props => {
    const { showModal } = props;
    return <SignInOutButton onClick={showModal}>Sign In</SignInOutButton>;
};

const Header = () => (
    <Container>
        <AuthContext.AuthConsumer>
            {({ state, actions }) =>
                state.user.id ? (
                    <SignInOutButton onClick={actions.onSignOut}>
                        Hello, {state.user.name}!
                        <br />
                        Sign Out
                    </SignInOutButton>
                ) : (
                    <SignInModal
                        signIn={modalActions => (
                            <SignInButton {...modalActions} />
                        )}
                    />
                )
            }
        </AuthContext.AuthConsumer>
        <Link href="/">
            <Home />
        </Link>
    </Container>
);

export default Header;
