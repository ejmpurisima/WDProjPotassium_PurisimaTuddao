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
    options: ["55 burgers 55 fries 55 tacos 55 pies", "the biggest beef steak", "WHEEERE HAVE YOU BEEEN ALL MY LAIAIF", "1 2 123 RELEASE EM", "let me write tha down...", "did i just catch a lil bit of attitude","beefin with my chick while i'm in jail"],
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

/* arisu
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
C - This is a 67 joke, isn't it...
D - Just put the fries in the bag bro
E - I hate you
F - Next question
G - 67... 

Q7: Pick a random song title.
A - Teenage Dirtbag
B - You'll Find Lovers Like You and Me
C - You've Lost A Lot of Blood
D - There She Goes
E - I Don't Care If You're Contagious
F - my tears ricochet
G - Somewhere Only We Know

Q8: How do you sleep at night?
A - Very comfortable with my Hatsune Miku body pillow
B - Alone.
C - Next to my pet rock
D - How should I know? I'm asleep.
E - I'd sleep better if you weren't here
F - With my eyes open
G - Pretty good!

Q9: Would you buy a Labubu?
A - LABUBU DUBAI CHOCOLATE BENSON BOONE
B - It's a waste of money.
C - Sure...?
D - They're camp! I would make it a keychain and carry it around.
E - What is a Labubu???
F - You are under SPELLS people
G - They're so unsettling...

Q10: Pick a fatal flaw.
A - Overly trusting
B - Paranoia
C - Excessive pride or overconfidence
D - Your past
E - Wrath
F - Ambition
G - Feeling of inferiority

Q11: What would you do if when you okay so he said yes would go?
A - I had a stroke reading this
B - Um.. I'd tell him, god bless him
C - Did you take your meds today?
D - Legends lang nakakaalam
E - Genuinely what are you on 
F - ??????
G - I don't know what you mean there babes

Q12: What AO3 tag are you?
A - "Hurt/Comfort"
B - "Horsemen of the Apocalypse"
C - "a disaster"
D - "Found family"
E - "no beta we die like men"
F - "i thought angst would be funny and it was"
G - "Major Character Death"

*/

/*
charac desc

Arisu: you and arisu are like this 🤞 your friends LOVE you and you maybe have a hero complex. don't drink any more caffeine and make sure you get some sleep. it's hard being so smart all the time, right?
you are incredibly understanding and such a good problem solver. you also tend to put people before yourself. but mostly, you're chronically online.

Usagi: congrats, you got usagi! you're chill but also quite emotional. you like hobbies that get your mind out of the gutter like how she enjoys mountain climbing.

Chishiya: contact me on my discord @euoniase (- erin)

Kuina: legends lang nakakaalam at legend ka pala ❤️ you're the coolest and you think you're nonchalant but you're not and it's okay!

Niragi: you are witewawi niragi. no comment u got literally the worst character in the entire show. yes, the website developers are laughing at u and we put this on purpose. better luck next time

Ann: you are exactly who you think you are and yes you're the alpha of this pack. you're too mysterious and you keep to yourself too much. 

Tatta: bros life is just sunshine and rainbows

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
const resultDiv = document.getElementById("result");
const backBtn = document.getElementById("back-btn");


const nameSection = document.getElementById("name-input-section");
const quizContent = document.getElementById("quiz-content");
const actualQuestionText = document.getElementById("actual-question-text");
const optionsContainer = document.querySelector("#quiz-content .options");


function saveNameAndStart() {
    const nameVal = document.getElementById("user-name-input").value;
    if (nameVal.trim() === "") {
        alert("Please enter a name to proceed.");
        return;
    }
    
  
    localStorage.setItem("playerName", nameVal);

   
    nameSection.classList.add("hidden");
    quizContent.classList.remove("hidden");
  
    backBtn.style.display = "flex";

    loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  actualQuestionText.textContent = q.text;


  optionsContainer.innerHTML = "";


  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(btn);
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

  const playerName = localStorage.getItem("playerName") || "Player";
  const maxScore = Math.max(...Object.values(scores));
  const topCharacters = Object.keys(scores).filter(char => scores[char] === maxScore);
  const highest = topCharacters[Math.floor(Math.random() * topCharacters.length)];

  let resultHTML = "";

  const charDescs = {
    Arisu: "you and arisu are like this 🤞 your friends LOVE you and you maybe have a hero complex. don't drink any more caffeine and make sure you get some sleep. it's hard being so smart all the time, right? you are incredibly understanding and such a good problem solver. you also tend to put people before yourself. but mostly, you're chronically online.",
    Usagi: "congrats, you got usagi! you're chill but also quite emotional. you like hobbies that get your mind out of the gutter like how she enjoys mountain climbing.",
    Chishiya: "contact me on my discord",
    Kuina: "legends lang nakakaalam at legend ka pala ❤️ you're the coolest and you think you're nonchalant but you're not and it's okay!",
    Niragi: "you are witewawi niragi. no comment u got literally the worst character in the entire show. yes, the website developers are laughing at u and we put this on purpose. better luck next time",
    Ann: "you are exactly who you think you are and yes you're the alpha of this pack. you're too mysterious and you keep to yourself too much. ",
    Tatta: "bros life is just sunshine and rainbows"
  };

  resultHTML = `
    <div class="result-header">
      <div class="result-name">
        <h3>${playerName}, you are ${highest}</h3>
      </div>
      <div class="result-image">
        <img src="characs/${highest.toLowerCase()}.jpg" alt="${highest}">
      </div>
    </div>
    <div class="result-description">
      <p>${charDescs[highest]}</p>
      <p class="result-summary">oh skibidiii</p>
    </div>
    <button id="restart-btn" class="restart-btn">Restart Quiz</button>
  `;

  resultDiv.innerHTML = resultHTML;
  resultDiv.classList.remove("hidden");
}

document.addEventListener("click", function(e) {
  if (e.target && e.target.id === "restart-btn") {
    currentQuestion = 0;
    for (let key in scores) { scores[key] = 0; }
    
    resultDiv.classList.add("hidden");
    quizBox.classList.remove("hidden");
    quizBox.classList.remove("fade-out");


    nameSection.classList.remove("hidden");
    quizContent.classList.add("hidden");
    backBtn.style.display = "none";
  }
});

backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    quizBox.classList.add("fade-out"); 
    setTimeout(() => {
      currentQuestion--;
      loadQuestion();
      quizBox.classList.remove("fade-out");
      resultDiv.classList.add("hidden");
    }, 400);
  }
});