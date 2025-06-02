import { AppState } from "../AppState.js"


class VendingService {


  increaseMoney(amount) {
    const money = AppState.money
    AppState.money += amount
    console.log('adding money!')
  }



}

export const vendingService = new VendingService()