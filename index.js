console.log("it works");
console.log(name);

function renderQuestion(question) {
  // Line 6 clears the div with id questions
  $("#question").html("");
  $("#question").append(`<h2>${question.question}</h2>`);
  $("#question").append(
    `<p><input type="radio" value ="0" name="answer"/>${question.possibleAnswers[0]}</p>`
  );
  $("#question").append(
    `<p><input type="radio" value ="1" name="answer"/>${question.possibleAnswers[1]}</p>`
  );
  $("#question").append(
    `<p><input type="radio" value ="2" name="answer"/>${question.possibleAnswers[2]}</p>`
  );
  $("#question").append(
    `<p><input type="radio" value ="3" name="answer"/>${question.possibleAnswers[3]}</p>`
  );
  $("#question").append(`<button class="submitButton">Submit</button>`);
}

// This display total questions
$(".questionAmount").html(QUESTIONS.length);

// This renders first questions after start button is pressed
$("body").on("click", ".start", function() {
  $("#startScreen").hide();
  $("#question").show();
  renderQuestion(QUESTIONS[currentQuestion]);
  // This sets question number to 1 when starts game
  $(".questionNumber").html(currentQuestion + 1);
});

// Feedback Screen
// This code should include adding the score and showing right or wrong answer.
$("body").on("click", ".submitButton", function() {
  // $("#question").hide();
  $("#feedback").show();
  $("#feedback").html("");
  // This gives feedback
  if (
    $('input[name="answer"]:checked').val() ==
    QUESTIONS[currentQuestion].correctAnswer
  ) {
    $("#feedback").append(`<p>Correct Answer! You know your stuff.</p>`);
    SCORE++;
  } else {
    const correctIndex = QUESTIONS[currentQuestion].correctAnswer;
    $("#feedback").append(
      `<p>Wrong! The correct answer is ${QUESTIONS[currentQuestion].possibleAnswers[correctIndex]}.</p>`
    );
  }
  $(".score").html(SCORE);
  $(".submitButton").hide();
  // WHY DOESNT THE BELOW WORK TO ADD BACK THE NEXT BUTTON?
  $("#question").append(`<button class="nextButton">Next</button>`);
  // $(".nextButton").show();
  // $("#feedback").append(`<button class="nextButton">Next</button>`);
});

// This goes to next question or renders finish screen after last question
$("body").on("click", ".nextButton", function() {
  if (currentQuestion == QUESTIONS.length - 1) {
    $("#finish").show();
    $("#question").hide();
    $("#feedback").hide();
  } else {
    $("#question").show();
    $("#feedback").hide();
    currentQuestion++;
    renderQuestion(QUESTIONS[currentQuestion]);
    // This increases question number to 1 while play game
    $(".questionNumber").html(currentQuestion + 1);
  }
});

// This starts game over when done
$("body").on("click", ".startOver", function() {
  $("#finish").hide();
  $("#startScreen").show();
  // This resets question number when restart game;
  currentQuestion = 0;
  $(".questionNumber").html(currentQuestion);
});
