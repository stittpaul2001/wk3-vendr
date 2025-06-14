import { AppState } from "../AppState.js";

// Snack.js
export class Snack {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get snackCard() {
    return /*html*/`
    <div class="col-md-4">
      <div onclick="app.SnacksController.drawSnacks()" class="card shadow bg-dark text-bg-warning snackCard my-2">
        <img class="border border-bg-dark card-image img-fluid" src="${this.imgUrl}">
          <div class="card-body text-end">
            <div class="card-title text-center">
              <h1 class="text-start fw-bold"> ${this.name} </h1>
                <hr>
            </div>
          <div class="text-start fs-2 money">$${this.price}</div>
          <button onclick="app.SnacksController.buySnack('${this.price}')" ${this.buttonDisabled} class="btn btn-dark btn-border border-danger" role="button" title="click to purchase a ${this.name}" >Buy </button>
        </div>
      </div >
    </div >
      `
  }

  get buttonDisabled() {
    const money = AppState.money
    if (this.price > money) {
      return 'disabled'

    }
    return ''
  }







}