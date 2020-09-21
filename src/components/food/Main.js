import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import brunch from '../../images/brunch.jpg'
import lunch from '../../images/lunch.jpg'
import main from '../../images/main.jpg'


const Styled = styled.div`
    height: 200vh;
    background-color: ${props => props.theme.first};
    padding: 20px;

    .menus{
        height: 110vh;
        width: 100%;
        display: grid;
        grid-template-columns: 10px 1fr 1fr 1fr 10px;
        grid-template-rows: 40% 60%;
        grid-template-areas: 
            ". text text text ."
            ". brunch lunch main .";
        gap: 10px 10px;
    }
    .text{
        grid-area: text;
        padding: 0 15vw;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    h1{
        color: ${props => props.theme.second};
        font-family: ${props => props.theme.font2};
        font-size: 44px;
    }
    p{
        color: ${props => props.theme.second};
        font-family: ${props => props.theme.font3};
        font-size: 14px;
    }
    .brunch, .lunch, .main{
        background-color: ${props => props.theme.second};
        height: 30vw;
        width: 30vw;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        border-radius: 5px;
    }
    .brunch::after, .lunch::after, .main::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.second};
        opacity: 0.5;
        border-radius: 5px;
    }
    .brunch{
        grid-area: brunch;
        background: url(${brunch}) center center;
        background-size: cover; 
    }
    .lunch{
        grid-area: lunch;
        background: url(${lunch}) center center;
        background-size: cover; 
    }
    .main{
        grid-area: main;
        background: url(${main}) center center;
        background-size: cover; 
    }
    h2{
        color: ${props => props.theme.first};
        font-family: ${props => props.theme.font2};
        position: relative;
        z-index: 1;
    }
`

const Main = () => {
    return (
        <Styled>
            <div className="menus">
                <div className="text">
                    <h1>MENUS</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="brunch">
                    <h2>BRUNCH</h2>
                </div>
                <div className="lunch">
                    <h2>LUNCH</h2>
                </div>
                <div className="main">
                    <h2>MAIN</h2>
                </div>
            </div>
            <div className="suppliers">

            </div>
        </Styled>
    )
};

export default Main;
