const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  }
}

const menuError = (error) => {
  return {
    type: 'MENU_ERROR',
    error: error
  }
}

// const resetState = () => {
//   return {
//     type: 'RESET_STATE',
//     menu: [],
//     loading: true,
//     error: false
//   }
// }

const addedToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id,
  }
}

const deleteFromCart = (id) => {
  return {
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id,
  }
}

// const calcTotalPrice = (price) => {
//   return {
//     type: 'TOTAL_PRICE',
//     totalPrice: price
//   }
// }

export {
  menuLoaded,
  menuRequested,
  menuError,
  addedToCart,
  deleteFromCart,
  // calcTotalPrice
}