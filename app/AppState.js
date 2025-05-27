import { Snack } from './models/Snack.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  // AppState.js
  snacks = [
    new Snack({
      name: "Sample",
      price: 3.5,
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png",
    }),
    new Snack({
      name: "Chocolate Bar",
      price: 1.50,
      imgURL: "https://unsplash.com/photos/a-bar-of-chocolate-next-to-a-pile-of-nuts-7LKpstdOad0"
    }),
    new Snack({
      name: "Cookie",
      price: 2.75,
      imgURL: "https://unsplash.com/photos/brown-cookie-on-white-table-wjCbtMGLh4I"
    }),
    new Snack({
      name: "Energy Drink",
      price: 5.50,
      imgURL: "https://unsplash.com/photos/white-and-blue-labeled-can-1aiTO5KNxv0"
    }),
    new Snack({
      name: "Ice Cream Sandwhich",
      price: 3.75,
      imgURL: "https://unsplash.com/photos/three-cookies-and-ice-cream-sandwiches-stacked-on-top-of-each-other-FNvIsJ71cD4"
    })
  ];

  money = 0;











}

export const AppState = createObservableProxy(new ObservableAppState())