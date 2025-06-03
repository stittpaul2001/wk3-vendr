import { AppState } from "../AppState.js"


class SnacksService {




  buySnack(snackPrice) {
    const money = AppState.money
    const snacks = AppState.snacks.find(snack => snack.price == snackPrice)
    const buyButtonElem = document.getElementById('BuyButton')
    if (money >= snackPrice) {
      AppState.money -= snackPrice

    } else {
      window.alert('Not enough funds to purchase your item!')
    }


    // console.log('subrtracting money')
  }




}




export const snacksService = new SnacksService()