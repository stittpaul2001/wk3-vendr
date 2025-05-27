// Snack.js
export class Snack {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get snackCard() {
    return/*html*/
    `
      <div class="card">
        <div class="card-title">
          <h1> ${this.name} </h1>
          <img class="border-solid" src="${this.imgUrl}>
        </div>
      </div>
      `

  }

















}