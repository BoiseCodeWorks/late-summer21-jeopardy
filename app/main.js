import JeopardyController from "./Controllers/JeopardyController.js";
import PlayersController from "./Controllers/PlayersController.js";


class App {
  jeopardyController = new JeopardyController()
  playersController = new PlayersController()
}

window["app"] = new App();
