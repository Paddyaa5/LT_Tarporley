import React from 'react';
import styled from 'styled-components';

//components
import Header from '../components/all/Header';
import Main from '../components/food/Main';
import Home from '../components/navigation/HomeButton';
//images
import table from '../images/table.jpg'


const Styled = styled.div`
    background-color: ${props => props.theme.first};
    width: 100vw;
    overflow: hidden;
`
const Food = () => {

    return (
        <Styled>
            <Home />
            <Header image={table} pageTitle="Our Food"/>
            <Main />
        </Styled>
    )
};

export default Food;
