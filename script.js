"use strict";

const quiz = document.querySelector(".quiz");
const finishBtn = document.querySelector(".finish");
const resultPage = document.querySelector(".pageFinal");
const replayBtn = document.querySelector(".replay");

const questionText = document.querySelector("#element");
const choices = Array.from(document.querySelectorAll(".choice"));

const scoreText = document.querySelector(".correct-score");
const totalScoreText = document.querySelector("#total-score");
const finalScoreText = document.querySelector(".final-score");
const finalTotalScoreText = document.querySelector("#final-total-score");
const percentageText = document.querySelector("#pourcentage");

const questions = [
  {
    question: "Which of the following is used to declare a variable in JavaScript?",
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
    question: "Which method converts JSON string to object?",
    answer: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.convert()", correct: false },
    ],
  },
  {
    question: "Which is NOT a JavaScript data type?",
    answer: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Character", correct: true },
    ],
  },
  {
    question: "How do you write a single-line comment?",
    answer: [
      { text: "// comment", correct: true },
      { text: "<!-- comment -->", correct: false },
      { text: "# comment", correct: false },
      { text: "/* comment */", correct: false },
    ],
  },
  {
    question: "Which keyword creates a constant?",
    answer: [
      { text: "const", correct: true },
      { text: "constant", correct: false },
      { text: "let", correct: false },
      { text: "var", correct: false },
    ],
  },
  {
    question: "Which function prints to console?",
    answer: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "log.console()", correct: false },
      { text: "write()", correct: false },
    ],
  },
  {
    question: "Result of typeof null?",
    answer: [
      { text: '"object"', correct: true },
      { text: '"null"', correct: false },
      { text: '"undefined"', correct: false },
      { text: '"number"', correct: false },
    ],
  },
  {
    question: "Which array method removes last element?",
    answer: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "Which loop runs at least once?",
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

totalScoreText.textContent = questions.length;
finalTotalScoreText.textContent = questions.length;

function showQuestion() {
  const qst = questions[currentQuestionIndex];
  questionText.textContent = qst.question;

  choices.forEach((btn, index) => {
    btn.disabled = false;
    btn.style.backgroundColor = "";
    btn.textContent = qst.answer[index].text;

    btn.onclick = () => checkAnswer(index, btn);
  });
}

function checkAnswer(index, btn) {
  choices.forEach(b => b.disabled = true);

  if (questions[currentQuestionIndex].answer[index].correct) {
    btn.style.backgroundColor = "lightgreen";
    score++;
    scoreText.textContent = score;
  } else {
    btn.style.backgroundColor = "salmon";
  }

  setTimeout(nextQuestion, 600);
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  quiz.classList.add("hidden");
  resultPage.classList.remove("hidden");

  finalScoreText.textContent = score;
  percentageText.textContent =
    "Score: " + Math.round((score / questions.length) * 100) + "%";
}

replayBtn.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  scoreText.textContent = "0";

  resultPage.classList.add("hidden");
  quiz.classList.remove("hidden");

  showQuestion();
});

showQuestion();
