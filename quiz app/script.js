const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionList = document.getElementById("question-container");
const questionElement = document.getElementById("questions");
const answerElement = document.getElementById("answer-buttons");
const score = document.getElementById("right-answers");

let shuffleQuestions, currentQuestionIndex;
let countRightAnswers = 0;

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion()
})


function startGame() {
    countRightAnswers = 0;
    startButton.classList.add('hide');
    questionList.classList.remove('hide');
    score.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
    

}


function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerElement.appendChild(button);
    })
    answerElement.classList.remove('disable')
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);

    }
}


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach( button =>{
        setStatusClass(button, button.dataset.correct);
    })
    if(shuffleQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    } else {
        score.classList.add('hide');
        countRightAnswers= -1
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    if (selectedButton.dataset = correct) {
        countRightAnswers++;
     // +1, change it if you need +10, +25 etc
    }
    score.innerHTML = "Your score is: " + countRightAnswers;
}


function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}


function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'what is 2 + 2 ?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
            { text: '10', correct: false},
            { text: '0', correct: false},

        ]
    },
    {
        question: 'what is 10 + 16 ?',
        answers: [
            { text: '30', correct: false},
            { text: '26', correct: true},
            { text: '!!!', correct: false},
            { text: '100', correct: false},

        ]
    },
    {
        question: 'who is saad',
        answers: [
            { text: 'a beautiful soul', correct: false},
            { text: 'a handsome guy', correct: false},
            { text: 'the perfect human being', correct: false},
            { text: 'yes', correct: true},

        ]
    },
    {
        question: 'do you love web dev ?',
        answers: [
            { text: 'yes', correct: true},
            { text: 'no', correct: false},
            { text: 'Absolutely', correct: true},
            { text: 'nope', correct: false},

        ]
    },
    {
        question: 'Do you think life is worth living even though we are just a simple dot in this gigantic univers?',
        answers: [
            { text: 'Ayo chill bro !', correct: false},
            { text: 'are u okay !', correct: false},
            { text: 'HAHAHA nope', correct: true},
            { text: 'I agree', correct: false},

        ]
    },
]