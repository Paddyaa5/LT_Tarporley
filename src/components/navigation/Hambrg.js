import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Styled = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 500px){
        height: 40px;
        width: 40px;
    }
    .hamburger {
        width: 25px;
        height: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .hamburger__item {
        width: 25px;
        height: 3px;
        background-color: ${(props => props.theme.third)};
    } 
    .cross__item {  
        width: 40%;
        height: 4px;
        background-color: ${(props => props.theme.third)};
        transform: rotate(90deg);
        position: absolute;
        opacity: 0;
    }
    .cross__item:last-child {
        transform: rotate(90deg);
    }
`

const Hambrg = ({state}) => {

    let item1 = useRef(null)
    let item2 = useRef(null)
    let item3 = useRef(null)
    let item4 = useRef(null)
    let item5 = useRef(null)

    useEffect(() => {
        if (state.clicked === false) {
            gsap.to(item4, { rotate: 45, opacity: 0, duration: 0.5})
            gsap.to(item5, { rotate: 225, opacity: 0, duration: 0.5})
            gsap.to(item1, {x: 0, opacity: 1, duration: 0.5, delay: 0.5})
            gsap.to(item2, {x: 0, opacity: 1, duration: 0.5, delay: 0.6})
            gsap.to(item3, {x: 0, opacity: 1, duration: 0.5, delay: 0.7})
        }
        else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            gsap.to(item1, {x: 70, opacity: 0, duration: 0.5})
            gsap.to(item2, {x: 70, opacity: 0, duration: 0.5, delay: 0.1})
            gsap.to(item3, {x: 70, opacity: 0, duration: 0.5, delay: 0.2})
            gsap.to(item4, {opacity: 1, rotate: 45, duration: 0.7, delay: 0.5})
            gsap.to(item5, {opacity: 1, rotate: -225, duration: 0.7, delay: 0.5})
        }
    })

    return (
    <Styled>
        <div className="hamburger">
            <div className="hamburger__item" ref={e => item1 = e}></div>
            <div className="hamburger__item" ref={e => item2 = e}></div>
            <div className="hamburger__item" ref={e => item3 = e}></div>
        </div>
        <div className="cross__item" ref={e => item4 = e}></div>
        <div className="cross__item" ref={e => item5 = e}></div>
    </Styled>
    )
};
export default Hambrg;
