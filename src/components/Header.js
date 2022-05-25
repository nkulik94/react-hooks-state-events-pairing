import React from 'react';
import Subheader from './Subheader';

function Header({ views, date }) {
    return (
        <header>
            <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
            <Subheader views={views} date={date} />
        </header>
    )
}

export default Header