'use strict';

const finishBtn = document.querySelector('.finish');
const ruseltPage = document.querySelector('.pageFinal');

const questions = [
  {
    question: 'Which of the following is used to declare a variable in JavaScript?',
    answer: [
      { text: 'var', correct: true },
      { text: 'vbl', correct: false },
      { text: 'letgo', correct: false },
      { text: 'variable', correct: false },
    ]
  },
  {
    question: 'What does `===` operator check in JavaScript?',
    answer: [
      { text: 'Only value equality', correct: false },
      { text: 'Only type equality', correct: false },
      { text: 'Value and type equality', correct: true },
      { text: 'Neither value nor type', correct: false },
    ]
  },
  {
    question: 'Which method is used to convert a JSON string to a JavaScript object?',
    answer: [
      { text: 'JSON.parse()', correct: true },
      { text: 'JSON.stringify()', correct: false },
      { text: 'JSON.toObject()', correct: false },
      { text: 'JSON.convert()', correct: false },
    ]
  },
  {
    question: 'Which of the following is NOT a JavaScript data type?',
    answer: [
      { text: 'Number', correct: false },
      { text: 'String', correct: false },
      { text: 'Boolean', correct: false },
      { text: 'Character', correct: true },
    ]
  }
];

let currentQuestionIndex = 0;
let score = 5;
let choices = Array.from(document.getElementsByClassName("choice"));
const quiz = document.querySelector('.quiz');
const replay = document.querySelector(".replay");
const home = document.querySelector('.home')
const start = document.querySelector('.start')

//hide quiz page and showing ruselt Page
finishBtn.addEventListener('click', function () {
  ruseltPage.classList.remove('hidden');
  quiz.classList.add('hidden')
})


function showQuestion() {
  const qst = questions[currentQuestionIndex];
  document.querySelector('#element').textContent = qst.question;
  const container = document.querySelector('.quiz .choix');
  console.log("container", container)
  const choices = Array.from(container.getElementsByClassName('choice'));


  //btn choice 1 index=0
  choices.forEach((btn, index) => {
    btn.style.backgroundColor = "";
    btn.textContent = qst.answer[index].text;
    btn.addEventListener("click", function () {
      checkAnswers(index, btn)
    })
  });
}

function restartQuiz(){
  score = 0;
  currentQuestionIndex = 0;
  document.querySelector('#scoreQuiz').textContent = '0';

  finishBtn.classList.add('hidden');
  ruseltPage.classList.add('hidden');
  quiz.classList.remove('hidden');

  showQuestion();
}

replay.addEventListener('click', ()=>{
  restartQuiz();
});

function checkAnswers(index, btn) {
  if (currentQuestionIndex >= questions.length) return;
  const qst = questions[currentQuestionIndex];

  if (qst.answer[index].correct) {
    btn.style.backgroundColor = '#97f173ff';
    document.querySelector('#scoreQuiz').textContent = score + 5;
  } else {
    btn.style.backgroundColor = '#ff6b6b'
  }
  setTimeout(() => {
    nextQuestion();
  }, 600);
}

function nextQuestion() {
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    finishBtn.classList.remove('hidden');
    // ruseltPage.classList.remove('hidden');
  }
}



showQuestion();

