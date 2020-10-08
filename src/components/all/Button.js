import React from 'react';
import styled from 'styled-components';

const Styled = styled.button`
    width: 120px;
    height: 50px;
    outline: none;
    margin-top: 30px;
    border: 2px solid ${(props => props.theme.second)};
    color: ${(props => props.theme.first)};
    background-color: ${(props => props.theme.second)};
    font-family: ${(props=> props.theme.font2)};
    cursor: pointer;
    font-size: 15px;
    text-transform: uppercase;
    transition: 0.3s ease;
    &:hover{
        border: 2px solid ${(props => props.theme.first)};
        color: ${(props => props.theme.first)};
        background-color: ${(props => props.theme.second)};
    }
`

const Button = ({text}) => {
    return (
        <Styled>
            {text}
        </Styled>
    )
};

export default Button;