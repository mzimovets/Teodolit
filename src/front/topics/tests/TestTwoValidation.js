export const answer = [
  {
    // Вопрос 1
    answer1: "лимб",
    answer2: "алидада",
  },
  {
    // Вопрос 2
    answer1: "цена деления лимба",
  },
  {
    //  Вопрос 3
    answer1: "1",
  },
  {
    // Вопрос 4
    answer1: 3,
  },
];

const validateFirstAnswers = (userAnswer) => {
  const element1 = answer[0].answer1;
  const element2 = answer[0].answer2;
  if (
    (element1 === userAnswer.answer1 && element2 === userAnswer.answer2) ||
    (element1 === userAnswer.answer2 && element2 === userAnswer.answer1)
  ) {
    return true;
  } else {
    return false;
  }
};

const validateSecondAnswers = (userAnswer) => {
  const correctAnswer = answer[1].answer1.toLowerCase();

  const keywords = ["цена деления", "цена деления лимба"];
  const containsAllKeywords = keywords.every((keyword) =>
    correctAnswer.includes(keyword)
  );

  if (containsAllKeywords) {
    return true;
  } else {
    return false;
  }
};

const validateRemainingAnswers = (taskNum, userAnswer) => {
  const correctAnswer = answer[taskNum].answer1;
  if (correctAnswer === userAnswer.answer1) {
    return true;
  } else return false;
};

export const validateAnswer = (taskNum, userAnswer) => {
  if (taskNum === 0) {
    return validateFirstAnswers(userAnswer);
  } else if (taskNum === 1) {
    return validateSecondAnswers(userAnswer);
  } else {
    return validateRemainingAnswers(taskNum, userAnswer);
  }
};
