import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import brunch from '../../images/brunch.jpg';
import lunch from '../../images/lunch.jpg';
import main from '../../images/main.jpg';
//animations
import { titleReveal, textFadeIn } from '../../animations/FoodAnimations';



const Styled = styled.div`
    height: auto;
    width: 100vw;
    overflow: hidden;
    background-color: ${props => props.theme.first};
    padding: 20px;

    .intro{
        padding: 80px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 500px){
            padding: 0px 0px;
        }
    }
    .reveal{
        font-family: ${props => props.theme.font1};
        font-weight: 200;
        color: ${props => props.theme.second};
        font-size: 42px;
        position: relative;
        padding: 2px 15px;
        transform-origin: left;
        transform: scaleX(1);
        transition: 0.5s;
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
        margin: 15px 15vw;
        text-align: center;
        opacity: 0;
        transition: 1.2s;
        @media screen and (max-width: 500px){
            margin: 20px 5vw;
            font-size: 12px;
        }
    }
    .text.active{
        opacity: 1;
    }
    .menus{
        padding: 20px 20px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        .menu-type{
            height: 350px;
            width: 350px;
            cursor: pointer;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            overflow: hidden;
            margin-bottom: 10px;
            border-radius: 3px;
            @media screen and (max-width: 500px){
                width: 250px;
                height: 250px;
            }
            img{
                position: absolute;
                transform-origin: center center;
                transform: scale(1);
                object-fit: cover;
                filter: brightness(80%);
                transition: transform 0.7s, filter 1s ease-in-out
            }
            img:hover{
                transform: scale(1.1);
                filter: brightness(50%);
            }
            h2{
                position: absolute; 
                font-size: 1.8em;
                z-index:1;
                color: ${props => props.theme.first};
                font-family: ${props => props.theme.font2};
            }
        }
    }

    .suppliers{
        padding: 100px 0;
        width: 100%;
        position: relative;
        @media screen and (max-width: 500px){
            padding: 30px 0;
        }
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
                left: 25px;
            }
            @media screen and (max-width: 500px){
                display: none;
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
                top: 75px;
            }
            @media screen and (max-width: 500px){
                display: none;
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

        .supplier-text-list{
            padding: 40px 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: 950px){
                padding: 40px 80px;
            }
            @media screen and (max-width: 500px){
                padding: 0px 0px;
            }
            h1{
                width: 335px;
            }
            p{
                margin: 25px 0;
                padding: 5px;
                width: 90%;
                text-align: center;
                @media screen and (max-width: 950px){
                    width: 95%;
                }
                @media screen and (max-width: 500px){
                    text-align: justify;
                }
            }
            ul{
                margin: 0;
                padding: 5px;
                width: 90%;
                text-align: left;
                list-style: none;
                font-family: ${props => props.theme.font2};
                @media screen and (max-width: 950px){
                    width: 95%;
                }
                @media screen and (max-width: 500px){
                    width: 95%;
                }
            }
        }
    }

`

const Main = () => {

    let title = useRef(null);
    let supplierTitle = useRef(null);
    let menuText = useRef(null);
    let supplierText = useRef(null);
    let supplierList = useRef(null);

    useEffect(() => {

        titleReveal(title)
        titleReveal(supplierTitle)
        textFadeIn(menuText)
        textFadeIn(supplierText)
        textFadeIn(supplierList)
    })

    return (
        <Styled>
            <div className="intro">
                <h1 className="reveal" ref={el => title = el}>MENU'S</h1>
                <p className="text" ref={el => menuText = el}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s typesetting, remaining essentially unchanged. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>

            <div className="menus">
                <div className="menu-type">
                    <img src={brunch} alt="menu-item"></img>
                    <h2>BRUNCH</h2>
                </div>
                <div className="menu-type">
                    <img src={lunch} alt="menu-item"></img>
                    <h2>LUNCH</h2>
                </div>
                <div className="menu-type">
                    <img src={main} alt="menu-item"></img>
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
                <div className="supplier-text-list">
                    <h1 className="reveal" ref={el => supplierTitle = el}>OUR SUPPLIERS</h1>
                    <p className="text" ref={el => supplierText = el}>
                    At LT one of our main principles is to create unique and exciting food/drink using locally sorced produce. We're so lucky to work with such amazing suppliers without them our bar would not be the same.
                    </p>
                    <ul className="text" ref={el => supplierList = el}>
                        <li>Burrows Butchers, Bunbury</li>
                        <li>Good Cheese Company, Tattenhall</li>
                        <li>Devonshire Bakery, Frodsham</li>
                        <li>Snugburys Ice Cream, Nantwich</li>
                        <li>Jaunty Goat Coffee, Chester</li>
                        <li>Wholly Cow Red Poll, Bunbury</li>
                        <li>Perrys Produce, Middlewich</li>
                        <li>Hill Farm Eggs, Alpraham</li>
                    </ul>
                </div>
            </div>
        </Styled>
    )
};

export default Main;


