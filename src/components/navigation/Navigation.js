import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import styled, { keyframes } from 'styled-components';

import littletap from "../../images/littletap.webp";

import Hours from '../../components/all/Hours';
import Address from '../../components/all/Address';
import Email from '../../components/all/Email';
import Phone from '../../components/all/Phone';

import {
  staggerMenuText,
  staggerMenuReveal,
  staggerMenuRevealClose,
  fadeLeft,
  handleCityReturn,
  handleCity
} from '../../animations/NavigationAnimations';

const cities = [
  { name: "Tarporley", image: littletap },
];

const backgroundEffect = keyframes`
  0% {background-position: 0% 0%}
  25% { background-position: 40% 10%}
  50% { background-position: 0 10%}
  75% {background-position: 10% 40%}
  100% {background-position: 0% 0%}
`
const Styled = styled.div`
  display: none;
  position: fixed;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  .menu-secondary-back-color{
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props => props.theme.third)};
  }
  .menu-layer{
    position: relative;
    background: ${(props => props.theme.second)};
    height: 100%;
    overflow: hidden;
    .menu-city-back{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100vw;
      opacity: 0;
      object-fit: cover;
      animation-name: ${backgroundEffect};
      animation-duration: 40s;
      animation-iteration-count: infinite;
    }
    .container{
      width: 100%;
      min-width: 100%;
      margin: 0 auto;
      .wrapper{
        .menu-links{
          display: flex;
          justify-content: space-around;
          align-items: center;
          position: relative;
          top: 25vh;
          nav{
            display: block;
            ul{
              padding: 0;
              margin: 0;
              li{
                list-style: none;
                font-size: 46px;
                font-weight: 700;
                cursor: pointer;
                height: 15vh;
                overflow: hidden;
                width: 50vw;
                position: relative;
                @media screen and (max-width: 800px){
                  font-size: 36px; 
                }
                @media screen and (max-width: 500px){
                  font-size: 30px; 
                }
                a{
                  font-family: ${(props => props.theme.font1)};
                  font-weight: 200;
                  position: relative;
                  color: ${(props => props.theme.first)};
                  text-decoration: none;
                  &:hover{
                    color: ${(props => props.theme.fourth)};
                    transition: 0.2s;
                    transform: skewY(10deg);
                  }
                }
              }
            }
          }
        } 
      }
      .info{
        width: 250px;
        @media screen and (max-width: 500px){
          width: 110px;
        }
        h3{
          font-family: ${(props => props.theme.font2)};
          color: ${(props => props.theme.fourth)};
          margin-bottom: 15px;
          font-size: 28px;
          @media screen and (max-width: 500px){
            font-size: 16px;
          }
        }
        p{
          font-size: 14px;
          margin-bottom: 15px;
          @media screen and (max-width: 500px){
            font-size: 10px;
          }
        }
      }
      .locations{
        font-family: ${(props => props.theme.font3)};
        position: absolute;
        left: 20px;
        bottom: -70px;
        color: ${(props => props.theme.first)};
        margin-top: 16px;
        font-size: 16px;
        font-weight: 600;
        margin-left: 64px;
        @media screen and (max-width: 800px){
          display: none;
        }
        span{
          cursor: pointer;
          font-size: 14px;
          font-weight: 400;
          margin: 0 32px;
          transition: .3s ease-in-out;
          &:hover{
            background-color: ${(props => props.theme.second)};
            padding: 8px 24px;
            border-radius: 4px;
          }
        }
      }
    }
  }
`

const Navigation = ({state}) => {

  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBack = useRef(null);
  let cityBack = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    
    if (state.clicked === false) {
      staggerMenuRevealClose(revealMenu, revealMenuBack)
      gsap.to(menu, { duration: 1.3, css: {display: 'none'}
      })
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      // open menu
      gsap.to(menu, {
        duration: 0,
        css: {display: 'block'}
      });
      gsap.to([ revealMenu, revealMenuBack ], {
        duration: 0,
        opactiy: 1,
        height: '100%'
      });
      staggerMenuReveal(revealMenuBack, revealMenu);
      staggerMenuText(line1, line2, line3);
      fadeLeft(info);
    }
  }, [state]);

  return (
    <Styled ref={ e => menu = e}>
      <div ref={ e => revealMenuBack = e} className="menu-secondary-back-color"></div>
      <div ref={ e => revealMenu = e} className="menu-layer">
        <div ref={ e => cityBack = e} className="menu-city-back"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              
              <nav>
                <ul>
                  <li ref={ e => line1 = e}><Link to="/food">Our Food</Link>
                  </li>
                  <li ref={ e => line2 = e}><Link to="/drinks">Our Drinks</Link>
                  </li>
                  <li ref={ e => line3 = e}><Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </nav>

              <div ref={ e => info = e} className="info">
                <h3>INFO & HOURS</h3>
                <Phone />
                <Address />
                <Email />
                <Hours />
              </div>

              <div className="locations">
                Location:
                {cities.map(e => (
                  <span
                    key={e.name}
                    onMouseEnter={() => handleCity(e.image, cityBack)}
                    onMouseOut={() => handleCityReturn(cityBack)}>
                    {e.name}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};
export default Navigation;
