import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styled = styled.div`
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;  
    }
    .home-box{
        position: fixed;
        top: 20px;
        left: 20px;
        height: 50px;
        width: 50px;
        background-color: ${(props => props.theme.first)};
        color: ${(props => props.theme.second)};
        border: ${(props => props.theme.second)} 3px solid;
        font-family: ${(props => props.theme.font1)};
        font-size: 30px;
        font-weight: 200;
    }
    .home-rectangle{
        position: fixed;
        top: 20px;
        left: 70px;
        height: 50px;
        width: 100px;
        background-color: ${(props => props.theme.second)};
        color: ${(props => props.theme.first)};
        font-family: ${(props => props.theme.font2)};
        font-size: 22px;
    }
`

const HomeButton = () => {
    return (
        <Styled>
            <Link to="/">
                <div className="home-box">LT</div>
                <div className="home-rectangle">Home</div>
            </Link>
        </Styled>
    )
};

export default HomeButton;
