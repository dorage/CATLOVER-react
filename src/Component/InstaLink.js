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
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;
const InstagramLink = styled.div``;
const Link = styled.a`
    display: inline-block;
    line-height: 25px;
    text-decoration: solid;
    color: grey;
    @media (min-width: 320px) and (max-width: 1024px) {
        font-size: 14px;
    }
    @media (min-width: 1025px) {
        font-size: 20px;
    }
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
