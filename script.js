"use strict";

const finishBtn = document.querySelector(".finish");
const ruseltPage = document.querySelector(".pageFinal");

const questions = [
  {
    question:
      "Which of the following is used to declare a variable in JavaScript?",
    answer: [
      { text: "var", correct: true },
      { text: "vbl", correct: false },
      { text: "letgo", correct: false },
      { text: "variable", correct: false },
    ],
  },
  {
    question: "What does `===` operator check in JavaScript?",
    answer: [
      { text: "Only value equality", correct: false },
      { text: "Only type equality", correct: false },
      { text: "Value and type equality", correct: true },
      { text: "Neither value nor type", correct: false },
    ],
  },
  {
    question:
      "Which method is used to convert a JSON string to a JavaScript object?",
    answer: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.convert()", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answer: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Character", correct: true },
    ],
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    answer: [
      { text: "// comment", correct: true },
      { text: "<!-- comment -->", correct: false },
      { text: "# comment", correct: false },
      { text: "/* comment */", correct: false },
    ],
  },
  {
    question: "Which keyword is used to create a constant in JavaScript?",
    answer: [
      { text: "const", correct: true },
      { text: "constant", correct: false },
      { text: "let", correct: false },
      { text: "var", correct: false },
    ],
  },
  {
    question: "Which function is used to print something to the console?",
    answer: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "log.console()", correct: false },
      { text: "write()", correct: false },
    ],
  },
  {
    question: "What is the result of `typeof null`?",
    answer: [
      { text: '"object"', correct: true },
      { text: '"null"', correct: false },
      { text: '"undefined"', correct: false },
      { text: '"number"', correct: false },
    ],
  },
  {
    question: "Which array method removes the last element?",
    answer: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "Which loop is guaranteed to run at least once?",
    answer: [
      { text: "do...while", correct: true },
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: "foreach", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let totalQyes = document.querySelector("#total-score");
totalQyes.textContent = questions.length;
let choices = Array.from(document.getElementsByClassName("choice"));
const quiz = document.querySelector(".quiz");

finishBtn.addEventListener("click", function () {
  ruseltPage.classList.remove("hidden");
  quiz.classList.add("hidden");
});

function showQuestion() {
  const qst = questions[currentQuestionIndex];
  document.querySelector("#element").textContent = qst.question;

  const container = document.querySelector(".quiz .choix");
  const choices = Array.from(container.getElementsByClassName("choice"));

  choices.forEach((btn, index) => {
    btn.style.backgroundColor = "";
    btn.disabled = false;
    btn.textContent = qst.answer[index].text;

    btn.onclick = () => {
      checkAnswers(index, btn, choices);
    };
  });
}

function checkAnswers(index, btn, choices) {
  const qst = questions[currentQuestionIndex];

  choices.forEach((b) => (b.disabled = true));

  if (qst.answer[index].correct) {
    btn.style.backgroundColor = "#97f173ff";
    score++;
    document.querySelector(".correct-score").textContent = score;
  } else {
    btn.style.backgroundColor = "#ff6b6b";
  }

  setTimeout(nextQuestion, 600);
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    let correct = document.querySelector(".final-score")
    console.log(correct);
    correct.textContent = score
    let perc = document.querySelector("#pourcentage")
    perc.textContent = score * 10 + "%"
    finishBtn.classList.remove("hidden");
    quiz.classList.add("hidden");
    ruseltPage.classList.remove("hidden");
  }
}

showQuestion();
