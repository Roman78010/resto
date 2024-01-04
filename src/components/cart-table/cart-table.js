import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions'; // calcTotalPrice

import WithRestoService from '../hoc';

const CartTable = ({ items, deleteFromCart, RestoService }) => { // calcTotalPrice
    // const items = [{
	// 		"title": "Cesar salad",
	// 		"price": 12,
	// 		"url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
	// 		"category": "salads",
	// 		"id": 1
	// 	},
	// 	{
	// 		"title": "Pizza Margherita",
	// 		"price": 10,
	// 		"url": "https://images.pizza33.ua/products/product/m8puwKrKKboEnfjOt3OEFvuZWwgdHsQW.png",
	// 		"category": "pizza",
	// 		"id": 2
	// 	}]

    // const arrOfItemPrice = items.map(item => item.price);
    // const totalPrice = arrOfItemPrice.length ? arrOfItemPrice.reduce((accumulator, currentValue) => accumulator + currentValue) : 0
    // console.log(totalPrice);
    
    // calcTotalPrice(totalPrice)
     
    // () => items.length = 0
    // () => RestoService.addOrders(items)
    
    // const handleButtonClick = () => {
    //     const sendOrders = (() => RestoService.addOrders(items))()
    //     const removeItems = (() => items.length = [])()
    // }
    
    return (
        <>
            <div className="cart__basket"><button onClick={() => RestoService.addOrders(items)} className="cart__basket-btn">Send order</button></div>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id} = item
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}


// const mapDispatchToProps = () => {
//     return {
//         onDelete: (id) => {
//             console.log(`Delete element ${id}`);
//         }
//     }
// }

const mapDispatchToProps = {
    deleteFromCart,
    // calcTotalPrice
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));