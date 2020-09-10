import React from 'react';
import styled from 'styled-components';

const Styled = styled.p`
    font-family: ${(props => props.theme.font2)};
    font-size: 12px;
    margin-bottom: 10px;
    a{
        color: ${(props => props.theme.first)};
        text-decoration: none;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
            color: ${(props => props.theme.second)};
            font-size: 14px;
        }
    }
`

const PhoneLink = () => {
    return (
        <Styled>
            <a href="tel:01829730101"><i class="fas fa-phone-alt"></i>  01829 730101</a>
        </Styled>
    )
};

export default PhoneLink;
