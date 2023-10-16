const quizzes = [
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Shanghai"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Ag", "Ge"],
        correctAnswer: "Au"
    },
    {
        question: "Which country is famous for the Great Wall of China?",
        options: ["India", "China", "Japan", "South Korea"],
        correctAnswer: "China"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Lungs", "Skin"],
        correctAnswer: "Skin"
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen"
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    }
];


const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const correctAnswerElement = document.getElementById("correct-answer");
const timerElement = document.getElementById("timer");

let currentQuiz = 0;
let score = 0;
let timer;

// function startTimer(durationInSeconds) {
//     let timerSeconds = durationInSeconds;
//     updateTimer(timerSeconds);

//     timer = setInterval(() => {
//         timerSeconds--;
//         if (timerSeconds < 0) {
//             clearInterval(timer);
//             showResult();
//         } else {
//             updateTimer(timerSeconds);
//         }
//     }, 1000);
// }

// function updateTimer(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//     timerElement.textContent = `Time left: ${formattedTime}`;
// }

function loadQuiz() {
    if (currentQuiz < quizzes.length) {
        questionElement.textContent = quizzes[currentQuiz].question;
        optionsContainer.innerHTML = "";
        quizzes[currentQuiz].options.forEach((option) => {
            const optionElement = document.createElement("button");
            optionElement.textContent = option;
            optionElement.addEventListener("click", () => checkAnswer(option));
            optionsContainer.appendChild(optionElement);
        });
        nextButton.disabled = true;
        clearInterval(timer);
        startTimer(120); // 2 minutes timer for the entire quiz
    } else {
        showResult();
    }
}


function checkAnswer(selectedOption) {
    const correctAnswer = quizzes[currentQuiz].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuiz++;
    if (currentQuiz < quizzes.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
    resultElement.textContent = `Your score: ${score}/${quizzes.length}`;
    resultElement.style.display = "block";
}

nextButton.addEventListener("click", loadQuiz);

loadQuiz();
