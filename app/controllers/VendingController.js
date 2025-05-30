import { AppState } from "../AppState.js"
import { vendingService } from "../services/VendingService.js"

export class vendingController {
  constructor() {
    console.log('money, money, money, MONEY!!!')
    AppState.on('money', this.drawMoney)
  }


  addQuarter() {
    vendingService.addQuarter()
    this.addQuarter()
  }

  updateMoney(amount) {
    vendingService.addQuarter(amount)
  }

  drawMoney() {
    const moneyElm = document.createElement('money')
    const money = AppState.money.toFixed(2)
    moneyElm.innerText = `$${money.toString()}`
  }









}