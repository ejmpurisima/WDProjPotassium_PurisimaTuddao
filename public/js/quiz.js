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



