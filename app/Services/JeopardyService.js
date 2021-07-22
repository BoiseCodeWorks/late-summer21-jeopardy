import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { jeopardyApi } from "./AxiosService.js";

class JeopardyService {
  async getNewQuestion() {
    const res = await jeopardyApi.get()
    if (!res.data[0].question) {
      this.getNewQuestion()
      return
    }
    ProxyState.activeQuestion = new Question(res.data[0])
  }
}

export const jeopardyService = new JeopardyService();