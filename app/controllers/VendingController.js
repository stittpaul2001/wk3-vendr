import { AppState } from "../AppState.js"
import { vendingService } from "../services/VendingService.js"

export class vendingController {
  constructor() {
    console.log('money, money, money, MONEY!!!')
    AppState.on('money', this.drawMoney)
  }


  updateMoney(amount) {
    vendingService.increaseMoney(amount)
  }

  drawMoney() {
    const moneyElm = document.getElementById('money')
    const money = AppState.money.toFixed(2)
    moneyElm.innerText = `$${money.toString()}`
  }









}