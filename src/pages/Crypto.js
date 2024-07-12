import React from 'react';
import CryptoList from '../components/CryptoList';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Crypto = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <br />
            <CryptoList />
        </div>
    );
};

export default Crypto;