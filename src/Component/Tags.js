import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
    }
`;
const TagContainer = styled.div`
    display: flex;
    color: ${cssVar.white};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
const SLink = styled(Link)`
    text-decoration: none;
`;
const Tag = styled.div`
    background-color: ${cssVar.charcoal};
    color: ${cssVar.white};
    margin: 5px;
    border: solid 1px;
    border-radius: 5px;
    box-shadow: 1px 2px ${cssVar.white};
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

const Tags = props => {
    const { tags } = props;
    return (
        <Container>
            <TagContainer>
                {tags ? (
                    tags.map(({ _id, name }) => (
                        <SLink key={`link-${_id}`} to={`/tag/${name}`}>
                            <Tag key={`tag-${_id}`}>{name}</Tag>
                        </SLink>
                    ))
                ) : (
                    <></>
                )}
            </TagContainer>
        </Container>
    );
};

export default withRouter(Tags);
