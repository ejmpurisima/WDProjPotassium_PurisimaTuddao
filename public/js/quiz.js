const questions = [
  {
    text: "Q1: What is your favorite game in Alice in Borderland?",
    options: ["7 of Hearts (Hide and Seek)", "Queen of Spades (Checkmate)", "King of Diamonds (Beauty Contest)", "10 of Hearts (Witch Hunt)", "All of them!", "I don't care...just move on...", "King of Clubs (Osmosis)"],
    values: ["Arisu", "Usagi", "Chishiya", "Kuina", "Niragi", "Ann", "Tatta"]
  },
  {
    text: "Question 2 (placeholder)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    values: ["Arisu", "Usagi", "Chishiya", "Kuina", "Niragi", "Ann", "Tatta"]
  },
  {
    text: "Question 3 (placeholder)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    values: ["Arisu", "Usagi", "Chishiya", "Kuina", "Niragi", "Ann", "Tatta"]
  }
];

let currentQuestion = 0;
let scores = { Arisu: 0, Usagi: 0, Chishiya: 0, Kuina: 0, Niragi: 0, Ann: 0, Tatta: 0 };

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
  

  if (highest = "Arisu"){
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
  
  else if(highest = "Usagi"){
  for (let key in scores) {
    if (scores[key] > scores[highest]) highest = key;
  }

let resultHTML = `
  <div class="result-header">
    <div class="result-name">
      <h3>USAGOIII</h3>
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

  }}
loadQuestion();



