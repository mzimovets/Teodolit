export const answer = [
  {
    // Вопрос 1
    answer1: 1,
  },
  {
    // Вопрос 2
    answer1: 4,
  },
  {
    //  Вопрос 3
    answer1: 2,
  },
];

export const validateAnswer = (taskNum, userAnswer) => {
  console.log("--->", taskNum, userAnswer);

  if (answer[taskNum].answer1 === userAnswer) {
    return true;
  } else {
    return false;
  }
};
