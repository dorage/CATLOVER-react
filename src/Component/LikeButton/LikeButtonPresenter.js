import React from 'react';
import styled from 'styled-components';
import GoogleAuth from '../GoogleAuth';
import { cssVar } from '../../vars';

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
    color: ${props => (props.isLike ? cssVar.purple : cssVar.white)};
    background-color: ${cssVar.black};
    box-shadow: 1px 2px
        ${props => (props.isLike ? cssVar.purple : cssVar.white)};
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

const LoginLikeButton = renderProps => (
    <Container onClick={renderProps.onClick} disabled={renderProps.disabled}>
        <LikeButton>❤</LikeButton>
    </Container>
);

export default ({ like, tokenId, isLike, setLike }) => {
    return (
        <Container>
            <LikeCounter>❤ {like || 0}</LikeCounter>
            {tokenId ? (
                <LikeButton onClick={setLike} isLike={isLike}>
                    ❤
                </LikeButton>
            ) : (
                <GoogleAuth renderer={LoginLikeButton} />
            )}
        </Container>
    );
};
