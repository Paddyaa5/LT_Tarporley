import React from 'react';
import styled from 'styled-components';
//components
import Header from '../components/all/Header';
import Main from '../components/contact/Main';
import Home from '../components/navigation/HomeButton';
//images
import phone from '../images/phone.jpg'


const Styled = styled.div`
    background-color: ${props => props.theme.second};
    width: 100vw;
    overflow: hidden;
`
const Contact = () => {

    return (
        <Styled>
            <Home />
            <Header image={phone} pageTitle="Contact Us"/>
            <Main />
        </Styled>
    )
};

export default Contact;