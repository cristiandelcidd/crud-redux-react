import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
    return (
        <nav className='navbar navbar-dark justify-content-between'>
            <div>
                <h1>
                    <Link to='/' className='text-light'>
                        CRUD - React, Redux,REST API & Axios
                    </Link>
                </h1>
            </div>
            <Link
                to='/products/new'
                className='btn new-post'
            >
                Add Product &#43;
            </Link>
        </nav>
    )
}