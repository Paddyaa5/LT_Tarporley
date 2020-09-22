import React from 'react';
import styled from 'styled-components';

//components
import Banner from '../components/food/Banner';
import Main from '../components/food/Main';
import Home from '../components/navigation/HomeButton';
import Logo from '../components/navigation/Logo';


const Styled = styled.div`
    background-color: ${props => props.theme.first};
`
const Food = () => {

    return (
        <Styled>
            <Home />
            <Logo />
            <Banner />
            <Main />
        </Styled>
    )
};

export default Food;
