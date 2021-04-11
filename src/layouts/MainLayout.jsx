import React from 'react';
import Header from '../components/header/Header';

const MainLayout = ({children}) => {
    return(
        <div>
            <Header />
            <div className="main">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;