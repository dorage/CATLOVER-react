import React from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import OAuth from './OAuth';
import { API_URL } from '../config';

const socket = io(API_URL);

const FBLogin = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <OAuth provider="google" key="google" socket={socket} />
            </div>
        </div>
    );
};

export default FBLogin;
