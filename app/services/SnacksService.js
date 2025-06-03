import { AppState } from "../AppState.js"


class SnacksService {


  buySnack(snackName) {
    const snacks = AppState.snacks.find(snack => snack.name == snackName)
    // console.log(snacks)
  }



}
export const snacksService = new SnacksService()