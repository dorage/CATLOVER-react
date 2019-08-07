import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const height = 40;

const Container = styled.div`
    position: relative;
    bottom: ${cssVar.headerH};
    height: ${cssVar.headerH}px;
    background-color: ${cssVar.black};
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    z-index: 10;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: ${cssVar.gold};
`;

const List = styled.ul``;

const Item = styled.li``;

const UserMenu = styled.div`
    display: flex;
    text-align: center;
    height: ${height}px;
`;

const UserItem = styled.span`
    display: block;
    width: 50px;
    color: ${cssVar.gold};
    height: ${height}px;
    line-height: ${height}px;
    margin-right: 20px;
`;

const Header = () => (
    <Container>
        <List>
            <Item />
        </List>
        <UserMenu>
            <UserItem>login</UserItem>
            <UserItem>signup</UserItem>
        </UserMenu>
    </Container>
);

export default Header;
