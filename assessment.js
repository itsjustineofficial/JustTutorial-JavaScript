const questions = [
    {
        question: "What is extension of JavaScript?",
        answers: [
            {text: ".xml", correct: false},
            {text: ".js", correct: true},
            {text: ".css", correct: false},
            {text: ".java", correct: false},
        ]
    },
    {
        question: "What is extension of JavaScript?",
        answers: [
            {text: ".xml", correct: false},
            {text: ".js", correct: true},
            {text: ".css", correct: false},
            {text: ".java", correct: false},
        ]
    },
    {
        question: "What is extension of JavaScript?",
        answers: [
            {text: ".xml", correct: false},
            {text: ".js", correct: true},
            {text: ".css", correct: false},
            {text: ".java", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();