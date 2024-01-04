import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';

const CartIdPage = (props) => {
  console.log(props)
  
  // const menuItems = useSelector(state => state.menu);
  // console.log(menuItems)
  
  const params = useParams()
  const cartId = params.id - 1

  // useEffect(() => {

  //   RestoService.getMenuItems()
  //   .then(res => console.log(menuLoaded(res)))
  //   .catch(error => console.log(`I am ${error}`))

  // }, [RestoService])
  
  // const menuItem = menuItems[cartId]
  const menuItem = props.menuItems[cartId]
  
  const {title, price, url, category} = menuItem
  
  return (
          <li className="menu__item">
              <div className="menu__title">{title}</div>
              <img className="menu__img" src={url} alt={title}></img>
              <div className="menu__category">Category: <span>{category}</span></div>
              <div className="menu__price">Price: <span>{price}$</span></div>
              <button className="menu__btn">Add to cart</button>
          </li>
  )
  
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
  }
}

// const mapDispatchToProps = {
//   menuLoaded,
// }

export default connect(mapStateToProps)(CartIdPage);
// export default connect(mapStateToProps, mapDispatchToProps)(CartIdPage);





// import React from 'react';
// import { useParams } from 'react-router-dom';
// import WithRestoService from '../hoc';


// const CartIdPage = (props) => {
//   console.log(props);
  
//   const params = useParams()
//   const cartId = params.id - 1

//   const menuItem = props.menuItems[cartId]
//   console.log(menuItem)
//   const {title, price, url, category} = menuItem
  
//   return (
//           <li className="menu__item">
//               <div className="menu__title">{title}</div>
//               <img className="menu__img" src={url} alt={title}></img>
//               <div className="menu__category">Category: <span>{category}</span></div>
//               <div className="menu__price">Price: <span>{price}$</span></div>
//               <button className="menu__btn">Add to cart</button>
//           </li>
//   )
  
// };

// export default WithRestoService()(CartIdPage);









// import React from 'react';
// import { useParams } from 'react-router-dom';


// const CartIdPage = () => {
//   const params = useParams()
//   const cartId = params.id - 1

//   return (
//     <h1>Hello {cartId}</h1>
//   )
// }

// export default CartIdPage