import { AppState } from "../AppState.js"
import { SnacksController } from "../controllers/SnacksController.js"
import { Snack } from "../models/Snack.js"


class SnacksService {




  buySnack(snackPrice) {
    const money = AppState.money
    const snacks = AppState.snacks.find(snack => snack.price == snackPrice)
    if (money >= snackPrice) {
      AppState.money -= snackPrice
    } else {
      window.alert('Not enough funds to purchase your item! Add more quarters to your total funds')
    }
  }

}



export const snacksService = new SnacksService()