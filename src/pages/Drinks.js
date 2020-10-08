import React from 'react';
import styled from 'styled-components';
//components
import Header from '../components/all/Header';
import Home from '../components/navigation/HomeButton';
//images
import drinks from '../images/drinks.jpg'


const Styled = styled.div`
    background-color: ${props => props.theme.first};
    width: 100vw;
    overflow: hidden;
`
const Drinks = () => {

    return (
        <Styled>
            <Home />
            <Header image={drinks} pageTitle="Our Drinks"/>

        </Styled>
    )
};

export default Drinks;