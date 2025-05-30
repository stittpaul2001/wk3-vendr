import { ExampleController } from './controllers/ExampleController.js';
import { SnacksController } from './controllers/SnacksController.js';
import { vendingController } from './controllers/VendingController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  SnacksController = new SnacksController()

  VendingController = new vendingController()

}

window['app'] = new App()


