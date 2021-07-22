import { ProxyState } from "../AppState.js"
import { jeopardyService } from "../Services/JeopardyService.js"

function _draw() {
  document.getElementById('question').innerHTML = ProxyState.activeQuestion.Template
}


export default class JeopardyController {
  constructor() {
    ProxyState.on('activeQuestion', _draw)

    this.getNewQuestion()
  }
  async getNewQuestion() {
    try {
      await jeopardyService.getNewQuestion()
    } catch (error) {
      console.error(error)
    }
  }
}