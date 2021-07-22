export default class Question {
  constructor({ question, answer, value, category }) {
    this.question = question.replace('\\', '');
    this.answer = answer.replace('\\', '');
    this.value = value;
    this.category = category.title.replace('\\', '')
  }

  get Template() {
    return /*html*/`
    <div class="col-12 mt-5">
    <div class="d-flex justify-content-around">
        <h4 class="text-uppercase">Category: ${this.category}</h4>
        <h4>Value: ${this.value}</h4>
    </div>
    <div class="text-center m-5 question">
        <h3>${this.question}</h3>
        <div class="answer">
            <p>${this.answer}</p>
        </div>
    </div>
    </div>
    <div class="col-12 d-flex justify-content-around flex-grow-1 mt-5">
        <button class="btn btn-success" onclick='app.playersController.givePoints(${this.value})'>Correct</button>
        <button class="btn btn-danger" onclick='app.playersController.givePoints(-${this.value})'>Incorrect</button>
    </div>
    
    
    `
  }
}
