import React from 'react';
import styled from 'styled-components';
//components
import Header from '../components/home/Header';
import About from '../components/home/About';
import LittlePlates from '../components/home/LittlePlates';
import CraftBeer from '../components/home/CraftBeer';
import Gin from '../components/home/Gin'
import SectionSplitter from '../components/all/SectionSplitter';


const Styled = styled.div`
    background-color: ${props => props.theme.first};
    width: 100vw;
    overflow: hidden;
`

const Home = () => {

    return (
        <Styled>
            <Header/>
            <About />
            <SectionSplitter />
            <LittlePlates />
                <SectionSplitter />
            <CraftBeer />
            <SectionSplitter />
            <Gin />
        </Styled>
    )
}

export default Home
