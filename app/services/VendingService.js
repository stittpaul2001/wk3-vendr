import { AppState } from "../AppState.js"


class VendingService {


  addQuarter(amount) {
    const updateMoney = AppState.money
    AppState.money += amount
  }



}

export const vendingService = new VendingService()