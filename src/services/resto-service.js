// export default class RestoService {
  //   getMenuItems() {
    //     return []
    //   }
    // }
    
    // export default class RestoService {
      //   async getMenuItems() {
        //       try {
          //         const response = await fetch('http://localhost:3000/menu');
          //         const data = await response.json();
          //         console.log(data);
          //       } catch (error) {
            //         console.error('Error:', error);
            //       }
            //     }
            // }
            
export default class RestoService {
  _apiBase = 'http://localhost:3000'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`)
    
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
  }

  async getMenuItems() {
    return await this.getResource(`/menu/`)
  }

  // async getMenuItem(cartId) {
  //   return await this.getResource(`/menu/`)[cartId]
  // }
  // async addOrders(orders) {
  //    fetch('http://localhost:3000/menu', {
  //      method: 'POST',
  //      headers: {
  //        'Content-Type': 'application/json'
  //      },
  //      body: JSON.stringify({
  //       "orders": orders
  //      }),
  //    })
  //    .then((response) => response.json())
  //    .then((data) => console.log('Success:', data))
  //    .catch((error) => console.error('Error:', error));
  //  }

   async addOrders(orders) {
    try {
      let response = await fetch('http://localhost:3000/menu', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "orders": orders
          }),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      } else {
          let data = await response.json();
          console.log('Success:', data);
      }
    } catch (error) {
        console.error('Error:', error);
    }
  }

}
