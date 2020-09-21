import React from 'react'
import styled from 'styled-components';

const Styled = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        position: fixed;
        top: 20px;
        text-align: center;
        font-family: ${(props => props.theme.font1)};
        background-color: ${(props => props.theme.first)};
        color: ${(props => props.theme.second)}; 
        font-size: 30px;
        font-weight: 200;
        border: 3px solid ${(props => props.theme.second)}; 
        padding: 5px 15px;
        z-index: 1000;
    }
`

const Logo = () => {
    return (
        <Styled>
            <h1 className="logo">Little Tap</h1>
        </Styled>
    )
}

export default Logo;
