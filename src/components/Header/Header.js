import React from 'react';

const Header = () => {
    return (
        <header className="container text-center bg-primary text-white p-2">
            <h1>Coronavirus Relief Fund</h1>
            <h3> Our aims to raise <span className="text-warning">$ 500</span> million fund</h3>
            <p>for COVID-19 health supplies, for low- and middle-income countries set to benefit</p>
        </header>
    );
};

export default Header;