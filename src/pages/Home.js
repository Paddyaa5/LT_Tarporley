import React from 'react';
import styled from 'styled-components';

//components
import Banner from '../components/home/Banner';
import About from '../components/home/About';
import Social from '../components/home/Social';

const Styled = styled.div`
    background-color: ${props => props.theme.first};
`

const Home = () => {

    return (
        <Styled>
            <Banner />
            <About />
            <Social />
        </Styled>
    )
}

export default Home
