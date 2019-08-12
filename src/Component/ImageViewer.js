import React, { useState } from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const MainContainer = styled.div`
    width: 100%;
    height: 80%;
    padding: 10px;
`;

const MainImage = styled.div`
    background-image: url(${props => props.image});
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const SubContainer = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
`;

const SubImage = styled.div`
    background-image: url(${props => props.image});
    background-size: contain;
    width: 10%;
    height: auto;
    background-repeat: no-repeat;
    background-position: center;
    margin: 10px;
    outline: ${props =>
        props.index === props.selection ? 'solid 2px' : 'none'};
    outline-color: ${cssVar.gold};
    cursor: pointer;
`;

export default ({ post }) => {
    const [selection, setSelection] = useState(0);

    return (
        <Container>
            <MainContainer>
                <MainImage image={post.images[selection]} />
            </MainContainer>
            <SubContainer>
                {post.images.map((image, index) => (
                    <SubImage
                        key={image}
                        image={image}
                        selection={selection}
                        index={index}
                        onClick={() => setSelection(index)}
                    />
                ))}
            </SubContainer>
        </Container>
    );
};
