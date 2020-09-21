import React from 'react';

//components
import Banner from '../components/food/Banner';
import Main from '../components/food/Main';
import Home from '../components/navigation/HomeButton';
import Logo from '../components/navigation/Logo';

const Food = () => {

    return (
        <>
            <Home />
            <Logo />
            <Banner />
            <Main />
        </>
    )
};

export default Food;
