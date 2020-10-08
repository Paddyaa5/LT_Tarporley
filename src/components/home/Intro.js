import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import Cookies from 'js-cookie';

const Styled = styled.div`
    .intro{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        font-family: ${props => props.theme.font1};
        font-weight: 200;
        background-color: ${props => props.theme.second};
        z-index: 5000;
        .logo-container{
            height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
            .hide{
                position: fixed;
                top: 35vh;
                background: ${props => props.theme.second};
                overflow: hidden;
            }
            .hide span{
                transform: translateY(100%);
                display: inline-block;
            }
            .intro-logo{
                padding: 0 25px;
                text-transform: uppercase;
                font-size: 80px;
                font-weight: 200;
                color: ${props => props.theme.first};
                border: 5px solid ${props => props.theme.first};
                @media screen and (max-width: 500px){
                    display: none;
                }
            }
        }
        .loading-bar-container{
            height: 30vh;
            display: flex;
            justify-content: center;
            align-items: top;
            padding: 30px;
            .loading-bar-empty{
                position: relative;
                width: 300px;
                height: 5px;
                border-radius: 5px;
                overflow: hidden;
                background: rgba(243, 223, 197, 0.2);
                .loading-bar-full{
                    position: absolute;
                    z-index:1;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 0%;
                    background: ${props => props.theme.first};
                }
            }
        }
    }
    .slider{
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: translateY(-100%);
        background-color: ${props => props.theme.fourth};
    }
`

const Intro = () => {

    let logo = useRef(null)
    let bar = useRef(null)
    let intro = useRef(null)
    let slider = useRef(null)
    let tl = gsap.timeline({defaults: {ease: 'power3.easeIn'}})
  
    const setCookie = () => {
      let in30Minutes = new Date(new Date().getTime() + 30 * 60 * 1000);
      Cookies.set('visited', 'true', {expires: in30Minutes});
    }
    
    useEffect(() => {
      let visited = Cookies.get('visited')
  
      if(visited === "true"){
        intro.style.display='none'
        slider.style.display='none'
        console.log("intro loading screen not displayed as 'visitied' cookie = true")
      }
      else{
        tl
        .to(logo, { y: 0, duration: 0.6 })
        .to(bar, { width: '100%', duration: 2.5 })
        .to(slider, { y: '100%', duration: 1})
        .to(intro, { y: '100%', duration: 1 }, "-=1.1")
        setCookie()
      }
    })

    return (
        <Styled>
            <div className="intro" ref={el => intro = el}>
                <div className="logo-container">
                    <h1 className="hide">
                        <span className="intro-logo" ref={el => logo = el}>Little Tap</span>
                    </h1>
                </div>
                <div className="loading-bar-container">
                    <div className="loading-bar-empty">
                        <div className="loading-bar-full" ref={el => bar = el}></div>
                    </div>
                </div>
            </div>
            <div className="slider" ref={el => slider = el}></div>
        </Styled>
    )
};

export default Intro;