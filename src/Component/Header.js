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
    @media (min-width: 320px) and (max-width: 1024px) {
        margin-left: 20px;
    }
    @media (min-width: 1025px) {
        margin-left: 30px;
    }
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

const SignInOutButton = styled.button`
    display: flex;
    background-color: ${cssVar.black};
    height: 100%;
    border: none;
    color: ${cssVar.white};
    cursor: pointer;
    :hover {
        background-color: ${cssVar.purple};
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 14px;
    }
    @media (min-width: 1025px) {
        padding-left: 20px;
        padding-right: 20px;
        margin-right: 50px;
        font-size: 18px;
        font-weight: 600;
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
                state.user.name ? (
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
                        socket={state.socket}
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
