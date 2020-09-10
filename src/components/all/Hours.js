import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
    width: 90%;
    max-width: 160px;
    display: flex;
    justify-content: space-between;
    p{
        font-family: ${(props => props.theme.font2)};
        color: ${(props => props.theme.first)};
        font-size: 12px;
        margin-bottom: 10px;
    }
`

const Hours = () => {
    return (
    <Styled>
        <div className="days">
            <p> Mon-Fri</p>
            <p> Sat</p>
            <p> Sun</p>
        </div>
        <div className="times">
            <p> 11:00 - 23:00</p>
            <p> 11:00 - 00:30</p>
            <p> 11:00 - 22:00</p>
        </div>
    </Styled>
    )
};

export default Hours;
