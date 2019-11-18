import React, { useEffect } from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const Container = styled.div``;

const ToTop = styled.button`
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 90;
    border: solid 1px;
    border-radius: 5px;
    box-shadow: 1px 2px ${cssVar.white};
    background-color: ${cssVar.charcoal};
    color: white;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 50px;
        height: 50px;
        font-size: 30px;
        :active {
            background-color: ${cssVar.black};
            color: ${cssVar.purple};
            box-shadow: 1px 2px ${cssVar.purple};
        }
    }
    @media (min-width: 1025px) {
        width: 70px;
        height: 70px;
        font-size: 40px;
        :hover {
            background-color: ${cssVar.black};
            color: ${cssVar.purple};
            box-shadow: 1px 2px ${cssVar.purple};
        }
    }
`;

const ScrollToTop = () => {
    const scrollListener = () => {
        if (
            document.body.scrollTop > 1000 ||
            document.documentElement.scrollTop > 1000
        ) {
            document.getElementById('totop').style.display = 'block';
        } else {
            document.getElementById('totop').style.display = 'none';
        }
    };
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollListener);
    });

    return (
        <Container>
            <ToTop id="totop" onClick={scrollToTop}>
                ▴
            </ToTop>
        </Container>
    );
};

export default ScrollToTop;
