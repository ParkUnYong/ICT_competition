import React from 'react';
import styled from 'styled-components';

export const Header = styled.section`
    width : 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    &::before{
        content:'';
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        max-width: 100%;
        max-height: 100%;
        min-height: 40px;
        display: inline-block;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        transform: scaleX(1.5);
        background-position: right top;
        background-size : 100vw 200px;
        background-color: #282c34;
    }
`

export const MainHader = styled.div`
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 100%;
    max-height: 1000px;
    background-color: transparent;
    
`