import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import brunch from '../../images/brunch.jpg';
import lunch from '../../images/lunch.jpg';
import main from '../../images/main.jpg';



const Styled = styled.div`
    background-color: ${props => props.theme.first};
    padding: 20px;

    .intro{
        padding: 80px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .reveal{
        font-family: ${props => props.theme.font2};
        color: ${props => props.theme.second};
        font-size: 36px;
        position: relative;
        padding: 2px 15px;
        transform-origin: left;
        transform: scaleX(1);
        transition: 0.5s;
        margin-bottom: 25px;
    }
    .reveal.active{
        transform: scaleX(1);
    }
    .reveal.active:before{
        transform: scaleX(0);
    }
    .reveal:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.second};
        transform-origin: right;
        transition: 0.5s;
    }
    .text{
        color: ${props => props.theme.second};
        font-family: ${props => props.theme.font3};
        font-size: 14px;
        margin: 0 15vw;
        text-align: center;
        opacity: 0;
        transition: 1.2s;
    }
    .text.active{
        opacity: 1;
    }

    .menus{
        padding: 80px 0;
        width: 100%;
        display: grid;
        grid-template-columns: 10px 1fr 1fr 1fr 10px;
        grid-template-rows: 1fr;
        grid-template-areas: 
            ". brunch lunch main .";
        gap: 20px 20px;
        align-items: center;
        justify-content: center;
    }
    .menu{
        justify-self: center;
        background-color: ${props => props.theme.second};
        height: 30vw;
        max-height: 350px;
        width: 30vw;
        max-width: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
    }
    .menu:hover{
        transform: scale(1.05, 1.05)
    }
    .menu::after{
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
    .menu:hover::after{
        opacity: 0;
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
    .suppliers{
        min-height: 80vh;
        padding: 100px 0;
        width: 100%;
        position: relative;
        .horizontals{
            height: 20px;
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: absolute;
            top: 100px;
            left: 50px;
            @media screen and (max-width: 950px){
                left: 50px;
            }
            @media screen and (max-width: 500px){
                top: 65px;
                left: 10px;
            }
            .hz-line1, .hz-line2{
                width: auto;
                border: 2px solid ${props => props.theme.second};
            }
            .hz-line2{
                margin-right:20px;
            }
        }
        .verticals{
            width: 20px;
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 50px;
            left: 100px;
            @media screen and (max-width: 950px){
                left: 50px;
            }
            @media screen and (max-width: 500px){
                left: 25px;
            }
            .vr-line1{
                height: 370px;
                border: 2px solid ${props => props.theme.second};
            }
            .vr-line2{
                height: 350px;
                border: 2px solid ${props => props.theme.second};
            }

        }
        h1{
            position: absolute;
            top: 160px;
            left: 140px;
            @media screen and (max-width: 950px){
                top: 120px;
                left: 100px;
            }
            @media screen and (max-width: 500px){
                top: 100px;
                left: 70px;
            }
        }
        #s-text{
            position: absolute;
            top: 230px;
            left: 150px;
            width: 40%;
            text-align: left;
            margin: 0 0 200px 0;
            @media screen and (max-width: 950px){
                width: 50%;
                left: 70px
            }
            @media screen and (max-width: 500px){
                width: 80%;
                top: 170px;
                left: 60px;
            }
            ul{
                margin-left: 40px;
                margin-top: 20px;
                list-style: none;
            }
        }
    }

`

const Main = () => {

    let title = useRef(null);
    let supplierTitle = useRef(null);
    let menuText = useRef(null);
    let supplierText = useRef(null);

    useEffect(() => {

        gsap.to(title, {
            scrollTrigger:{
              trigger: title,
              start: 'top 90%',
              end: 'top 10%',
              toggleClass: 'active',
              markers: true
            }
        })
        gsap.to(supplierTitle, {
            scrollTrigger:{
              trigger: supplierTitle,
              start: 'top 90%',
              end: 'top 10%',
              toggleClass: 'active',
              markers: true
            }
        })
        gsap.to(menuText, {
            scrollTrigger:{
              trigger: menuText,
              start: 'top 85%',
              end: 'top 0%',
              toggleClass: 'active',
              markers: true
            }
        })
        gsap.to(supplierText, {
            scrollTrigger:{
              trigger: supplierText,
              start: 'top 85%',
              end: 'top 0%',
              toggleClass: 'active',
              markers: true
            }
        })
    })

    return (
        <Styled>
            <div className="intro">
                <h1 className="reveal" ref={el => title = el}>MENU'S</h1>
                <p className="text" ref={el => menuText = el}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>

            <div className="menus">
                <div className="menu brunch">
                    <h2>BRUNCH</h2>
                </div>
                <div className="menu lunch">
                    <h2>LUNCH</h2>
                </div>
                <div className="menu main">
                    <h2>MAIN</h2>
                </div>
            </div>

            <div className="suppliers">
                <div className="horizontals">
                    <div className="hz-line1"></div>
                    <div className="hz-line2"></div>
                </div>
                <div className="verticals">
                    <div className="vr-line1"></div>
                    <div className="vr-line2"></div>
                </div>
                <h1 className="reveal" ref={el => supplierTitle = el}>OUR SUPPLIERS</h1>
                <p className="text" id="s-text" ref={el => supplierText = el}>
                    At LT one of our main principles is to create unique and exciting food/drink using locally sorced produce. We're so lucky to work with such amazing suppliers without them our bar would not be the same.
                    <ul>
                        <li>Burrows Butchers, Bunbury</li>
                        <li>Good Cheese Company, Tattenhall</li>
                        <li>Devonshire Bakery, Frodsham</li>
                        <li>Snugburys Ice Cream, Nantwich</li>
                        <li>Jaunty Goat Coffee, Chester</li>
                        <li>Wholly Cow Red Poll, Bunbury</li>
                        <li>Perrys Produce, Middlewich</li>
                        <li>Hill Farm Eggs, Alpraham</li>
                    </ul>
                </p>
            </div>
        </Styled>
    )
};

export default Main;
