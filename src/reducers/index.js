const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  // totalPrice: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state, // Из-за того что наш редюсер перезаписывает все свойства с каждым изменением любого из них в отдельности нам нужно указывать их в каждом из полей "case", поэтому что бы этого не делать, не повторять/прописывать все эти свойства в ручную мы воспользуемся spread оператором. 
        menu: action.payload,
        loading: false,
        error: false
      }
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false
      }
    case 'MENU_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'ITEM_ADD_TO_CART':
      const id = action.payload
      const item = state.menu.find(item => item.id === id)
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id
      }

      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ]
      }
    case 'ITEM_REMOVE_FROM_CART':
      const idx = action.payload
      const itemIndex = state.items.findIndex(item => item.id === idx)
      return {
        ...state,
        items: [
          // Такая конструкция нужна для того что бы соблюсти прицып имутабельности.
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      }
    // case 'TOTAL_PRICE':
    //   return {
    //     ...state,
    //     totalPrice: action.totalPrice
    //   }
    default:
      return state
  }
}

export default reducer