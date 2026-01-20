const questions = [
  {
    text: "",
    options: ["Option A", "Option B", "Option C", "Option D"],
    values: ["A", "B", "C", "D"]
  },
  {
    text: "Question 2 (placeholder)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    values: ["A", "B", "C", "D"]
  },
  {
    text: "Question 3 (placeholder)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    values: ["A", "B", "C", "D"]
  }
];

/* 
arisu
usagi
chishiya
kuina
niragi
ann
tatta
*/

let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };

const quizBox = document.getElementById("quiz-box");
const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".options button");
const resultDiv = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.text;

  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
  });
}

function selectAnswer(choice) {
  scores[choice]++;

  quizBox.classList.add("fade-out");

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
      quizBox.classList.remove("fade-out");
    } else {
      showResult();
    }
  }, 400);
}

function showResult() {
  quizBox.classList.add("hidden");

  let highest = "A";
  for (let key in scores) {
    if (scores[key] > scores[highest]) highest = key;
  }

let resultHTML = `
  <div class="result-header">
    <div class="result-name">
      <h3>Arisu</h3>
    </div>

    <div class="result-image">
      
      <img src="characs/arisu.jpg" alt="Arisu">
    </div>
  </div>

  <div class="result-description">
    <p>
      (Placeholder blablabla bajalnaaobakbkbjojbdasbduahdiaonduiasbdioahdouashd 
      ur literally niragi)
    </p>

    <p class="result-summary">
      (Placeholder blabla niragi whatever okay bye)
    </p>
  </div>
`;


  resultDiv.innerHTML = resultHTML;
  resultDiv.classList.remove("hidden");
}

loadQuestion();
