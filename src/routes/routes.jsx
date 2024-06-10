import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from '../pages/Home';
import Blog from '../pages/Blog.jsx';

export default function Routes () {
    return (
        <BrowserRouter>
            <Route Component={Home} path='/' exact />
            <Route Component={Blog} path='/blog' exact />
        </BrowserRouter>
    )
}