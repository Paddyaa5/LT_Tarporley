import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//animations
import { backgroundFadeIn } from '../../animations/HomeAnimations';

const Styled = styled.div`
    height: 110vh;
    background-color: ${(props => props.theme.first)};
    .background{
        height: 100%;
        background-color: ${(props => props.theme.second)};
        position: relative;
        right: -100vw;

    }


`

const Social = () => {

    let background = useRef(null);

    useEffect(() => {

        backgroundFadeIn()
    })


    return (
        <Styled>
            <div className="background" ref={el => background = el}>

            </div>
        </Styled>
    )
};

export default Social;
