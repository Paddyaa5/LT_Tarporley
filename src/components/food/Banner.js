import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import table from '../../images/table.jpg'

const Styled = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props => props.theme.first)};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;

    .img-container{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: ${(props => props.theme.first)};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-cover{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: ${(props => props.theme.first)};
        z-index: 1;
    }
    img {
        width: 100%;
        position: absolute;
    }
    h3{
        font-family: ${props => props.theme.font2};
        color: ${(props => props.theme.first)};
        font-size: 40px;
        opacity: 0;
        text-shadow: 3px 3px 3px ${(props => props.theme.second)};
        position: relative;
        z-index: 5;
        overflow: hidden;
        margin-top: -100px;
    }
`

const Banner = () => {

    let imageCover = useRef(null)
    let imageWrapper= useRef(null)
    let title = useRef(null)
    let tl = gsap.timeline();

    useEffect(() => {
        tl
        .to(imageCover, 1.2, { width: '0', ease: 'power2.easeInOut'})
        .to(imageWrapper, 0.5, { padding: 45, ease: 'power2.easeInOut'})
        .to(title, 0.2, { opacity: 1, y: 50, ease: 'power2.easeInOut'})
      });

    return (
        <Styled ref={el => imageWrapper = el}>
            <div className="img-container">
                <div className="img-cover" ref={el => imageCover = el}></div>
                <img src={table} alt="little-tap-table" aria-label="little-tap-table" />
                <h3 ref={el => title = el}>Our Food</h3>
            </div>
        </Styled>
    )
};

export default Banner;
