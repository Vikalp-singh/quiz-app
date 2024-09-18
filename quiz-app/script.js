const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Noida", "Pune", "Delhi", "Ghaziabad"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${q.question}</p>`;
        q.answers.forEach((answer, i) => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${answer}
                </label><br>
            `;
        });
        quizContainer.appendChild(questionElement);
    });
}

document.getElementById('submitBtn').addEventListener('click', function() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
            score++;
        }
    });
    document.getElementById('result').textContent = `You scored ${score} out of ${questions.length}`;
});

loadQuiz();
