import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import brunch from '../../images/brunch.jpg';
import lunch from '../../images/lunch.jpg';
import main from '../../images/main.jpg';
import vibes from '../../images/good-vibes.jpg'
//components
import Title from '../all/Title'
import Headline from '../all/Headline'
import SectionText from '../all/SectionText'


const Styled = styled.div`
    height: auto;
    width: 100vw;
    padding: 20px;
    border-bottom: 1px solid ${(props => props.theme.second)}; 

    .intro{
        padding: 120px 0px 20px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 500px){
            padding: 50px 0px 0px 0px;
        }
        #menu-text{
            margin: 0 25vw 30px 25vw;
            text-align: justify;
            @media screen and (max-width: 500px){
                margin: 20px 5vw;
                font-size: 12px;
            }
        }
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
            width: 30%;
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

        .suppliers-section{
            padding: 80px 35vw 40px 100px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: center;
            @media screen and (max-width: 950px){
                padding: 40px 80px;
            }
            @media screen and (max-width: 500px){
                padding: 0px 0px;
            }
            p{
                margin: 30px 0 50px 0;
                padding: 5px;
                width: 70%;
                text-align: center;
                @media screen and (max-width: 950px){
                    width: 95%;
                }
                @media screen and (max-width: 500px){
                    text-align: justify;
                }
            }
            ul{
                margin: 0 0 0 100px;
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
                li{
                    color: ${props => props.theme.second};
                    font-size: 16px;
                    margin: 10px 0;
                }
            }
            img{
                position: absolute;
                top: 15vh;
                right: 15vw;
                width: 280px;
                @media screen and (max-width: 950px){
                    width: 180px;
                    top: 280px;
                    right: 10vw;
                }
                @media screen and (max-width: 500px){
                    display: none;
                }
            }
        }
    }

`

const Main = () => {

    return (
        <Styled>
            <div className="intro">
                <Title text="MENU'S" />
                <Headline text="Our dining style is very informal, as is all the food." />
                <div id="menu-text">
                    <SectionText
                        text="Here are some sample menus for you take a look at. All our dishes are prepared fresh to order from brunch at the weekend right the way through to our daily small plate menu & specials." >
                    </SectionText>
                </div>
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
                    <div className="hz-line1" ></div>
                    <div className="hz-line2" ></div>
                </div>
                <div className="verticals">
                    <div className="vr-line1"></div>
                    <div className="vr-line2"></div>
                </div>
                <div className="suppliers-section">
                    <Title text="OUR SUPPLIERS" />
                    <Headline text="Keeping it local & independent is so important to Little Tap" />
                    <SectionText 
                        className="text" 
                        text="We work closely with our suppliers to ensure we bring you the best quality from the superb drinks selection to the seasonal small plates & specialised coffee.">
                    </SectionText>
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
                    <img src={vibes} alt="lt-good-vibes"></img>
                </div>
            </div>
        </Styled>
    )
};

export default Main;


