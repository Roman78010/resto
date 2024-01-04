import React from 'react';
import Spinner from '../spinner';
import MenuListItem from '../menu-list-item';

import { connect } from 'react-redux';
import { addedToCart } from '../../actions';



const MenuListPresentation = ({menuItems, loading, error, addedToCart}) => {
  const menuItemUrl = menuItems.map(menuItem => menuItem.url)
  const menuItemSortUrl = menuItemUrl.sort()

  const getDuplicateUrlString = () => {
      for (let i = 0; i < menuItemSortUrl.length; i++) {
          if (menuItemSortUrl[i] === menuItemSortUrl[i + 1]) {
              return menuItemSortUrl[i + 1]
          } else {
              continue
          }
      }
  }

  let indexOfmenuItemsDuplicateUrl
  
  menuItems.forEach((menuItem, index) => {
      if (menuItem.url === getDuplicateUrlString()) {
          return indexOfmenuItemsDuplicateUrl = index
      }
  })

  if (loading) {
      return <Spinner/>
  }
  
  if (error) {
      return <h1>An error occurred</h1>
  }

  return (
      <ul className="menu__list">
          {
              menuItems.map(
                  (menuItem, index) => {
                      if (index === indexOfmenuItemsDuplicateUrl) {
                        menuItem.url = 'https://www.redefinemeat.com/wp-content/uploads/2022/04/BLOG1.jpg'
                      }
                      return <MenuListItem key={menuItem.id} id={menuItem.id} onAddToCart={() => addedToCart(menuItem.id)} menuItem={menuItem}/>
                  }
              )
          }
      </ul>
  )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    addedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuListPresentation);