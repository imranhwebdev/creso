import React from 'react';
import Header from '../components/Header.jsx';
import StakeFooter from '../components/StakeFooter.jsx';
import NotFoundPage from '../components/NotFound.jsx';
const NotFound = () => {
    return (
        <div>
            <Header />
            <NotFoundPage />
            <StakeFooter />
        </div>
    );
};

export default NotFound;