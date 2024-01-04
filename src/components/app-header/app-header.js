import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const AppHeader = ({ items }) => { // insert "totalPrice" instead "items" if use value of "totalPrice" from state;
    const arrOfItemPrice = items.map(item => item.price);
    const totalPrice = arrOfItemPrice.length ? arrOfItemPrice.reduce((accumulator, currentValue) => accumulator + currentValue) : 0
    
    return (
        <header className="header">
            <Link className="header__link" to="main">Menu</Link>
            <Link className="header__link" to="cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice} $
            </Link>
            {/* <a className="header__link" href="#">
                Menu
            </a>
            <a className="header__link" href="#">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </a> */}
        </header>
    )
};

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

// const mapStateToProps = ({ totalPrice }) => {
//     return {
//         totalPrice
//     }
// }

export default connect(mapStateToProps)(AppHeader);