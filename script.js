'use strict';


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
let score =0;
let availableQuestion = [...questions];
  document.getElementById('question').textContent ='hdhfdhdfhb'

 

 