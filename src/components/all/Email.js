import React from 'react';
import styled from 'styled-components';

const Styled = styled.p`
    font-family: ${(props => props.theme.font2)};
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    a{
        color: ${(props => props.theme.first)};
        transition: 0.5s;
        text-decoration: none;
        cursor: pointer;
        &:hover{
            color: ${(props => props.theme.first)};
            font-size: 14px;
        }
    }
`

const Email = () => {
    return (
        <Styled>
            <a href="mailto:hello@littletaptarporley.co.uk">
                <i class="fas fa-envelope"></i>  hello@littletaptarporley.co.uk
            </a>
        </Styled>
    )
};

export default Email;
