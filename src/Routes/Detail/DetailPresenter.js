import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../../vars';

const Container = styled.div``;
const PostContainer = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    border: solid 1px;
    border-color: ${cssVar.gold};
    margin-bottom: 20px;
    padding: 20px;
`;
const ImageBox = styled.div`
    width: 50%;
    height: 100%;
    background-color: blue;
`;
const Image = styled.div`
    background-image: url('');
`;
const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
`;
const InstagramInfo = styled.div`
    width: 100%;
    height: 50%;
    background-color: orange;
`;
const PostInfo = styled.div`
    width: 100%;
    height: 50%;
    background-color: green;
`;
const RealtedContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: bisque;
`;
const RelatedInfo = styled.div``;

export default ({ detail, loading, error }) => (
    <Container>
        <PostContainer>
            <ImageBox />
            <PostBox>
                <InstagramInfo />
                <PostInfo />
            </PostBox>
        </PostContainer>
        <RealtedContainer>
            Related
            <RelatedInfo />
        </RealtedContainer>
    </Container>
);
