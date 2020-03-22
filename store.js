let SCORE = 0;
let currentQuestion = 0;

const QUESTIONS = [
  {
    question: "In which town do the Simpsons reside?",
    possibleAnswers: ["Springfield", "Shelbyville", "Seinfeld", "Stauton"],
    correctAnswer: 0
  },
  {
    question: "What is the name of the Simpsons' next door neighbor?",
    possibleAnswers: [
      "Barney Gumble",
      "Ned Flanders",
      "Principal Skinner",
      "Timothy Lovejoy"
    ],
    correctAnswer: 1
  },
  {
    question: "How old is Bart?",
    possibleAnswers: ["10", "11", "12", "13"],
    correctAnswer: 0
  },
  {
    question: "What is the name of the clown on Channel 6?",
    possibleAnswers: [
      "Barney Gumble",
      "Ned Flanders",
      "Principal Skinner",
      "Krusty"
    ],
    correctAnswer: 3
  },
  {
    question: "Which one of these is not a catchphrase Bart uses",
    possibleAnswers: ["Aye Caramba", "Don't have a cow man", "Woohoo", "Oh my"],
    correctAnswer: 3
  }
];
