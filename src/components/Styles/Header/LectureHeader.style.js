import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    z-index: 1;
    align-items: center;
    max-width: 1000px;
    max-height: 500px;
    background-color: transparent;
`

export const TitleTmi = styled.div`
    color : red;
    align-items: center;
`


export const Content = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    color: white;
    background: rgb(0,0,0);
    background: rgb(0,0,0,0.8);
    width: 100%;
    height: 100%;
    padding: 20px;
`
export const HeaderImage = styled.img`
    vertical-align: middle;
    width : 100%;
    height: 600px;
`

export const ContentH2 = styled.h2`
    font-size: 5rem;
    font-family: 'Courier New', Courier, monospace;
` 