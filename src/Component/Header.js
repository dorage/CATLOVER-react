import React from 'react';
import styled from 'styled-components';
import { cssVar } from '../vars';

const height = 30;

const Container = styled.div`
    position: fixed;
    background-color: ${cssVar.bgColor0};
    width: 100%;
    height: ${height}px;
    display: flex;
    flex-direction: row-reverse;
    z-index: 10;
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
    color: white;
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
