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

Q2: What would you do during an argument?
A - *Calmly tries to make a point*
B - *Stands up for themselves*
C - *Knows you're wrong but doesn't care enough to say it*
D - "I need a cigarette" 
E - "OH YEAH?" *says 15 slurs*
F - "I don't have time for this"
G - *Gives up*

Q3: If I was a worm, would you still love me?
A - Um... maybe...?
B - Yes :) !
C - I guess bro
D - I would eat you like the fish
E - Absolutely not what are you on
F - Why are you like this
G - I would build you a home in a jar and talk to you every day <3

Q4: Pick a random person. Choose wisely.
A - L Lawliet (Death Note)
B - Sayori (Doki Doki Literature Club)
C - Elphaba Thropp (Wicked)
D - Frontman (Squid Game)
E - Ice Spice (Mus  ician)
F - Mahoraga (Jujutsu Kaisen)
G - Spongebob (Spongebob Squarepants)

Q5: Which of our vocal stims are you?
A - beefin with my chick while i'm in jail
B - WHEEERE HAVE YOU BEEEN ALL MY LAIAIF
C - the biggest beef steak
D - 1 2 123 RELEASE EM
E - no baby.. like i know dada...
F - did i just catch a lil bit of attitude
G - 55 burgers 55 fries 55 tacos 55 pies

Q6: What comes after this question?
A - SSSSSSSIIIIXXXX SSSEEEVEEENNN
B - The number above six
C - This is a 67 joke, isn't it
D - Just put the fries in the bag
E - KYS
F - Next question
G - 67... 

Q7: What The CLIQUE moment are you?
A - 
B - 
C - 
D - "what's your bmi" "enfp"
E - 
F - "i genuinely feel the need to hurt my math teacher"
G -
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
