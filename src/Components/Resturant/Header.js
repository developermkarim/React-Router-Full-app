import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/allMealsTo'>Foods</Link>
            <Link to='/AboutUs'>About</Link>
            <Link to='/ContactUs'>Contact</Link>
        </div>
    );
};

export default Header;