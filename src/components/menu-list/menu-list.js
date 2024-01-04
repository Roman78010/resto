// import React, {Component} from 'react';
// import MenuListItem from '../menu-list-item';
// import Spinner from '../spinner';



// class MenuList extends Component {
//     componentDidMount() {
//         this.props.menuRequested()
        
//         const {RestoService} = this.props
//         RestoService.getMenuItems()
//         .then(res => this.props.menuLoaded(res))
//         .catch(error => this.props.menuError(true))
//     }
        
//     render() {
//         return <MenuListPresentation {...this.props}/>
        
//     //     const {menuItems, loading, error} = this.props

//     //     if (loading) {
//     //         return <Spinner/>
//     //     }
        
//     //     if (error) {
//     //         return <h1>An error occurred</h1>
//     //     }

//     //     return (
//     //         <ul className="menu__list">
//     //             {
//     //                 menuItems.map(
//     //                     menuItem => {
//     //                         return <MenuListItem key={menuItem.id} id={menuItem.id} menuItem={menuItem}/>
//     //                     }
//     //                 )
//     //             }
//     //         </ul>
//     //     )
//     }
// };

// const mapStateToProps = (state) => {
//     return {
//         menuItems: state.menu,
//         loading: state.loading,
//         error: state.error
//     }
// } 

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         menuLoaded: (newMenu) => {
// //             dispatch(menuLoaded(newMenu))
// //         }
// //     }
// // }

// const mapDispatchToProps = {
//     menuLoaded,
//     menuRequested,
//     menuError
// }

// export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError, addedToCart } from '../../actions';

import MenuListPresentation from '../menu-list-presentation'

import './menu-list.scss';

const MenuList = ({RestoService, menuRequested, menuLoaded, menuError, addedToCart, ...props}) => {
    
    useEffect(() => {
        menuRequested()

        RestoService.getMenuItems()
        .then(res => menuLoaded(res)) // {console.log(menuLoaded(res)); console.log(res)}
        .catch(error => {menuError(true); console.log(error)})
    
      }, [RestoService, menuRequested, menuLoaded, menuError])

    return <MenuListPresentation {...props}/>
};


const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));