import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import CartIdPage from '../pages/cart-id-page';

import Background from './food-bg.jpg';

import { Routes, Route } from 'react-router-dom';

// const App = ({ RestoService }) => {
const App = () => {
    // console.log(RestoService.getMenuItems())
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <Routes>
                <Route path="/" element={<AppHeader/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="/main/:id" element={<CartIdPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="*" element={(<h1>Page Not Found</h1>)}/>
            </Routes>
        </div>
        // <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
        //     <AppHeader total={50}/>
        //     <MainPage/>
        //     <CartPage/>
        // </div>
    )
}

export default App;