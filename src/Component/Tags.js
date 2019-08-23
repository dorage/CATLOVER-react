import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    display: flex;
    color: ${cssVar.white};
    flex-wrap: wrap;
`;
const Tag = styled.div`
    background-color: ${cssVar.black};
    color: ${cssVar.white};
    box-shadow: 1px 2px ${cssVar.white};
    margin: 5px;
    border: solid 1px;
    border-radius: 10px;
    padding: 5px 10px;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    :hover {
        background-color: ${cssVar.black};
        color: ${cssVar.purple};
        box-shadow: 1px 2px ${cssVar.purple};
    }
`;

export default props => {
    const { tags } = props;
    return (
        <Container>
            {tags.map(({ _id, name }) => (
                <Tag key={_id}>{name}</Tag>
            ))}
        </Container>
    );
};
