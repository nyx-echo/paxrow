const questionnaire = {
    questions: [
      {
        text: "What is your favorite hobby?",
        choices: [
          {
            text: "Reading",
            score: 5,
          },
          {
            text: "Sports",
            score: 3,
          },
          {
            text: "Movies",
            score: 2,
          },
          {
            text: "Music",
            score: 1,
          },
        ],
      },
      {
        text: "What is your favorite type of music?",
        choices: [
          {
            text: "Rock",
            score: 5,
          },
          {
            text: "Pop",
            score: 3,
          },
          {
            text: "Jazz",
            score: 2,
          },
          {
            text: "Classical",
            score: 1,
          },
        ],
      },
      {
        text: "What is your favorite type of food?",
        choices: [
          {
            text: "Italian",
            score: 5,
          },
          {
            text: "Mexican",
            score: 3,
          },
          {
            text: "Chinese",
            score: 2,
          },
          {
            text: "Indian",
            score: 1,
          },
        ],
      },
    ],
    matches: [
      {
        name: "Jane",
        email: "jane@example.com",
        score: 10,
      },
      {
        name: "John",
        email: "john@example.com",
        score: 8,
      },
      {
        name: "Bob",
        email: "bob@example.com",
        score: 7,
      },
    ],
    determineMatch: function () {
      let userScore = 0;
      // ask the questions
      for (let i = 0; i < this.questions.length; i++) {
        const question = this.questions[i];
        console.log(question.text);
        for (let j = 0; j < question.choices.length; j++) {
          console.log(`${j + 1}. ${question.choices[j].text}`);
        }
        const userChoice = parseInt(
          prompt("Enter your choice (1, 2, 3, or 4):")
        );
        userScore += question.choices[userChoice - 1].score;
      }
      // ask for email
      const email = prompt("Enter your email address:");
      // find the match
      let bestMatch = null;
      let bestMatchScore = 0;
      for (let i = 0; i < this.matches.length; i++) {
        const match = this.matches[i];
        if (match.score > bestMatchScore) {
          bestMatch = match;
          bestMatchScore = match.score;
        }
      }
      // display the result
      console.log(`Your best match is ${bestMatch.name} (${bestMatch.email}).`);
    },
  };
  
  questionnaire.determineMatch();

  