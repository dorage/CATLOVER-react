import React from 'react';
import styled from 'styled-components';
import { Assets, cssVar } from '../vars';

const Container = styled.div`
    display: flex;
    color: ${cssVar.charcoal};
`;
const Instagram = styled.div`
    background: url(${Assets.imgInstagramIcon});
    background-position: center;
    background-size: contain;
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;
const InstagramLink = styled.div``;
const Link = styled.a`
    display: inline-block;
    line-height: 25px;
    font-size: 20px;
    text-decoration: solid;
    color: grey;
`;

export default props => {
    const { mark, link } = props;
    return (
        <Container>
            <Instagram />
            <InstagramLink>
                <Link href={`http://www.instagram.com/${link}`}>
                    {mark ? `${mark || ''}${link}` : `${link}`}
                </Link>
            </InstagramLink>
        </Container>
    );
};
