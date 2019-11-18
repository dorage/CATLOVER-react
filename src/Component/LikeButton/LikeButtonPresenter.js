import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../../vars';
import SignInModal from '../Modals/SigninModal';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 20px;
    align-items: center;
    color: white;
`;
const LikeCounter = styled.div``;
const LikeButton = styled.button`
    margin: 20px;
    width: 60px;
    height: 40px;
    font-size: 20px;
    color: ${props => (props.isLike ? cssVar.gold : cssVar.white)};
    background-color: ${cssVar.black};
    box-shadow: 1px 2px ${props => (props.isLike ? cssVar.gold : cssVar.white)};
    border: solid 1px;
    cursor: pointer;
    :hover {
        color: ${cssVar.purple};
        border-color: ${cssVar.purple};
        box-shadow: 1px 2px ${cssVar.purple};
    }
    :focus {
        outline: none;
    }
`;

const SignInLikeButton = props => {
    const { showModal } = props;
    return <LikeButton onClick={showModal}>❤</LikeButton>;
};

export default ({ like, isLike, user, setLike }) => {
    return (
        <Container>
            <LikeCounter>❤ {like || 0}</LikeCounter>
            <>
                {user.id ? (
                    <LikeButton onClick={setLike} isLike={isLike}>
                        ❤
                    </LikeButton>
                ) : (
                    <SignInModal
                        signIn={modalActions => (
                            <SignInLikeButton {...modalActions} />
                        )}
                    />
                )}
            </>
        </Container>
    );
};
