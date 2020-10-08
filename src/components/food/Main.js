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
        padding: 120px 25vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 1000px){
            padding: 100px 20vw; 
        }
        @media screen and (max-width: 900px){
            padding: 60px 15vw;
        }
        @media screen and (max-width: 700px){
            padding: 50px 10vw;
        }
        @media screen and (max-width: 500px){
            padding: 50px 20px;
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
                transform: scale(1.2);
                object-fit: cover;
                filter: brightness(80%);
                transition: transform 0.7s, filter 1s ease-in-out
            }
            img:hover{
                transform: scale(1);
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
        position: relative;
        margin: 150px 0px 100px 0px;
        padding: 20px;
        display: grid;
        grid-template-columns: 0.6fr 1.6fr 1.4fr;
        grid-template-rows: 0.9fr 1fr 0.9fr 1.4fr;
        gap: 0px 0px;
        grid-template-areas:
            "text text ."
            "text text image"
            "text text image"
            ". list image";
        @media screen and (max-width: 900px){
            grid-template-columns: 0.6fr 1.6fr 1fr;
            grid-template-rows: 0.9fr 1fr 0.9fr 1.5fr;
            grid-template-areas:
            "text text ."
            "text text image"
            "text text image"
            ". list ";
        }
        @media screen and (max-width: 700px){
            grid-template-columns: 1fr 0.9fr;
            grid-template-rows: 1fr 0.8fr;
            gap: 20px 20px;
            grid-template-areas:
                "text text"
                "list image";
        }
        @media screen and (max-width: 500px){
            grid-template-columns: 1fr;
            grid-template-rows: 0.4fr 0.4fr 1.8fr;
            gap: 40px 0px;
            grid-template-areas:
                "text"
                "list"
                "image";
        }
        .horizontals{
            height: 20px;
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: absolute;
            top: 40px;
            left: 20px;
            @media screen and (max-width: 625px){
                display: none;
            }
            .hz-line1, .hz-line2{
                width: auto;
                border: 2px solid ${props => props.theme.second};
            }
            .hz-line2{
                margin-right: 20px;
            }
        }
        .verticals{
            width: 20px;
            height: 300px;
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 0px;
            left: 60px;
            @media screen and (max-width: 625px){
                display: none;
            }
            .vr-line1{
                height: auto;
                border: 2px solid ${props => props.theme.second};
            }
            .vr-line2{
                height: auto;
                margin-bottom: 20px;
                border: 2px solid ${props => props.theme.second};
            }
        }
        .supplier-text{
            grid-area: text;
            padding: 100px 60px 40px 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (max-width: 900px){
                padding: 100px 50px 40px 100px;
            }
            @media screen and (max-width: 625px){
                padding: 20px 30px;
            }
            @media screen and (max-width: 500px){
                padding: 0;
            }
        }
        .supplier-list{
            grid-area: list;
            list-style: none;
            font-family: ${props => props.theme.font2};
            color: ${props => props.theme.second};
            @media screen and (max-width: 700px){
                padding: 50px 0 0 80px;
            }
            @media screen and (max-width: 625px){
                padding: 20px 0 20px 30px;
            }
            @media screen and (max-width: 500px){
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            li{
                margin: 5px 0;
            }
        }
        .supplier-image{
            grid-area: image;
            background: url(${vibes}) no-repeat center;
            background-size: contain;
        }

    }

`

const Main = () => {

    return (
        <Styled>
            <div className="intro">
                <Title text="MENU'S" />
                <Headline text="Our dining style is very informal, as is all the food." />
                <SectionText
                    text="Here are some sample menus for you take a look at. All our dishes are prepared fresh to order from brunch at the weekend right the way through to our daily small plate menu & specials." >
                </SectionText>
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
                <div className="supplier-text">
                    <Title text="SUPPLIERS" />
                    <Headline text="Keeping it local & independent is so important to Little Tap" />
                    <SectionText 
                        className="text" 
                        text="We work closely with our suppliers to ensure we bring you the best quality from the superb drinks selection to the seasonal small plates & specialised coffee.">
                    </SectionText>
                </div>
                <ul className="supplier-list">
                    <li>Burrows Butchers, Bunbury</li>
                    <li>Good Cheese Company, Tattenhall</li>
                    <li>Devonshire Bakery, Frodsham</li>
                    <li>Snugburys Ice Cream, Nantwich</li>
                    <li>Jaunty Goat Coffee, Chester</li>
                    <li>Wholly Cow Red Poll, Bunbury</li>
                    <li>Perrys Produce, Middlewich</li>
                    <li>Hill Farm Eggs, Alpraham</li>
                </ul>
                <div className="supplier-image"></div>
            </div>
        </Styled>
    )
};

export default Main;


