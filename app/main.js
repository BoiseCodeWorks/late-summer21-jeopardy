import JeopardyController from "./Controllers/JeopardyController.js";


class App {
  jeopardyController = new JeopardyController
}

window["app"] = new App();
