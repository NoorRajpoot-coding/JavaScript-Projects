const questions = [
    {
        question: "Which is Chinese Drama?",
        answer: [
            { text: "Ehd-e-Wafa", correct: false },
            { text: "Rang Mahal", correct: false },
            { text: "Our Secret", correct: true },
            { text: "sanwal yaar Piya", correct: false },
        ]
    },
    {
        question: "Which is Chinese Historical Drama?",
        answer: [
            { text: "Rich Man", correct: false },
            { text: "Till the end of the moon", correct: true },
            { text: "Secret Dairy", correct: false },
            { text: "Sweet Sweet", correct: false },
        ]
    },
    {
        question: "Which is most trending Drama in pakistan?",
        answer: [
            { text: "Rang Reza", correct: false },
            { text: "fairy tale", correct: false },
            { text: "College Gate", correct: false },
            { text: "Sunu Chanda", correct: true },
        ]
    },
    {
        question: "Which country is most famous about their Dramas?",
        answer: [
            { text: "Pakistan", correct: true },
            { text: "India", correct: false },
            { text: "Korea", correct: false },
            { text: "Chinese", correct: false },
        ]
    }
];

const questionElements = document.getElementById('question');
const answerbtn = document.getElementById('ans-btn');
const nextbtn = document.getElementById('next-btn')

let CurrentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
    CurrentQuestionIndex = 0
    score = 0
    nextbtn.innerHTML = "Next"
    showQuestion()
}

function showQuestion() {

    resetState();

    let currentQuestion = questions[CurrentQuestionIndex]
    let QuestionNo = CurrentQuestionIndex + 1
    questionElements.innerHTML = QuestionNo + '. ' + currentQuestion.question

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerbtn.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', e => {
            const selectbtn = e.target
            const isCorrect = selectbtn.dataset.correct === 'true'
            if (isCorrect) {
                selectbtn.classList.add('correct')
                score++;
            } else {
                selectbtn.classList.add('incorrect')
            }
            Array.from(answerbtn.children).forEach(btn => {
                if (btn.dataset.correct === 'true') {
                    btn.classList.add('correct')
                }
                btn.disabled = true
            })
            nextbtn.style.display = 'block'
        })
    })
}

function resetState() {
    nextbtn.style.display = 'none'
    while (answerbtn.firstChild) {
        answerbtn.removeChild(answerbtn.firstChild)
    }
}

function handlenextbtn() {
    CurrentQuestionIndex++;
    if (CurrentQuestionIndex < questions.length) {
        showQuestion()

    } else {
        showScore()
    }
}

function showScore() {
    resetState()
    questionElements.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextbtn.innerHTML = 'Play Again'
    nextbtn.style.display = 'block'
}

nextbtn.addEventListener('click', () => {
    if (CurrentQuestionIndex < questions.length) {
        handlenextbtn()
    } else {
        StartQuiz()
    }
})

StartQuiz()