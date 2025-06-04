import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnacksService.js"


export class SnacksController {
  constructor() {
    AppState.on('money', this.drawSnacks)

    //NOTE - helps me know that my controller is linked in within my file
    // console.log('SnacksController')
    this.drawSnacks()
  }



  drawSnacks() {
    const snacks = AppState.snacks

    let snacksContent = ''
    snacks.forEach(snacks => snacksContent += snacks.snackCard)
    const snackListElm = document.getElementById('snackList')
    snackListElm.innerHTML = snacksContent

  }


  buySnack(snackPrice) {
    snacksService.buySnack(snackPrice)
    console.log('food bought')
  }



}
