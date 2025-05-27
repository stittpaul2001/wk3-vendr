import { AppState } from "../AppState.js"


class SnacksService {
  constructor(snackName) {
    const snacks = AppState.snacks
    const selectedSnacks = AppState.snacks.find(snack => snack.name == snackName)
    console.log('service', snackName)
  }

}
export const snacksService = new SnacksService()