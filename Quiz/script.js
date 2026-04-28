const questions = [
  {
    question: "What is JavaScript?",
    answers: ["Language", "Database", "Server", "Browser"],
    correct: 0
  },
  {
    question: "Which is used for styling?",
    answers: ["HTML", "CSS", "JS", "Node"],
    correct: 1
  },
  {
    question: "Which keyword is used for variable?",
    answers: ["var", "int", "string", "define"],
    correct: 0
  }
];

let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 10;

  const q = questions[currentIndex];

  document.getElementById("question").innerText = q.question;
  document.getElementById("progress").innerText =
    `${currentIndex + 1}/${questions.length}`;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((ans, index) => {
    const div = document.createElement("div");
    div.innerText = ans;
    div.classList.add("option");

    div.onclick = () => selectAnswer(div, index);
    answersDiv.appendChild(div);
  });

  startTimer();
}

function startTimer() {
  document.getElementById("timer").innerText = timeLeft + "s";

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft + "s";

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(element, index) {
  const correctIndex = questions[currentIndex].correct;

  if (index === correctIndex) {
    score++;
    element.style.background = "green";
  } else {
    element.style.background = "red";
  }

  clearInterval(timer);

  setTimeout(() => {
    nextQuestion();
  }, 1000);
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Your Score: ${score}/${questions.length}</h2>
      <button onclick="location.reload()">Restart</button>
    `;
  }
}

loadQuestion();