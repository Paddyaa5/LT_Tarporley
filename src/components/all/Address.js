import React from 'react';
import styled from 'styled-components';

const Styled = styled.p`
    font-family: ${(props => props.theme.font2)};
    font-size: 16px;
    margin-bottom: 10px;
    a{
        color: ${(props => props.theme.first)};
        text-decoration: none;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
            font-size: 18px;
            color: ${(props => props.theme.fourth)};
        }
    }
`

const AddressLink = () => {
    return (
        <Styled>
            <a 
            href="https://www.google.com/maps/place/Little+Tap/@53.1591861,-2.6706287,17z/data=!3m1!4b1!4m5!3m4!1s0x487aefdb2dc2fe0b:0x26bd522a23a9ad80!8m2!3d53.1591861!4d-2.66844"
            target="_blank"
            rel="noopener noreferrer">
                <i class="far fa-map"></i>  69 High Street, Tarporley, Cheshire, CW6 0DP
            </a>
        </Styled>
    )
};

export default AddressLink;
