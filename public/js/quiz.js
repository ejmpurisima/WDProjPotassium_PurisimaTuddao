const questions = [
  {
    text: "Q1: What is your favorite game in Alice in Borderland?",
    options: ["7 of Hearts (Hide and Seek)", "Queen of Spades (Checkmate)", "King of Diamonds (Beauty Contest)", "10 of Hearts (Witch Hunt)", "All of them!", "I don't care...just move on...", "King of Clubs (Osmosis)"],
    values: ["Arisu", "Usagi", "Chishiya", "Kuina", "Niragi", "Ann", "Tatta"]
  },
  {
    text: "Q2: What would you do during an argument?",
    options: ["'I need a cigarette.'", "'OH YEAH?' *says 15 slurs*", "'I don't have time for this.'", "*Calmly tries to make a point*", "*Stands up for themselves*", "*Gives up*","*Knows you're wrong but doesn't care to say it*"],
    values: ["Kuina", "Niragi", "Ann", "Arisu", "Usagi", "Tatta", "Chishiya"]
  },
  {
    text: "Q3: If I was a worm, would you still love me?",
    options: ["I guess bro", "Why are you like this", "Um...maybe...?","Absolutely not what are you on", "Yes :) !", "I would eat you like the fish", "I would build you a home in a jar and talk to you every day <3" ],
    values: ["Chishiya", "Ann", "Arisu", "Niragi", "Usagi", "Kuina", "Tatta"]
  },
    {
    text: "Q4: Pick a random person. Choose wisely.",
    options: ["Sayori (Doki Doki Literature Club", "Spongebob (Spongebob Squarepants)", "Ice Spice (Musician)", "L Lawliet (Death Note)", "Elphaba Thropp (Wicked)", "Frontman (Squid Game)", "Mahoraga (Jujutsu Kaisen)"],
    values: ["Usagi", "Tatta", "Niragi", "Arisu", "Chishiya", "Kuina", "Ann"]
  },
   {
    text: "Q5: Which of our vocal stims are you?",
    options: ["55 burgers 55 fries 55 tacos 55 pies", "the biggest beef steak", "WHEEERE HAVE YOU BEEEN ALL MY LAIAIF", "1 2 123 RELEASE EM", "no baby.. i know dada...", "did i just catch a lil bit of attitude","beefin with my chick while i'm in jail"],
    values: ["Tatta", "Chishiya", "Usagi", "Kuina", "Niragi", "Ann", "Arisu"]
  },
    {
    text: "Q6: What comes after this question?",
    options: ["Just put the fries in the bag", "I hate you", "Next question", "SSSSSSSIIIIXXXX SSSEEEVEEENNN", "The number above six", "67...","This is a 67 joke, isn't it?"],
    values: ["Kuina", "Niragi", "Ann", "Arisu", "Usagi", "Tatta", "Chishiya"]
  },
  {
    text: "Q7: Pick a random song title.",
    options: ["You'll Find Lovers Like You and Me", "Somewhere Only We Know", "I Don't Care If You're Contagious", "Teenage Dirtbag", "You've Lost A Lot of Blood", "There She Goes", "my tears ricochet"],
    values: ["Usagi", "Tatta", "Niragi", "Arisu", "Chishiya", "Kuina", "Ann"]
  },
  {
    text: "Q8: How do you sleep at night?",
    options: ["Very comfortable with my Hatsune Miku body pillow", "Alone.", "Next to my pet rock", "How should I know? I'm asleep.", "I'd sleep better if you weren't here", "With my eyes open", "Pretty good!"],
    values: ["Arisu", "Usagi", "Chishiya", "Kuina", "Niragi", "Ann", "Tatta"]
  },
  {
    text: "Q9: Would you buy a Labubu?",
    options: ["They're so unsettling...", "Sure...?", "It's a waste of money.", "They're camp! I would make it a keychain and carry it around.", "What is a Labubu??? Also I hate you", "You are under SPELLS people","LABUBU DUBAI CHOCOLATE BENSON BOONE"],
    values: ["Tatta", "Chishiya", "Usagi", "Kuina", "Niragi", "Ann", "Arisu"]
  },
    {
    text: "Q10: Pick a fatal flaw.",
    options: ["Excessive pride or overconfidence", "Ambition", "Overly trusting","Wrath", "Paranoia", "Your past", "Feeling of inferiority" ],
    values: ["Chishiya", "Ann", "Arisu", "Niragi", "Usagi", "Kuina", "Tatta"]
  },
  {
    text: "Q11: What would you do if when you okay so he said yes would go?",
    options: ["Legends lang nakakaalam", "Genuinely what are you on ", "??????", "I had a stroke reading this", "Um.. I'd tell him, god bless him", "I don't know what you mean there babes","Did you take your meds today?"],
    values: ["Kuina", "Niragi", "Ann", "Arisu", "Usagi", "Tatta", "Chishiya"]
  },
    {
    text: "Q12: What AO3 tag are you?",
    options: ["'Hurt/Comfort'", "'Horsemen of the Apocalypse'", "'a disaster'", "'Found Family'", "'no beta we die like men'", "'i thought angst would be funny and it was", "'Major Character Death'"],
    values: ["Arisu", "Usagi", "Chishiya", "Kuina", "Niragi", "Ann", "Tatta"]
  },
  
];

/* 
arisu
usagi
chishiya
kuina
niragi
ann
tatta

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
E - Ice Spice (Musician)
F - Judas (The Bible)
G - Spongebob (Spongebob Squarepants)

Q5: Which of our vocal stims are you?
A - beefin with my chick while i'm in jail
B - WHEEERE HAVE YOU BEEEN ALL MY LAIAIF
C - the biggest beef steak
D - 1 2 123 RELEASE EM
E - no baby.. i know dada...
F - did i just catch a lil bit of attitude
G - 55 burgers 55 fries 55 tacos 55 pies
*/

let currentQuestion = 0;

let scores = {
  Arisu: 0,
  Usagi: 0,
  Chishiya: 0,
  Kuina: 0,
  Niragi: 0,
  Ann: 0,
  Tatta: 0
};

const quizBox = document.getElementById("quiz-box");
const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".options button");
const resultDiv = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.text;

  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.onclick = () => selectAnswer(index);
  });
}

function selectAnswer(optionIndex) {
  const character = questions[currentQuestion].values[optionIndex];
  scores[character]++;

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
  backBtn.style.display = "none";

 
  const maxScore = Math.max(...Object.values(scores));


  const topCharacters = Object.keys(scores).filter(
    char => scores[char] === maxScore
  );

 
  const highest =
    topCharacters[Math.floor(Math.random() * topCharacters.length)];

  let resultHTML = "";

  switch (highest) {
    case "Arisu":
      resultHTML = `
        <div class="result-header">
          <div class="result-name">
            <h3>Arisu</h3>
          </div>
          <div class="result-image">
            <img src="characs/arisu.jpg" alt="Arisu">
          </div>
        </div>
        <div class="result-description">
          <p>u are literally niragi.</p>
          <p class="result-summary">oh skibidiii</p>
        </div>
        <button id="restart-btn" class="restart-btn">Restart Quiz</button>
      `;
      break;

    case "Usagi":
      resultHTML = `
        <div class="result-header">
          <div class="result-name">
            <h3>Usagi</h3>
          </div>
          <div class="result-image">
            <img src="characs/usagi.jpg" alt="Usagi">
          </div>
        </div>
        <div class="result-description">
          <p>u are literally niragi.</p>
          <p class="result-summary">oh skibidiii</p>
        </div>
        <button id="restart-btn" class="restart-btn">Restart Quiz</button>
      `;
      break;

    case "Chishiya":
      resultHTML = `
        <div class="result-header">
          <div class="result-name">
            <h3>Chishiya</h3>
          </div>
          <div class="result-image">
            <img src="characs/chishiya.jpg" alt="Chishiya">
          </div>
        </div>
        <div class="result-description">
          <p>u are literally niragi.</p>
          <p class="result-summary">oh skibidiii</p>
        </div>
        <button id="restart-btn" class="restart-btn">Restart Quiz</button>
      `;
      break;

    case "Kuina":
      resultHTML = `
        <div class="result-header">
          <div class="result-name">
            <h3>Kuina</h3>
          </div>
          <div class="result-image">
            <img src="characs/kuina.jpg" alt="Kuina">
          </div>
        </div>
        <div class="result-description">
          <p>u are literally niragi.</p>
          <p class="result-summary">oh skibidiii</p>
        </div>
        <button id="restart-btn" class="restart-btn">Restart Quiz</button>
      `;
      break;

    case "Niragi":
      resultHTML = `
        <div class="result-header">
          <div class="result-name">
            <h3>Niragi</h3>
          </div>
          <div class="result-image">
            <img src="characs/niragi.jpg" alt="Niragi">
          </div>
        </div>
        <div class="result-description">
          <p>u are literally niragi.</p>
          <p class="result-summary">oh skibidiii</p>
        </div>
        <button id="restart-btn" class="restart-btn">Restart Quiz</button>
      `;
      break;

    case "Ann":
      resultHTML = `
        <div class="result-header">
          <div class="result-name">
            <h3>Ann</h3>
          </div>
          <div class="result-image">
            <img src="characs/ann.jpg" alt="Ann">
          </div>
        </div>
        <div class="result-description">
          <p>u are literally niragi.</p>
          <p class="result-summary">oh skibidiii</p>
        </div>
        <button id="restart-btn" class="restart-btn">Restart Quiz</button>
      `;
      break;

    case "Tatta":
      resultHTML = `
        <div class="result-header">
          <div class="result-name">
            <h3>Tatta</h3>
          </div>
          <div class="result-image">
            <img src="characs/tatta.jpg" alt="Tatta">
          </div>
        </div>
        <div class="result-description">
          <p>u are literally niragi.</p>
          <p class="result-summary">oh skibidiii</p>
        </div>
        <button id="restart-btn" class="restart-btn">Restart Quiz</button>
      `;
      break;
  }

  resultDiv.innerHTML = resultHTML;
  resultDiv.classList.remove("hidden");
}

loadQuestion();


document.addEventListener("click", function(e) {
  if (e.target && e.target.id === "restart-btn") {

    currentQuestion = 0;

    
    for (let key in scores) {
      scores[key] = 0;
    }


    resultDiv.classList.add("hidden");
    quizBox.classList.remove("hidden");
    quizBox.classList.remove("fade-out");

   
    backBtn.style.display = "flex";

    
    loadQuestion();
  }
});


const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    backBtn.style.display = "flex";
    quizBox.classList.add("fade-out"); 
    setTimeout(() => {
      currentQuestion--;
      loadQuestion();
      quizBox.classList.remove("fade-out");
      resultDiv.classList.add("hidden");
    }, 400);
  }
});



