import { AppState } from "../AppState.js"

export class SnacksController {
  constructor() {

    console.log('Snacks')
  }


  drawSnacks() {
    const snacks = AppState.snacks
    let snacksContent = ''
    snacks.forEach(snack => snacksContent += snack.name)
    const snackListElm = document.getElementById('snack-list')
    snackListElm.innerHTML = snacksContent

  }
}