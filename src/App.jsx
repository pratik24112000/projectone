import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/site/Home';
import Header from './components/commonComponents/Header';
import AllCategories from './components/site/AllCategories';
import Blog from './components/site/Blog';
import About from './components/site/About';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/home" Component={Home} />
                <Route path="/allcategories" Component={AllCategories} />
                <Route path="/blog" Component={Blog} />
                <Route path="/about" Component={About} />

            </Routes>
        </div>
    );
}

export default App;
