import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 20px;
    align-items: center;
    color: white;
`;
const LikeButton = styled.button`
    margin: 20px;
    width: 60px;
    height: 40px;
    font-size: 20px;
    color: white;
    background-color: ${cssVar.black};
    box-shadow: 1px 2px ${cssVar.white};
    color: ${cssVar.white};
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

export default props => {
    const { like, setLike } = props;
    return (
        <Container>
            ❤ {like || 0}
            <LikeButton onClick={setLike}>❤</LikeButton>
        </Container>
    );
};
