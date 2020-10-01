import React from 'react'
import styled, { keyframes } from 'styled-components';

//components
import EmailLink from './Email';
import AddressLink from './Address';
import PhoneLink from './Phone';
import Hours from './Hours';
//images
import footer from '../../images/footer.jpg'

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
    height: auto;
    width: 100vw;
    .hero{
        height: 100%;
        width: 100%;
        position: relative;
        font-family: ${(props => props.theme.font3)};
        color: ${(props => props.theme.first)};
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px 30px;
        background: url(${footer}) center center;
        background-size: cover;
        padding: 50px 10px;
        
        border-bottom: ${(props) => props.theme.first} 0.1px solid;
    }
    .hero::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: ${(props) => props.theme.third};
        opacity: 0.7;
    }
    h4{
        align-self: center; 
        color: ${(props => props.theme.fourth)};
        font-size: 22px;
        margin-top: 10px;
        margin-bottom: 14px;
    }
    p{
        font-size: 14px;
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
    .footer-item{
        width: 350px;
        height: 220px;
        display: flex;
        align-items: center;
        justify-content: top;
        flex-direction: column;
        position: relative;
        z-index: 5;
        @media screen and (max-width: 900px){
            height: 200px;
        }

        @media screen and (max-width: 500px){
            width: 280px;
            height: 190px;
        }
    }
    .social-media{
        grid-area: social;
        color: ${(props => props.theme.first)};
        .icons{
            width: 260px;
            display: flex;
            justify-content: space-evenly;
            font-size: 38px;
            margin-bottom: 8px;
            i:hover{
                color: ${(props => props.theme.fourth)};
                animation: ${Bounce} 1s linear infinite;
            }
        }
        .comment{
            font-family: ${(props => props.theme.font3)};
            @media screen and (max-width: 500px){
                display: none;
            }
        }
        .hashtag{
            font-family: ${(props => props.theme.font1)};
            color: ${(props => props.theme.fourth)};
            font-size: 20px;
            margin-top: 10px;
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
                <div className="footer-item info">
                    <h4>Info.</h4>
                    <div className="container">
                        <PhoneLink />
                        <AddressLink />
                        <EmailLink />
                    </div>
                </div>
                <div className="footer-item hours">
                    <h4>Hours.</h4>
                    <Hours />
                </div>
                <div className="footer-item social-media">
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
                </div>
            </TopFooter>
            <BottomFooter>
                <p>Little Tap © 2016 All Rights Reserved. Website created by <span>PADesign</span></p>
            </BottomFooter>
        </>
    )
};

export default Footer;