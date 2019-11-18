import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    @media (min-width: 320px) and (max-width: 1024px) {
        padding-top: 50px;
    }
    @media (min-width: 1025px) {
    }
    color: white;
`;
const GridTitle = styled.div`
    @media (min-width: 320px) and (max-width: 1024px) {
        font-size: 30px;
        text-align: center;
        font-weight: 600;
        margin-bottom: ${cssVar.headerH};
    }
    @media (min-width: 1025px) {
        font-size: 50px;
        font-weight: 600;
        margin-bottom: ${cssVar.headerH};
    }
`;

const GridBody = styled.div`
    display: grid;
    width: 100%;

    @media (min-width: 320px) and (max-width: 1024px) {
        grid-template-columns: auto;
        grid-row-gap: 30px;
    }
    @media (min-width: 1025px) {
        grid-template-columns: auto auto auto auto auto;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        grid-column-start: 1;
        grid-column-end: 5;
    }
`;

const Grid = props => {
    const { title, children } = props;
    return (
        <Container>
            <GridTitle>{title}</GridTitle>
            <GridBody>{children}</GridBody>
        </Container>
    );
};

export default Grid;
