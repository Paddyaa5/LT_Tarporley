import React from 'react'
import styled, { keyframes } from 'styled-components';

//components
import EmailLink from '../all/Email';
import AddressLink from '../all/Address';
import PhoneLink from '../all/Phone';
import Hours from '../all/Hours';
//images
import drink from '../../images/drink.jpg';

const Bounce = keyframes`
    20%, 50%, 80%, to{
        transform: translateY(0)
    }
    40%{
        transform: translateY(-10px)
    }
    70%{
        transform: translateY(-5px)
    }
    90%{
        transform: translateY(-2px)
    }
`
const TopFooter = styled.div`
    height: 280px;
    .hero{
    width: 100vw;
    font-family: ${(props => props.theme.font3)};
    color: ${(props => props.theme.white)};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "social hours info";
    column-gap: 15px;
    row-gap: 15px;
    padding: 20px 30px;
    height: 280px;
    background-image: url(${drink});
    background-size: cover;
    border-bottom: ${(props) => props.theme.first} 0.1px solid;
    border-top: ${(props) => props.theme.first} 0.1px solid;
    @media screen and (max-width: 950px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
            "social hours"
            "info info";
        height: 322px;
    }
    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: 
            "social"
            "hours"
            "info";
        height: 480px;
    }
    }
    .hero-cover{
        background-color: ${(props => props.theme.third)};
        width: 100%;
        height: 280px;
        position: relative;
        top: -280px;
        left: 0;
        opacity: 0.4;
    }
    h4{
        align-self: center; 
        color: ${(props => props.theme.fourth)};
        font-size: 20px;
        margin-top: 24px;
        margin-bottom: 14px;
    }
    p{
        font-size: 12px;
        margin-bottom: 10px;
    }
    a{
        color: ${(props => props.theme.first)};
        text-decoration: none;
        cursor: pointer;
        &:hover{
            color: ${(props => props.theme.fourth)};
        }
    }
    .social-media, .hours, .info{
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        z-index: 5;
    }
    .social-media{
        grid-area: social;
        .icons{
            width: 260px;
            display: flex;
            justify-content: space-evenly;
            font-size: 38px;
            margin-bottom: 8px;
            i:hover{
                color: ${(props => props.theme.second)};
                animation: ${Bounce} 1s linear infinite;
            }
        }
        .comment{
            font-family: ${(props => props.theme.font1)};
            @media screen and (max-width: 500px){
                display: none;
            }
        }
        .hashtag{
            font-family: ${(props => props.theme.font2)};
            color: ${(props => props.theme.second)};
            font-size: 14px;
        }
    }
    .hours{
        grid-area: hours;
    }
    .info{
        grid-area: info;
        .container{
            width: 260px;
        }
        @media screen and (max-width: 500px){
            padding: 0px 20px;    
        }
        @media screen and (max-width: 350px){
            padding: 0px 5px;    
        }
    }
`
const BottomFooter = styled.div`
    width: 100vw;
    color: ${(props => props.theme.first)};
    height: 65px;
    background-color: ${(props => props.theme.second)};
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: ${(props => props.theme.font2)};
        font-size: 10px;
        margin: 0 10px;
        text-align: center;
        @media screen and (max-width: 500px){
            font-size: 8px;
            span{
                font-size: 10px; 
            }
        }
        span{
            font-size: 12px;
        }
    }
`

const Footer = () => {
    return (
        <>
            <TopFooter>
                <div className="hero">
                <div className='social-media'>
                    <h4>Socials.</h4>
                    <div className="icons">
                        <a href="https://www.facebook.com/Littletap/" target='_blank'rel='noopener noreferrer'><i class="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/littletap_cw6/"target='_blank'rel='noopener noreferrer'><i class="fab fa-instagram-square"></i></a>
                        <a href="https://twitter.com/littletap_cw6?lang=en"target='_blank'rel='noopener noreferrer'><i class="fab fa-twitter-square"></i></a>
                        <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g499522-d10684721-Reviews-Little_Tap-Tarporley_Cheshire_England.html"target='_blank'rel='noopener noreferrer'><i class="fab fa-tripadvisor"></i></a>
                    </div>
                    <p className="comment">Like, Comment, Share.</p>
                    <p className="hashtag">#littleTAP</p>
                </div>
                <div className="hours">
                    <h4>Hours.</h4>
                    <Hours />
                </div>
                <div className="info">
                    <h4>Info.</h4>
                    <div className="container">
                        <PhoneLink />
                        <AddressLink />
                        <EmailLink />
                    </div>
                </div>
                </div>
                <div className="hero-cover"></div>
            </TopFooter>

            <BottomFooter>
                <p>Little Tap © 2016 All Rights Reserved. Website created by <span>PADesign</span></p>
            </BottomFooter>
        </>
    )
};

export default Footer;