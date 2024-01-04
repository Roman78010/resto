import { useEffect } from "react"
import WithRestoService from '../components/hoc';

// import { connect } from "react-redux";
// import { resetState, menuLoaded, menuRequested, menuError } from "../actions";



// export function useFetchMenuItems(RestoService, menuRequested, menuLoaded, menuError) {
//   useEffect(() => {
//     menuRequested()

//     RestoService.getMenuItems()
//     .then(res => menuLoaded(res))
//     .catch(error => menuError(true))

//   }, [RestoService, menuRequested, menuLoaded, menuError])
// }

export function useFetchMenuItems(RestoService) {
  useEffect(() => {

    RestoService.getMenuItems()
    .then(res => res)
    .catch(error => true)

  }, [RestoService])
}

// const mapStateToProps = (state) => {
//   return {
//       menuItems: [],
//       loading: true,
//       error: false
//   }
// }

// const mapDispatchToProps = {
//   menuLoaded,
//   menuRequested,
//   menuError,
// }

WithRestoService()(useFetchMenuItems);
// WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(useFetchMenuItems));