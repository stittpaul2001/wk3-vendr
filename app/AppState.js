import { Snack } from './models/Snack.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  // AppState.js
  snacks = [
    new Snack({
      name: "Cookie",
      price: 2.75,
      imgUrl: "cookie.avif"
    }),
    new Snack({
      name: "fruit pie",
      price: 3.50,
      imgUrl: "fruitpie.avif",
    }),
    new Snack({
      name: "Chocolate Bar",
      price: 1.50,
      imgUrl: "choc-bar.avif"
    }),
    new Snack({
      name: "Energy Drink",
      price: 5.50,
      imgUrl: "energyr-drink.avif"
    }),
    new Snack({
      name: "Chips",
      price: 3.50,
      imgUrl: "chips.avif"
    }),
    new Snack({
      name: "Ice Cream Sandwhich",
      price: 3.75,
      imgUrl: "icecreamsando.avif"
    })
  ];

  money = 0;


}

export const AppState = createObservableProxy(new ObservableAppState())

// this lets me view whats in my Appstate
// console.log('AppState', AppState)